// js/admin.js

let adminDashboardUnsubscribe = null;
let pendingApprovalTarget = null;
let adminUserDocsCache = [];
let adminQuizResultsCache = {};
let groupedQuizListenerAvailable = true;
let adminUsersReady = false;
let adminQuizReady = false;
let adminRenderFrame = null;
let selectedAttendanceBatchValue = 'all';
const ADMIN_PAGE_SIZE = 20;
const adminPageState = {
  grades: 1,
  attendance: 1,
  accounts: 1
};

function stopAdminDashboard() {
  if (adminDashboardUnsubscribe) adminDashboardUnsubscribe();
  adminDashboardUnsubscribe = null;
  if (adminRenderFrame !== null) {
    window.cancelAnimationFrame(adminRenderFrame);
    adminRenderFrame = null;
  }
  adminUserDocsCache = [];
  adminQuizResultsCache = {};
  groupedQuizListenerAvailable = true;
  adminUsersReady = false;
  adminQuizReady = false;
  Object.keys(adminPageState).forEach(key => { adminPageState[key] = 1; });
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
    if (typeof markPageReady === 'function') markPageReady();
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
    if (typeof markPageReady === 'function') markPageReady();
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
  return selectedAttendanceBatchValue;
}

function setAttendanceBatchFilter(batch) {
  const normalized = batch === 'A' || batch === 'B' ? batch : 'all';
  selectedAttendanceBatchValue = selectedAttendanceBatchValue === normalized ? 'all' : normalized;

  document.querySelectorAll('[data-attendance-batch]').forEach(button => {
    const buttonBatch = button.getAttribute('data-attendance-batch');
    const selected = buttonBatch === selectedAttendanceBatchValue;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
    const state = button.querySelector('.batch-filter-state');
    if (state) state.textContent = selected ? `Selected: showing Batch ${buttonBatch} only` : `Show Batch ${buttonBatch} only`;
  });

  const status = document.getElementById('attendanceFilterStatus');
  if (status) {
    status.textContent = selectedAttendanceBatchValue === 'all'
      ? 'Showing attendance for all batches.'
      : `Showing attendance for Batch ${selectedAttendanceBatchValue} only.`;
  }

  resetAdminPage('attendance');
  renderAttendanceTable(window.allStudentsCached || []);
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

function scheduleAdminDashboardRender() {
  if (adminRenderFrame !== null) return;
  adminRenderFrame = window.requestAnimationFrame(() => {
    adminRenderFrame = null;
    renderAdminDashboardRecords();
  });
}

function resetAdminPage(key) {
  if (Object.prototype.hasOwnProperty.call(adminPageState, key)) {
    adminPageState[key] = 1;
  }
}

function paginateItems(items, key) {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ADMIN_PAGE_SIZE));
  const currentPage = Math.min(Math.max(adminPageState[key] || 1, 1), totalPages);
  const startIndex = (currentPage - 1) * ADMIN_PAGE_SIZE;
  adminPageState[key] = currentPage;

  return {
    currentPage,
    totalPages,
    totalItems,
    startIndex,
    items: items.slice(startIndex, startIndex + ADMIN_PAGE_SIZE)
  };
}

function renderTablePagination(containerId, key, page, rerender) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.hidden = page.totalItems <= ADMIN_PAGE_SIZE;
  if (container.hidden) {
    container.innerHTML = '';
    return;
  }

  const firstItem = page.startIndex + 1;
  const lastItem = Math.min(page.startIndex + ADMIN_PAGE_SIZE, page.totalItems);
  container.innerHTML = `
    <button type="button" data-page-action="previous" aria-label="Previous page" title="Previous page" ${page.currentPage === 1 ? 'disabled' : ''}>&#8249;</button>
    <span>${firstItem}-${lastItem} of ${page.totalItems} &middot; Page ${page.currentPage} of ${page.totalPages}</span>
    <button type="button" data-page-action="next" aria-label="Next page" title="Next page" ${page.currentPage === page.totalPages ? 'disabled' : ''}>&#8250;</button>
  `;

  container.querySelector('[data-page-action="previous"]')?.addEventListener('click', () => {
    adminPageState[key] -= 1;
    rerender();
  });
  container.querySelector('[data-page-action="next"]')?.addEventListener('click', () => {
    adminPageState[key] += 1;
    rerender();
  });
}

function updatePendingBadge(count) {
  const sidebarBadge = document.getElementById('pendingSidebarBadge');
  if (!sidebarBadge) return;
  sidebarBadge.textContent = count;
  sidebarBadge.hidden = count === 0;
}

function renderActiveAdminPanel() {
  const activeTab = document.querySelector('.sb-nav-item[data-tab].active')?.dataset.tab || 'overview';
  if (activeTab === 'modules') renderCourseModuleControls();
  if (activeTab === 'pending') renderPendingApprovals(window.pendingStudentsCached || []);
  if (activeTab === 'grades') renderStudentTable(window.allStudentsCached || []);
  if (activeTab === 'attendance') renderAttendanceTable(window.allStudentsCached || []);
  if (activeTab === 'accounts') renderAccountsTable(window.allAccountsCached || []);
}

function renderCourseModuleControls() {
  const list = document.getElementById('moduleControlList');
  if (!list) return;

  const openCount = MODULES.filter(module => typeof isModuleOpen !== 'function' || isModuleOpen(module)).length;
  const openCountElement = document.getElementById('openModuleCount');
  const closedCountElement = document.getElementById('closedModuleCount');
  if (openCountElement) openCountElement.textContent = openCount;
  if (closedCountElement) closedCountElement.textContent = MODULES.length - openCount;

  list.innerHTML = MODULES.map((module, index) => {
    const isOpen = typeof isModuleOpen !== 'function' || isModuleOpen(module);
    const moduleNumber = String(index + 1).padStart(2, '0');
    return `
      <article class="module-control-item${isOpen ? ' is-open' : ' is-closed'}" role="listitem" data-module-control="${escapeHTML(module.id)}" style="--module-color: ${escapeHTML(module.color)}">
        <span class="module-control-icon" aria-hidden="true">${escapeHTML(module.icon)}</span>
        <div class="module-control-copy">
          <span class="module-control-number">Module ${moduleNumber}</span>
          <h3>${escapeHTML(module.title)}</h3>
          <p>${escapeHTML(module.subtitle)}</p>
        </div>
        <div class="module-control-action">
          <span class="module-access-state ${isOpen ? 'state-open' : 'state-closed'}">
            <span aria-hidden="true">${isOpen ? '&#10003;' : '&#128274;'}</span>
            ${isOpen ? 'Open' : 'Closed'}
          </span>
          <label class="module-access-switch" for="module-toggle-${escapeHTML(module.id)}">
            <span>Student access</span>
            <input id="module-toggle-${escapeHTML(module.id)}" type="checkbox" role="switch" data-module-toggle="${escapeHTML(module.id)}" ${isOpen ? 'checked' : ''}>
            <span class="module-switch-track" aria-hidden="true"><span></span></span>
          </label>
        </div>
      </article>
    `;
  }).join('');

  list.querySelectorAll('[data-module-toggle]').forEach(input => {
    input.addEventListener('change', () => updateCourseModuleAccess(input));
  });
}

async function updateCourseModuleAccess(input) {
  const moduleId = input.getAttribute('data-module-toggle');
  const module = MODULES.find(item => item.id === moduleId);
  if (!module || typeof setModuleOpen !== 'function') return;

  const requestedState = input.checked;
  const item = input.closest('.module-control-item');
  const status = document.getElementById('moduleSettingsStatus');
  input.disabled = true;
  item?.setAttribute('aria-busy', 'true');
  if (status) status.textContent = `${requestedState ? 'Opening' : 'Closing'} ${module.title}...`;

  try {
    await setModuleOpen(moduleId, requestedState);
    if (status) status.textContent = `${module.title} is now ${requestedState ? 'open' : 'closed'} for students.`;
    showToast(`${module.title} ${requestedState ? 'opened' : 'closed'} successfully.`, 'success');
    document.getElementById(`module-toggle-${moduleId}`)?.focus();
  } catch (error) {
    console.error('Unable to update module availability:', error);
    input.checked = !requestedState;
    input.disabled = false;
    item?.removeAttribute('aria-busy');
    if (status) status.textContent = `Could not update ${module.title}. Try again.`;
    showToast('Module availability could not be saved.', 'error');
  }
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

    updatePendingBadge(pendingStudents.length);
    calculateDashboardStats(approvedAccounts, pendingStudents);
    renderActiveAdminPanel();

    if (adminUsersReady && adminQuizReady && typeof markPageReady === 'function') {
      markPageReady();
    }
  } catch (error) {
    console.error('Error processing dashboard records:', error);
    showToast('Unable to process dashboard records.', 'error');
  }
}

async function refreshQuizResultsFallback(userDocs = adminUserDocsCache) {
  if (!adminUsersReady) return;
  const activeUserIds = new Set(adminUserDocsCache.map(doc => doc.id));
  Object.keys(adminQuizResultsCache).forEach(uid => {
    if (!activeUserIds.has(uid)) delete adminQuizResultsCache[uid];
  });

  const changedResults = await loadQuizResultsFallback(userDocs);
  if (!adminDashboardUnsubscribe) return;
  adminQuizResultsCache = { ...adminQuizResultsCache, ...changedResults };
  adminQuizReady = true;
  scheduleAdminDashboardRender();
}

function loadAdminDashboard() {
  if (adminDashboardUnsubscribe) return;

  adminUsersReady = false;
  adminQuizReady = false;
  const unsubscribers = [];
  adminDashboardUnsubscribe = () => {
    unsubscribers.splice(0).forEach(unsubscribe => unsubscribe());
  };

  const usersUnsubscribe = db.collection('users').onSnapshot(snapshot => {
    adminUserDocsCache = snapshot.docs.filter(doc => (
      doc.id !== COURSE_MODULE_SETTINGS_DOC_ID && doc.data().documentType !== 'courseSettings'
    ));
    adminUsersReady = true;
    if (groupedQuizListenerAvailable) scheduleAdminDashboardRender();
    else {
      const changedDocs = snapshot.docChanges()
        .filter(change => (
          change.type !== 'removed'
          && change.doc.id !== COURSE_MODULE_SETTINGS_DOC_ID
          && change.doc.data().documentType !== 'courseSettings'
        ))
        .map(change => change.doc);
      refreshQuizResultsFallback(changedDocs);
    }
  }, error => {
    console.error('Users subscription error:', error);
    showToast('Connection to student database failed.', 'error');
    if (typeof markPageReady === 'function') markPageReady();
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
      adminQuizReady = true;
      scheduleAdminDashboardRender();
    }, error => {
      console.warn('Live grouped quiz results unavailable; using account reads.', error);
      groupedQuizListenerAvailable = false;
      adminQuizReady = false;
      refreshQuizResultsFallback();
    });
    unsubscribers.push(quizUnsubscribe);
  } catch (error) {
    console.warn('Unable to start grouped quiz listener; using account reads.', error);
    groupedQuizListenerAvailable = false;
    adminQuizReady = false;
    refreshQuizResultsFallback();
  }
}

function renderPendingApprovals(pending) {
  const container = document.getElementById('pendingContainer');
  const list = document.getElementById('pendingList');
  const noPendingMessage = document.getElementById('noPendingMessage');
  const loadingState = document.getElementById('pendingLoadingState');
  if (loadingState) loadingState.hidden = true;

  updatePendingBadge(pending.length);

  if (!container || !list) return;
  list.innerHTML = '';

  if (pending.length === 0) {
    container.hidden = true;
    if (noPendingMessage) noPendingMessage.hidden = false;
    return;
  }

  container.hidden = false;
  if (noPendingMessage) noPendingMessage.hidden = true;

  const fragment = document.createDocumentFragment();
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
    fragment.appendChild(card);
  });
  list.appendChild(fragment);
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
  renderGradebookHeader(availableModules);
  const searchValue = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const rows = accounts
    .filter(account => !account.manual)
    .filter(account => {
      const searchable = `${account.name || ''} ${account.email || ''} ${account.batch || ''}`.toLowerCase();
      return searchable.includes(searchValue);
    });
  const page = paginateItems(rows, 'grades');
  renderTablePagination('gradesPagination', 'grades', page, () => {
    renderStudentTable(window.allStudentsCached || []);
  });

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
  const fragment = document.createDocumentFragment();

  page.items.forEach((student, index) => {
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
      <td>${page.startIndex + index + 1}</td>
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
    fragment.appendChild(row);
  });
  tbody.appendChild(fragment);
  applyResponsiveTableLabels(tbody);
}

function renderGradebookHeader(availableModules = MODULES.filter(module => module.status === 'available')) {
  const row = document.getElementById('gradebookHeaderRow');
  const table = document.getElementById('gradebookTable');
  if (!row) return;

  const moduleHeaders = availableModules
    .map(module => `<th class="numeric-column">${escapeHTML(module.title)}</th>`)
    .join('');
  row.innerHTML = `
    <th class="row-number">#</th>
    <th>Name</th>
    <th>Role</th>
    <th>Batch</th>
    <th>Email</th>
    ${moduleHeaders}
    <th>Attendance</th>
    <th>Last Active</th>
    <th class="actions-column">Actions</th>
  `;
  if (table) table.style.minWidth = `${760 + (availableModules.length * 112)}px`;
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
  const page = paginateItems(students, 'attendance');
  renderTablePagination('attendancePagination', 'attendance', page, () => {
    renderAttendanceTable(window.allStudentsCached || []);
  });

  if (students.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="color: var(--text-secondary); padding: 30px; text-align: center;">No approved students match this attendance filter.</td></tr>';
    return;
  }

  const fragment = document.createDocumentFragment();
  page.items.forEach(student => {
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
    fragment.appendChild(row);
  });
  tbody.appendChild(fragment);
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
  const page = paginateItems(filtered, 'accounts');
  renderTablePagination('accountsPagination', 'accounts', page, () => {
    renderAccountsTable(window.allAccountsCached || []);
  });

  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="color: var(--text-secondary); padding: 30px; text-align: center;">No accounts found.</td></tr>';
    return;
  }

  const fragment = document.createDocumentFragment();
  page.items.forEach(account => {
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
    fragment.appendChild(row);
  });
  tbody.appendChild(fragment);
  applyResponsiveTableLabels(tbody);
}

function calculateDashboardStats(approvedAccounts, pendingStudents) {
  const approvedStudents = approvedAccounts.filter(s => s.role === 'student' && !s.manual);
  const availableModules = MODULES.filter(module => module.status === 'available' && (
    typeof isModuleOpen !== 'function' || isModuleOpen(module)
  ));
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

  const possibleAssessments = approvedStudents.length * availableModules.length;
  const completionPercent = possibleAssessments > 0
    ? Math.round((quizCompletesCount / possibleAssessments) * 100)
    : 0;
  const scheduledStudents = approvedStudents.filter(student => {
    const batch = getBatchConfig(student.batch);
    return batch && batch.attendanceDay === new Date().getDay();
  });
  const presentToday = approvedStudents.filter(student => {
    return student.attendance && student.attendance[todayKey] && student.attendance[todayKey].present;
  }).length;
  const attendancePercent = scheduledStudents.length > 0
    ? Math.round((presentToday / scheduledStudents.length) * 100)
    : 0;

  const statMap = {
    totalStudents: approvedStudents.length,
    pendingStatCount: pendingStudents.length,
    avgScore: quizCompletesCount > 0 ? `${Math.round(aggregatePercentages / quizCompletesCount)}%` : '-',
    completionRate: possibleAssessments > 0 ? `${completionPercent}%` : '-',
    completionRateDetail: `${completionPercent}%`,
    batchAStudents: approvedStudents.filter(s => s.batch === 'A').length,
    batchBStudents: approvedStudents.filter(s => s.batch === 'B').length,
    todayAttendanceCount: presentToday,
    todayAttendanceRate: scheduledStudents.length > 0 ? `${attendancePercent}%` : 'No class',
    assessmentSubmittedCount: `${quizCompletesCount} / ${possibleAssessments}`,
    activeModulesCount: availableModules.length
  };

  Object.entries(statMap).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });

  const completionMeter = document.getElementById('completionMeter');
  const attendanceMeter = document.getElementById('attendanceMeter');
  if (completionMeter) completionMeter.style.width = `${completionPercent}%`;
  if (attendanceMeter) attendanceMeter.style.width = `${Math.min(100, attendancePercent)}%`;
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

function filterStudentsTable() {
  resetAdminPage('grades');
  renderStudentTable(window.allStudentsCached || []);
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

      if (window.innerWidth <= 720) {
        document.getElementById('adminMainPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      renderActiveAdminPanel();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupTabNavigation();
  renderGradebookHeader();
  renderCourseModuleControls();

  const cockpitDate = document.getElementById('cockpitDate');
  if (cockpitDate) {
    const now = new Date();
    cockpitDate.dateTime = getDateKeyForAdmin(now);
    cockpitDate.textContent = now.toLocaleDateString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  }

  const todayKey = getDateKeyForAdmin();
  const attendanceDateInput = document.getElementById('attendanceDateInput');
  if (attendanceDateInput) {
    attendanceDateInput.value = todayKey;
    attendanceDateInput.addEventListener('change', () => {
      resetAdminPage('attendance');
      renderAttendanceTable(window.allStudentsCached || []);
    });
  }
  document.querySelectorAll('[data-attendance-batch]').forEach(button => {
    button.addEventListener('click', () => {
      setAttendanceBatchFilter(button.getAttribute('data-attendance-batch'));
    });
  });

  document.getElementById('todayAttendanceBtn')?.addEventListener('click', () => {
    if (attendanceDateInput) attendanceDateInput.value = getDateKeyForAdmin();
    resetAdminPage('attendance');
    renderAttendanceTable(window.allStudentsCached || []);
  });

  document.getElementById('searchInput')?.addEventListener('input', filterStudentsTable);
  document.getElementById('accountSearchInput')?.addEventListener('input', () => {
    resetAdminPage('accounts');
    renderAccountsTable(window.allAccountsCached || []);
  });
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

document.addEventListener('moduleavailabilitychange', () => {
  renderCourseModuleControls();
  if (window.allStudentsCached) {
    calculateDashboardStats(window.allStudentsCached, window.pendingStudentsCached || []);
  }
});
