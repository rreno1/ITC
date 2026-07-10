// js/admin.js

let adminDashboardUnsubscribe = null;
let pendingApprovalTarget = null;
let adminUserDocsCache = [];
let adminQuizResultsCache = {};
let groupedQuizListenerAvailable = true;

function stopAdminDashboard() {
  if (!adminDashboardUnsubscribe) return;
  adminDashboardUnsubscribe();
  adminDashboardUnsubscribe = null;
  adminUserDocsCache = [];
  adminQuizResultsCache = {};
  groupedQuizListenerAvailable = true;
}

function checkAdminAccess(user) {
  const adminContent = document.getElementById('adminContent');
  const accessDenied = document.getElementById('accessDenied');

  if (!user) {
    stopAdminDashboard();
    if (adminContent) {
      adminContent.classList.remove('is-authorized');
      adminContent.style.display = 'none';
    }
    if (accessDenied) {
      accessDenied.style.display = 'flex';
      accessDenied.innerHTML = `
        <div class="denied-card">
          <h2>Admin Sign-In Required</h2>
          <p>Please log in with your credentials to access the teacher dashboard.</p>
          <button class="btn-primary google-btn" onclick="googleSignIn()">Sign in with Google</button>
        </div>
      `;
    }
    return;
  }

  if (!ADMIN_EMAILS.includes(user.email)) {
    stopAdminDashboard();
    if (adminContent) {
      adminContent.classList.remove('is-authorized');
      adminContent.style.display = 'none';
    }
    if (accessDenied) {
      accessDenied.style.display = 'flex';
      accessDenied.innerHTML = `
        <div class="denied-card">
          <h2>Access Denied</h2>
          <p>This panel is restricted to course administrators.</p>
          <p>Logged in as: <strong>${escapeHTML(user.email)}</strong></p>
          <a href="index.html" class="btn-primary">Return to Home</a>
        </div>
      `;
    }
    return;
  }

  if (adminContent) {
    adminContent.style.display = '';
    adminContent.classList.add('is-authorized');
  }
  if (accessDenied) accessDenied.style.display = 'none';
  loadAdminDashboard();
}

function escapeHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function normalizeBatchValue(batch) {
  const value = String(batch || '').toUpperCase();
  return getBatchConfig(value) ? value : '';
}

function formatTimestamp(value, options = {}) {
  if (!value) return '-';
  const date = value.toDate ? value.toDate() : new Date(value.seconds ? value.seconds * 1000 : value);
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: options.year ? 'numeric' : undefined,
    hour: '2-digit',
    minute: '2-digit'
  });
}

function getDateKeyForAdmin(date = new Date()) {
  if (typeof formatDateKey === 'function') return formatDateKey(date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function selectedAttendanceDate() {
  const input = document.getElementById('attendanceDateInput');
  const value = input && input.value ? input.value : getDateKeyForAdmin();
  return new Date(`${value}T12:00:00`);
}

function selectedAttendanceBatch() {
  const filter = document.getElementById('attendanceBatchFilter');
  const value = filter ? filter.value : 'all';
  return value === 'A' || value === 'B' ? value : 'all';
}

function batchPill(batch) {
  const normalized = normalizeBatchValue(batch);
  if (!normalized) return '<span class="batch-pill batch-none">No batch</span>';
  return `<span class="batch-pill batch-${normalized.toLowerCase()}">Batch ${normalized}</span>`;
}

function statusPill(label, status) {
  return `<span class="status-pill status-${status}">${escapeHTML(label)}</span>`;
}

function isApprovedAccount(account) {
  return account.role === 'admin' || account.approved === true;
}

async function loadQuizResults(uid) {
  try {
    const quizSnapshot = await db.collection('users').doc(uid).collection('quizResults').get();
    const quizResults = {};
    quizSnapshot.forEach(qDoc => {
      quizResults[qDoc.id] = qDoc.data();
    });
    return quizResults;
  } catch (error) {
    console.error('Unable to load quiz results:', error);
    return {};
  }
}

async function loadQuizResultsFallback(userDocs) {
  const entries = await Promise.all(userDocs.map(async doc => {
    if (doc.data().manual === true) return [doc.id, {}];
    return [doc.id, await loadQuizResults(doc.id)];
  }));
  return Object.fromEntries(entries);
}

function renderAdminDashboardRecords() {
  try {
    const accounts = adminUserDocsCache.map(doc => {
      const data = doc.data();
      const role = data.role || 'student';
      const manual = data.manual === true;
      return {
        uid: doc.id,
        ...data,
        role,
        manual,
        approved: role === 'admin' ? true : data.approved === true,
        batch: normalizeBatchValue(data.batch),
        attendance: data.attendance || {},
        quizResults: manual ? {} : (adminQuizResultsCache[doc.id] || {})
      };
    });

    const activeAccounts = accounts.filter(account => !account.manual);
    const approvedAccounts = activeAccounts.filter(isApprovedAccount);
    const pendingStudents = activeAccounts.filter(account => account.role === 'student' && !isApprovedAccount(account));

    window.allAccountsCached = accounts;
    window.allStudentsCached = approvedAccounts;
    window.pendingStudentsCached = pendingStudents;

    renderPendingApprovals(pendingStudents);
    renderStudentTable(approvedAccounts);
    renderAttendanceTable(approvedAccounts);
    renderAccountsTable(accounts);
    calculateDashboardStats(approvedAccounts, pendingStudents);
  } catch (error) {
    console.error('Error processing dashboard records:', error);
    showToast('Unable to process dashboard records.', 'error');
  }
}

async function refreshQuizResultsFallback() {
  adminQuizResultsCache = await loadQuizResultsFallback(adminUserDocsCache);
  if (adminDashboardUnsubscribe) renderAdminDashboardRecords();
}

function loadAdminDashboard() {
  if (adminDashboardUnsubscribe) return;

  showToast('Connecting to database...', 'info');
  const unsubscribers = [];
  adminDashboardUnsubscribe = () => {
    unsubscribers.splice(0).forEach(unsubscribe => unsubscribe());
  };

  const usersUnsubscribe = db.collection('users').onSnapshot(snapshot => {
    adminUserDocsCache = snapshot.docs;
    if (groupedQuizListenerAvailable) renderAdminDashboardRecords();
    else refreshQuizResultsFallback();
  }, error => {
    console.error('Users subscription error:', error);
    showToast('Connection to student database failed.', 'error');
  });
  unsubscribers.push(usersUnsubscribe);

  try {
    const quizUnsubscribe = db.collectionGroup('quizResults').onSnapshot(snapshot => {
      const resultsByUser = {};
      snapshot.forEach(doc => {
        const userRef = doc.ref.parent.parent;
        if (!userRef) return;
        resultsByUser[userRef.id] ||= {};
        resultsByUser[userRef.id][doc.id] = doc.data();
      });
      adminQuizResultsCache = resultsByUser;
      renderAdminDashboardRecords();
    }, error => {
      console.warn('Live grouped quiz results unavailable; using account reads.', error);
      groupedQuizListenerAvailable = false;
      refreshQuizResultsFallback();
    });
    unsubscribers.push(quizUnsubscribe);
  } catch (error) {
    console.warn('Unable to start grouped quiz listener; using account reads.', error);
    groupedQuizListenerAvailable = false;
    refreshQuizResultsFallback();
  }
}

function renderPendingApprovals(pending) {
  const container = document.getElementById('pendingContainer');
  const list = document.getElementById('pendingList');
  const sidebarBadge = document.getElementById('pendingSidebarBadge');
  const noPendingMessage = document.getElementById('noPendingMessage');
  const loadingState = document.getElementById('pendingLoadingState');
  if (loadingState) loadingState.hidden = true;

  if (sidebarBadge) {
    sidebarBadge.textContent = pending.length;
    sidebarBadge.hidden = pending.length === 0;
  }

  if (!container || !list) return;
  list.innerHTML = '';

  if (pending.length === 0) {
    container.hidden = true;
    if (noPendingMessage) noPendingMessage.hidden = false;
    return;
  }

  container.hidden = false;
  if (noPendingMessage) noPendingMessage.hidden = true;

  pending.forEach(student => {
    const card = document.createElement('div');
    card.className = 'pending-card';
    card.id = `pending-${student.uid}`;
    card.innerHTML = `
      <div class="pending-info">
        <div class="pending-name">${escapeHTML(student.name || 'Anonymous Student')}</div>
        <div class="pending-email">${escapeHTML(student.email || '-')}</div>
        <div class="pending-date">Registered: ${formatTimestamp(student.registeredAt, { year: true })}</div>
      </div>
      <div class="pending-actions">
        <button class="btn-approve" data-action="approve">Approve</button>
        <button class="btn-reject" data-action="reject">Remove</button>
      </div>
    `;

    card.querySelector('[data-action="approve"]').addEventListener('click', () => {
      openBatchApprovalModal(student.uid, student.name || student.email || 'Student');
    });
    card.querySelector('[data-action="reject"]').addEventListener('click', () => {
      removeAccount(student.uid, student.name || student.email || 'this student');
    });
    list.appendChild(card);
  });
}

function openBatchApprovalModal(uid, name) {
  pendingApprovalTarget = { uid, name };
  const modal = document.getElementById('batchApprovalModal');
  const label = document.getElementById('batchApprovalStudentName');
  if (label) label.textContent = `Choose the batch for ${name} before approving access.`;
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => modal.querySelector('[data-approve-batch]')?.focus(), 0);
  }
}

function closeBatchApprovalModal() {
  pendingApprovalTarget = null;
  const modal = document.getElementById('batchApprovalModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

async function approveStudent(uid, batch) {
  const normalizedBatch = normalizeBatchValue(batch);
  if (!normalizedBatch) {
    showToast('Choose Batch A or Batch B before approving.', 'error');
    return;
  }

  try {
    await db.collection('users').doc(uid).update({
      approved: true,
      batch: normalizedBatch,
      approvedAt: firebase.firestore.FieldValue.serverTimestamp(),
      approvedBy: auth.currentUser ? auth.currentUser.email : ADMIN_EMAIL
    });
    closeBatchApprovalModal();
    showToast(`Student approved as Batch ${normalizedBatch}.`, 'success');
  } catch (error) {
    console.error('Error approving student:', error);
    showToast('Failed to approve student. Check Firestore rules.', 'error');
  }
}

async function deleteKnownSubcollections(uid) {
  const collections = ['quizResults'];
  for (const collectionName of collections) {
    const snapshot = await db.collection('users').doc(uid).collection(collectionName).get();
    if (snapshot.empty) continue;
    const batch = db.batch();
    snapshot.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
  }
}

function applyResponsiveTableLabels(tbody) {
  const table = tbody?.closest('table');
  if (!table) return;
  const labels = Array.from(table.querySelectorAll('thead th')).map(header => header.textContent.trim());
  tbody.querySelectorAll('tr').forEach(row => {
    Array.from(row.children).forEach((cell, index) => {
      if (cell.colSpan > 1) return;
      cell.dataset.label = labels[index] || '';
    });
  });
}

async function removeAccount(uid, name) {
  if (auth.currentUser && uid === auth.currentUser.uid) {
    showToast('You cannot remove the admin account currently signed in.', 'error');
    return;
  }

  if (!confirm(`Remove ${name}? This deletes the registry record, learning progress, and saved quiz scores for this portal.`)) return;

  try {
    await deleteKnownSubcollections(uid);
    await db.collection('users').doc(uid).delete();
    showToast(`${name} removed.`, 'info');
  } catch (error) {
    console.error('Error removing account:', error);
    showToast('Failed to remove account. Check Firestore rules.', 'error');
  }
}

function renderStudentTable(accounts) {
  const tbody = document.getElementById('studentTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const availableModules = MODULES.filter(m => m.status === 'available');
  const rows = accounts.filter(account => !account.manual);

  if (rows.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="${8 + availableModules.length}" class="text-center" style="color: var(--text-secondary); padding: 30px;">
          No approved accounts yet. Approve pending students to see them here.
        </td>
      </tr>
    `;
    return;
  }

  const todayKey = getDateKeyForAdmin();

  rows.forEach((student, index) => {
    const row = document.createElement('tr');
    let scoreCells = '';

    availableModules.forEach(mod => {
      const quiz = student.quizResults[mod.id];
      if (!quiz) {
        scoreCells += '<td class="score-cell score-none">-</td>';
        return;
      }

      const percentage = quiz.bestPercentage || quiz.percentage || 0;
      let scoreClass = 'score-low';
      if (percentage >= 85) scoreClass = 'score-high';
      else if (percentage >= 60) scoreClass = 'score-mid';

      const completedDate = formatTimestamp(quiz.completedAt, { year: true });
      scoreCells += `<td class="score-cell ${scoreClass}" title="Completed: ${completedDate}; Attempts: ${quiz.attempts || 1}">${quiz.bestScore ?? quiz.score}/${quiz.total}</td>`;
    });

    const attendanceRecord = student.attendance && student.attendance[todayKey];
    const attendanceStatus = attendanceRecord && attendanceRecord.present
      ? statusPill('Present today', 'present')
      : statusPill('No check-in', 'muted');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td class="student-name">${escapeHTML(student.name || 'Anonymous Student')}</td>
      <td>
        <span class="badge-role ${student.role === 'admin' ? 'role-admin' : 'role-student'}">
          ${student.role === 'admin' ? 'Admin' : 'Student'}
        </span>
      </td>
      <td>${batchPill(student.batch)}</td>
      <td>${escapeHTML(student.email || '-')}</td>
      ${scoreCells}
      <td>${student.role === 'student' ? attendanceStatus : statusPill('Exempt', 'muted')}</td>
      <td style="color: var(--text-secondary); font-size: 13px;">${formatTimestamp(student.lastActive)}</td>
      <td>
        <div class="table-actions">
          <button class="mini-btn" data-action="edit">Edit</button>
          <button class="mini-btn danger" data-action="remove">Remove</button>
        </div>
      </td>
    `;

    row.querySelector('[data-action="edit"]').addEventListener('click', () => openAccountModal(student.uid));
    row.querySelector('[data-action="remove"]').addEventListener('click', () => {
      removeAccount(student.uid, student.name || student.email || 'this account');
    });
    tbody.appendChild(row);
  });
  applyResponsiveTableLabels(tbody);
}

function renderAttendanceTable(accounts) {
  const tbody = document.getElementById('attendanceTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const selectedDate = selectedAttendanceDate();
  const dateKey = getDateKeyForAdmin(selectedDate);
  const batchFilter = selectedAttendanceBatch();
  const students = accounts
    .filter(account => account.role === 'student' && isApprovedAccount(account) && !account.manual)
    .filter(account => batchFilter === 'all' || account.batch === batchFilter)
    .sort((a, b) => `${a.batch || 'Z'}${a.name || ''}`.localeCompare(`${b.batch || 'Z'}${b.name || ''}`));

  if (students.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="color: var(--text-secondary); padding: 30px; text-align: center;">No approved students match this attendance filter.</td></tr>';
    return;
  }

  students.forEach(student => {
    const batchConfig = getBatchConfig(student.batch);
    const record = student.attendance && student.attendance[dateKey];
    const isExpected = !!batchConfig && selectedDate.getDay() === batchConfig.attendanceDay;
    let status = statusPill('Not scheduled', 'muted');

    if (!batchConfig) status = statusPill('No batch', 'pending');
    else if (record && record.present) status = statusPill('Present', 'present');
    else if (isExpected) status = statusPill('Missing', 'missing');

    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="student-name">${escapeHTML(student.name || 'Anonymous Student')}</td>
      <td>${batchPill(student.batch)}</td>
      <td>${escapeHTML(student.email || '-')}</td>
      <td>${batchConfig ? `${batchConfig.attendanceDayName}, ${batchConfig.attendanceStart}-${batchConfig.attendanceEnd}` : '-'}</td>
      <td>${status}</td>
      <td>${formatTimestamp(record && record.firstSeenAt)}</td>
      <td>${formatTimestamp(record && record.lastSeenAt)}</td>
    `;
    tbody.appendChild(row);
  });
  applyResponsiveTableLabels(tbody);
}

function renderAccountsTable(accounts) {
  const tbody = document.getElementById('accountsTableBody');
  if (!tbody) return;

  const searchValue = (document.getElementById('accountSearchInput')?.value || '').toLowerCase().trim();
  const filtered = accounts.filter(account => {
    const searchable = `${account.name || ''} ${account.email || ''} ${account.role || ''} ${account.batch || ''}`.toLowerCase();
    return searchable.includes(searchValue);
  });

  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="color: var(--text-secondary); padding: 30px; text-align: center;">No accounts found.</td></tr>';
    return;
  }

  filtered.forEach(account => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="student-name">${escapeHTML(account.name || 'Unnamed Account')}</td>
      <td>${escapeHTML(account.email || '-')}</td>
      <td>
        <span class="badge-role ${account.role === 'admin' ? 'role-admin' : 'role-student'}">
          ${account.role === 'admin' ? 'Admin' : 'Student'}
        </span>
      </td>
      <td>${batchPill(account.batch)}</td>
      <td>${isApprovedAccount(account) ? statusPill('Approved', 'present') : statusPill('Pending', 'pending')}</td>
      <td>${account.manual ? statusPill('Manual', 'muted') : statusPill('Google', 'muted')}</td>
      <td>
        <div class="table-actions">
          <button class="mini-btn" data-action="edit">Edit</button>
          <button class="mini-btn danger" data-action="remove">Remove</button>
        </div>
      </td>
    `;

    row.querySelector('[data-action="edit"]').addEventListener('click', () => openAccountModal(account.uid));
    row.querySelector('[data-action="remove"]').addEventListener('click', () => {
      removeAccount(account.uid, account.name || account.email || 'this account');
    });
    tbody.appendChild(row);
  });
  applyResponsiveTableLabels(tbody);
}

function calculateDashboardStats(approvedAccounts, pendingStudents) {
  const approvedStudents = approvedAccounts.filter(s => s.role === 'student' && !s.manual);
  const availableModules = MODULES.filter(m => m.status === 'available');
  const todayKey = getDateKeyForAdmin();
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

  const statMap = {
    totalStudents: approvedStudents.length,
    pendingStatCount: pendingStudents.length,
    avgScore: quizCompletesCount > 0 ? `${Math.round(aggregatePercentages / quizCompletesCount)}%` : '-',
    completionRate: approvedStudents.length > 0 ? `${Math.round((quizCompletesCount / (approvedStudents.length * availableModules.length)) * 100)}%` : '-',
    batchAStudents: approvedStudents.filter(s => s.batch === 'A').length,
    batchBStudents: approvedStudents.filter(s => s.batch === 'B').length,
    todayAttendanceCount: approvedStudents.filter(s => s.attendance && s.attendance[todayKey] && s.attendance[todayKey].present).length
  };

  Object.entries(statMap).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

function exportToCSV() {
  const students = (window.allStudentsCached || []).filter(account => account.role === 'student');
  if (students.length === 0) {
    showToast('No student data to export.', 'error');
    return;
  }

  const availableModules = MODULES.filter(m => m.status === 'available');
  const header = ['Name', 'Email', 'Batch', ...availableModules.map(m => `${m.title} Score`), 'Last Active'];
  const rows = [header];

  students.forEach(student => {
    rows.push([
      student.name || 'Anonymous',
      student.email || '',
      student.batch ? `Batch ${student.batch}` : '',
      ...availableModules.map(mod => {
        const quiz = student.quizResults[mod.id];
        return quiz ? `${quiz.bestScore ?? quiz.score}/${quiz.total}` : '';
      }),
      formatTimestamp(student.lastActive, { year: true })
    ]);
  });

  const csvContent = rows
    .map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `CC101_Grades_Report_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('CSV report exported.', 'success');
}

function filterStudentsTable(query) {
  if (!window.allStudentsCached) return;
  const lowercaseQuery = query.toLowerCase().trim();
  const filtered = window.allStudentsCached.filter(student => {
    if (student.manual || !isApprovedAccount(student)) return false;
    return (student.name || '').toLowerCase().includes(lowercaseQuery) ||
      (student.email || '').toLowerCase().includes(lowercaseQuery) ||
      (student.batch || '').toLowerCase().includes(lowercaseQuery);
  });
  renderStudentTable(filtered);
}

function openAccountModal(uid = '') {
  const modal = document.getElementById('accountModal');
  const title = document.getElementById('accountModalTitle');
  const account = uid ? (window.allAccountsCached || []).find(item => item.uid === uid) : null;

  document.getElementById('accountUid').value = account ? account.uid : '';
  document.getElementById('accountName').value = account ? (account.name || '') : '';
  document.getElementById('accountEmail').value = account ? (account.email || '') : '';
  document.getElementById('accountRole').value = account ? (account.role || 'student') : 'student';
  document.getElementById('accountBatch').value = account ? (account.batch || '') : DEFAULT_BATCH;
  document.getElementById('accountApproved').checked = account ? isApprovedAccount(account) : true;
  if (title) title.textContent = account ? 'Edit Account' : 'Add Account';
  syncAccountRoleFields();

  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => document.getElementById('accountName')?.focus(), 0);
  }
}

function syncAccountRoleFields() {
  const isAdmin = document.getElementById('accountRole')?.value === 'admin';
  const batch = document.getElementById('accountBatch');
  const approved = document.getElementById('accountApproved');

  if (batch) {
    batch.disabled = isAdmin;
    if (isAdmin) batch.value = '';
  }
  if (approved) {
    approved.disabled = isAdmin;
    if (isAdmin) approved.checked = true;
  }
}

function closeAccountModal() {
  const modal = document.getElementById('accountModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function manualAccountIdForEmail(email) {
  return `manual_${normalizeEmail(email).replace(/[^a-z0-9]+/g, '_')}`;
}

async function saveAccountFromForm(event) {
  event.preventDefault();

  const uid = document.getElementById('accountUid').value;
  const role = document.getElementById('accountRole').value;
  const email = normalizeEmail(document.getElementById('accountEmail').value);
  const batch = role === 'student' ? normalizeBatchValue(document.getElementById('accountBatch').value) : '';
  const approved = role === 'admin' ? true : document.getElementById('accountApproved').checked;

  const payload = {
    name: document.getElementById('accountName').value.trim(),
    email,
    role,
    approved,
    batch: batch || null,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedBy: auth.currentUser ? auth.currentUser.email : ADMIN_EMAIL
  };

  if (!payload.name || !payload.email) {
    showToast('Name and email are required.', 'error');
    return;
  }

  try {
    if (uid) {
      await db.collection('users').doc(uid).update(payload);
      showToast('Account updated.', 'success');
    } else {
      const newUid = manualAccountIdForEmail(payload.email);
      await db.collection('users').doc(newUid).set({
        ...payload,
        manual: true,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        createdBy: auth.currentUser ? auth.currentUser.email : ADMIN_EMAIL,
        registeredAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      showToast('Manual account added.', 'success');
    }
    closeAccountModal();
  } catch (error) {
    console.error('Error saving account:', error);
    showToast('Failed to save account. Check Firestore rules.', 'error');
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    || localStorage.getItem('itc-portal-theme')
    || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
}

function setupTabNavigation() {
  const buttons = document.querySelectorAll('.sb-nav-item[data-tab]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.adm-panel').forEach(panel => {
        panel.classList.remove('active-panel');
      });

      const targetPanel = document.getElementById(`panel-${targetTab}`);
      if (targetPanel) targetPanel.classList.add('active-panel');

      if (window.innerWidth <= 900) {
        document.getElementById('adminMainPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (targetTab === 'attendance') renderAttendanceTable(window.allStudentsCached || []);
      if (targetTab === 'accounts') renderAccountsTable(window.allAccountsCached || []);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupTabNavigation();

  const todayKey = getDateKeyForAdmin();
  const attendanceDateInput = document.getElementById('attendanceDateInput');
  if (attendanceDateInput) {
    attendanceDateInput.value = todayKey;
    attendanceDateInput.addEventListener('change', () => renderAttendanceTable(window.allStudentsCached || []));
  }
  document.getElementById('attendanceBatchFilter')?.addEventListener('change', () => {
    renderAttendanceTable(window.allStudentsCached || []);
  });

  document.getElementById('todayAttendanceBtn')?.addEventListener('click', () => {
    if (attendanceDateInput) attendanceDateInput.value = getDateKeyForAdmin();
    renderAttendanceTable(window.allStudentsCached || []);
  });

  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  document.getElementById('searchInput')?.addEventListener('input', (e) => filterStudentsTable(e.target.value));
  document.getElementById('accountSearchInput')?.addEventListener('input', () => renderAccountsTable(window.allAccountsCached || []));
  document.getElementById('exportCsvBtn')?.addEventListener('click', exportToCSV);
  document.getElementById('addAccountBtn')?.addEventListener('click', () => openAccountModal());
  document.getElementById('cancelAccountBtn')?.addEventListener('click', closeAccountModal);
  document.getElementById('accountForm')?.addEventListener('submit', saveAccountFromForm);
  document.getElementById('accountRole')?.addEventListener('change', syncAccountRoleFields);
  document.getElementById('cancelBatchApprovalBtn')?.addEventListener('click', closeBatchApprovalModal);

  document.querySelectorAll('.admin-form-modal').forEach(modal => {
    modal.addEventListener('click', event => {
      if (event.target !== modal) return;
      if (modal.id === 'accountModal') closeAccountModal();
      else closeBatchApprovalModal();
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (document.getElementById('accountModal')?.classList.contains('active')) closeAccountModal();
    if (document.getElementById('batchApprovalModal')?.classList.contains('active')) closeBatchApprovalModal();
  });

  document.querySelectorAll('[data-approve-batch]').forEach(button => {
    button.addEventListener('click', () => {
      if (!pendingApprovalTarget) return;
      approveStudent(pendingApprovalTarget.uid, button.getAttribute('data-approve-batch'));
    });
  });
});
