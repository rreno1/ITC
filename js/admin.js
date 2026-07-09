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
  
  if (!ADMIN_EMAILS.includes(user.email)) {
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

let adminDashboardUnsubscribe = null;

// Load student progress and calculate aggregate stats in real-time
function loadAdminDashboard() {
  if (adminDashboardUnsubscribe) {
    // Already listening
    return;
  }
  
  showToast('Connecting to database...', 'info');
  
  adminDashboardUnsubscribe = db.collection('users')
    .where('role', '==', 'student')
    .onSnapshot(async (snapshot) => {
      try {
        const approvedStudents = [];
        const pendingStudents = [];
        
        for (const doc of snapshot.docs) {
          const studentData = doc.data();
          studentData.uid = doc.id;
          
          // Fetch quiz results subcollection
          const quizSnapshot = await db.collection('users').doc(doc.id).collection('quizResults').get();
          studentData.quizResults = {};
          
          quizSnapshot.forEach(qDoc => {
            studentData.quizResults[qDoc.id] = qDoc.data();
          });
          
          if (studentData.approved === true) {
            approvedStudents.push(studentData);
          } else {
            pendingStudents.push(studentData);
          }
        }
        
        // Cache records globally
        window.allStudentsCached = approvedStudents;
        window.pendingStudentsCached = pendingStudents;
        
        renderPendingApprovals(pendingStudents);
        renderStudentTable(approvedStudents);
        calculateDashboardStats(approvedStudents, pendingStudents);
        
      } catch (error) {
        console.error('Error processing student updates:', error);
      }
    }, (error) => {
      console.error('Firestore subscription error:', error);
      showToast('Connection to student database failed.', 'error');
    });
}

// ——————————— PENDING APPROVALS ———————————

function renderPendingApprovals(pending) {
  const container = document.getElementById('pendingContainer');
  const sidebarBadge = document.getElementById('pendingSidebarBadge');
  const noPendingMessage = document.getElementById('noPendingMessage');
  
  if (sidebarBadge) {
    sidebarBadge.textContent = pending.length;
    sidebarBadge.style.display = pending.length > 0 ? 'inline-flex' : 'none';
  }
  
  if (pending.length === 0) {
    if (container) container.style.display = 'none';
    if (noPendingMessage) noPendingMessage.style.display = 'flex';
    return;
  }
  
  if (container) container.style.display = 'block';
  if (noPendingMessage) noPendingMessage.style.display = 'none';
  
  const list = container ? container.querySelector('#pendingList') : null;
  if (!list) return;
  list.innerHTML = '';
  
  pending.forEach(student => {
    const registeredDate = student.registeredAt
      ? new Date(student.registeredAt.seconds * 1000).toLocaleDateString(undefined, {
          month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
        })
      : 'Unknown';
    
    const card = document.createElement('div');
    card.className = 'pending-card';
    card.id = `pending-${student.uid}`;
    card.innerHTML = `
      <div class="pending-info">
        <div class="pending-name">${student.name || 'Anonymous Student'}</div>
        <div class="pending-email">${student.email || '—'}</div>
        <div class="pending-date">Registered: ${registeredDate}</div>
      </div>
      <div class="pending-actions">
        <button class="btn-approve" onclick="approveStudent('${student.uid}', '${(student.name || '').replace(/'/g, "\\'")}')">✓ Approve</button>
        <button class="btn-reject" onclick="rejectStudent('${student.uid}', '${(student.name || '').replace(/'/g, "\\'")}')">✕ Reject</button>
      </div>
    `;
    list.appendChild(card);
  });
}

// Approve a student
async function approveStudent(uid, name) {
  try {
    await db.collection('users').doc(uid).update({ approved: true });
    
    // Remove from pending UI with animation
    const card = document.getElementById(`pending-${uid}`);
    if (card) {
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateX(20px)';
      setTimeout(() => card.remove(), 300);
    }
    
    showToast(`${name || 'Student'} approved! ✅`, 'success');
    
    // Reload dashboard after a short delay to reflect changes
    setTimeout(() => loadAdminDashboard(), 500);
  } catch (error) {
    console.error('Error approving student:', error);
    showToast('Failed to approve student. Check Firestore rules.', 'error');
  }
}

// Reject (delete) a student
async function rejectStudent(uid, name) {
  if (!confirm(`Remove ${name || 'this student'}? They will need to sign in again and request access.`)) return;
  
  try {
    await db.collection('users').doc(uid).delete();
    
    const card = document.getElementById(`pending-${uid}`);
    if (card) {
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateX(-20px)';
      setTimeout(() => card.remove(), 300);
    }
    
    showToast(`${name || 'Student'} removed.`, 'info');
    setTimeout(() => loadAdminDashboard(), 500);
  } catch (error) {
    console.error('Error rejecting student:', error);
    showToast('Failed to remove student. Check Firestore rules.', 'error');
  }
}

// ——————————— APPROVED STUDENTS TABLE ———————————

function renderStudentTable(students) {
  const tbody = document.getElementById('studentTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  const availableModules = MODULES.filter(m => m.status === 'available');
  
  if (students.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="${4 + availableModules.length}" class="text-center" style="color: var(--text-secondary); padding: 30px;">
          No approved students yet. Approve pending students above to see them here.
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

        let completedDateStr = 'Unknown Date';
        if (quiz.completedAt) {
          const dt = quiz.completedAt.toDate ? quiz.completedAt.toDate() : new Date(quiz.completedAt.seconds * 1000);
          completedDateStr = dt.toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        }
        
        scoreCells += `<td class="score-cell ${scoreClass}" title="Completed: ${completedDateStr}&#10;Attempts: ${quiz.attempts}">${quiz.bestScore}/${quiz.total}</td>`;
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
function calculateDashboardStats(approvedStudents, pendingStudents) {
  const totalStudentsEl = document.getElementById('totalStudents');
  const avgScoreEl = document.getElementById('avgScore');
  const completionRateEl = document.getElementById('completionRate');
  const pendingCountEl = document.getElementById('pendingStatCount');
  
  if (totalStudentsEl) totalStudentsEl.textContent = approvedStudents.length;
  if (pendingCountEl) pendingCountEl.textContent = pendingStudents.length;
  
  const availableModules = MODULES.filter(m => m.status === 'available');
  let aggregatePercentages = 0;
  let quizCompletesCount = 0;
  
  approvedStudents.forEach(student => {
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
  
  // Completion rate
  if (completionRateEl) {
    const totalPossibleQuizzes = approvedStudents.length * availableModules.length;
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

// Tab Switching navigation logic
function setupTabNavigation() {
  const buttons = document.querySelectorAll('.sidebar-nav-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      // Update buttons active class
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update panels active class
      const panels = document.querySelectorAll('.admin-panel');
      panels.forEach(panel => {
        panel.classList.remove('active-panel');
      });
      
      const targetPanel = document.getElementById(`panel-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active-panel');
      }
    });
  });
}

// Bind admin controls
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupTabNavigation();
  
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
