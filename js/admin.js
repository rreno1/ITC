// js/admin.js

// Check admin credentials
function checkAdminAccess(user) {
  const adminContent = document.getElementById('adminContent');
  const accessDenied = document.getElementById('accessDenied');
  
  if (!user) {
    if (adminContent) adminContent.style.display = 'none';
    if (accessDenied) {
      accessDenied.style.display = 'flex';
      accessDenied.innerHTML = `
        <div class="denied-card">
          <h2>🔐 Admin Sign-In Required</h2>
          <p>Please log in with your credentials to access the teacher dashboard.</p>
          <button class="btn-primary google-btn" onclick="googleSignIn()">Sign in with Google</button>
        </div>
      `;
    }
    return;
  }
  
  if (user.email !== ADMIN_EMAIL) {
    if (adminContent) adminContent.style.display = 'none';
    if (accessDenied) {
      accessDenied.style.display = 'flex';
      accessDenied.innerHTML = `
        <div class="denied-card">
          <h2>⛔ Access Denied</h2>
          <p>This panel is restricted to course administrators.</p>
          <p>Logged in as: <strong>${user.email}</strong></p>
          <a href="index.html" class="btn-primary">Return to Home</a>
        </div>
      `;
    }
    return;
  }
  
  // User is admin
  if (adminContent) adminContent.style.display = 'block';
  if (accessDenied) accessDenied.style.display = 'none';
  
  loadAdminDashboard();
}

// Load student progress and calculate aggregate stats
async function loadAdminDashboard() {
  try {
    showToast('Loading student records...', 'info');
    
    // Fetch all users with role 'student'
    const usersSnapshot = await db.collection('users').where('role', '==', 'student').get();
    const studentRecords = [];
    
    for (const doc of usersSnapshot.docs) {
      const studentData = doc.data();
      studentData.uid = doc.id;
      
      // Load quiz results subcollection
      const quizSnapshot = await db.collection('users').doc(doc.id).collection('quizResults').get();
      studentData.quizResults = {};
      
      quizSnapshot.forEach(qDoc => {
        studentData.quizResults[qDoc.id] = qDoc.data();
      });
      
      studentRecords.push(studentData);
    }
    
    // Cache records globally for filtering and exports
    window.allStudentsCached = studentRecords;
    
    renderStudentTable(studentRecords);
    calculateDashboardStats(studentRecords);
    
    showToast('Dashboard updated!', 'success');
  } catch (error) {
    console.error('Error fetching admin data:', error);
    showToast('Error loading database documents.', 'error');
  }
}

// Display student table
function renderStudentTable(students) {
  const tbody = document.getElementById('studentTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  const availableModules = MODULES.filter(m => m.status === 'available');
  
  if (students.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="${4 + availableModules.length}" class="text-center" style="color: var(--text-secondary); padding: 30px;">
          No student records found.
        </td>
      </tr>
    `;
    return;
  }
  
  students.forEach((student, index) => {
    const row = document.createElement('tr');
    
    // Generate scores for available modules
    let scoreCells = '';
    availableModules.forEach(mod => {
      const quiz = student.quizResults[mod.id];
      if (quiz) {
        const percentage = quiz.bestPercentage || 0;
        let scoreClass = 'score-none';
        
        if (percentage >= 85) scoreClass = 'score-high';
        else if (percentage >= 60) scoreClass = 'score-mid';
        else scoreClass = 'score-low';
        
        scoreCells += `<td class="score-cell ${scoreClass}" title="Attempts: ${quiz.attempts}">${quiz.bestScore}/${quiz.total}</td>`;
      } else {
        scoreCells += `<td class="score-cell score-none">—</td>`;
      }
    });
    
    // Format active timestamp
    let activeString = '—';
    if (student.lastActive) {
      activeString = new Date(student.lastActive.seconds * 1000).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    
    row.innerHTML = `
      <td>${index + 1}</td>
      <td class="student-name">
        ${student.name || 'Anonymous Student'}
      </td>
      <td>${student.email || '—'}</td>
      ${scoreCells}
      <td style="color: var(--text-secondary); font-size: 13px;">${activeString}</td>
    `;
    tbody.appendChild(row);
  });
}

// Calculate summary counts
function calculateDashboardStats(students) {
  const totalStudentsEl = document.getElementById('totalStudents');
  const avgScoreEl = document.getElementById('avgScore');
  const completionRateEl = document.getElementById('completionRate');
  
  if (totalStudentsEl) totalStudentsEl.textContent = students.length;
  
  const availableModules = MODULES.filter(m => m.status === 'available');
  let aggregatePercentages = 0;
  let quizCompletesCount = 0;
  
  students.forEach(student => {
    availableModules.forEach(mod => {
      const quiz = student.quizResults[mod.id];
      if (quiz && quiz.bestPercentage !== undefined) {
        aggregatePercentages += quiz.bestPercentage;
        quizCompletesCount++;
      }
    });
  });
  
  // Calculate average score
  if (avgScoreEl) {
    avgScoreEl.textContent = quizCompletesCount > 0 ? Math.round(aggregatePercentages / quizCompletesCount) + '%' : '—';
  }
  
  // Completion rate (percentage of possible quizzes completed)
  if (completionRateEl) {
    const totalPossibleQuizzes = students.length * availableModules.length;
    completionRateEl.textContent = totalPossibleQuizzes > 0 ? Math.round((quizCompletesCount / totalPossibleQuizzes) * 100) + '%' : '—';
  }
}

// Export grade reports to CSV format
function exportToCSV() {
  const students = window.allStudentsCached;
  if (!students || students.length === 0) {
    showToast('No student data to export.', 'error');
    return;
  }
  
  const availableModules = MODULES.filter(m => m.status === 'available');
  
  // Build header row
  let csvContent = 'Name,Email,' + availableModules.map(m => `"${m.title} Score"`).join(',') + ',Last Active\n';
  
  // Add user rows
  students.forEach(student => {
    let row = `"${student.name || 'Anonymous'}","${student.email || ''}"`;
    
    availableModules.forEach(mod => {
      const quiz = student.quizResults[mod.id];
      row += `,${quiz ? `"${quiz.bestScore}/${quiz.total}"` : '"—"'}`;
    });
    
    let activeString = '—';
    if (student.lastActive) {
      activeString = new Date(student.lastActive.seconds * 1000).toISOString().split('T')[0];
    }
    row += `,"${activeString}"`;
    
    csvContent += row + '\n';
  });
  
  // Download trigger
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `CC101_Grades_Report_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('CSV report exported!', 'success');
}

// Search utility
function filterStudentsTable(query) {
  if (!window.allStudentsCached) return;
  
  const lowercaseQuery = query.toLowerCase().trim();
  const filtered = window.allStudentsCached.filter(student => {
    return (student.name || '').toLowerCase().includes(lowercaseQuery) ||
           (student.email || '').toLowerCase().includes(lowercaseQuery);
  });
  
  renderStudentTable(filtered);
}

// Bind admin controls
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterStudentsTable(e.target.value);
    });
  }
  
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', exportToCSV);
  }
});
