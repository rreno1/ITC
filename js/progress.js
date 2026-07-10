// Student learning progress and shared one-time quiz behavior.

function isCurrentUserAdmin() {
  const user = auth.currentUser;
  return !!(user && (window.isUserAdmin || ADMIN_EMAILS.includes(user.email)));
}

async function saveQuizResult(moduleId, score, total) {
  const user = auth.currentUser;
  if (!user) {
    showToast('Sign in with Google to save your quiz score.', 'error');
    return { saved: false, reason: 'signed-out' };
  }

  try {
    const docRef = db.collection('users').doc(user.uid).collection('quizResults').doc(moduleId);
    const existing = await docRef.get();
    const isAdmin = isCurrentUserAdmin();

    if (existing.exists && !isAdmin) {
      showToast('This one-time quiz was already submitted for your account.', 'error');
      return { saved: false, reason: 'already-completed', result: existing.data() };
    }

    const previous = existing.exists ? existing.data() : {};
    const attempts = (previous.attempts || 0) + 1;
    const bestScore = Math.max(previous.bestScore || 0, score);

    await docRef.set({
      moduleId,
      score,
      bestScore,
      total,
      percentage: Math.round((score / total) * 100),
      bestPercentage: Math.round((bestScore / total) * 100),
      attempts,
      trackingVersion: 1,
      completedAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    showToast(`Quiz score saved: ${score}/${total}`, 'success');
    return { saved: true, attempts };
  } catch (error) {
    console.error('Error saving quiz score:', error);
    showToast('Failed to save your score. Check your connection and try again.', 'error');
    return { saved: false, reason: 'error', error };
  }
}

async function getQuizResult(userId, moduleId) {
  try {
    const doc = await db.collection('users').doc(userId).collection('quizResults').doc(moduleId).get();
    return doc.exists ? doc.data() : null;
  } catch (error) {
    console.error('Error getting quiz result:', error);
    return null;
  }
}

async function hasCompletedQuiz(userId, moduleId) {
  return !!(await getQuizResult(userId, moduleId));
}

async function getAllQuizResults(userId) {
  try {
    const snapshot = await db.collection('users').doc(userId).collection('quizResults').get();
    const results = {};
    snapshot.forEach(doc => {
      results[doc.id] = doc.data();
    });
    return results;
  } catch (error) {
    console.error('Error getting quiz results:', error);
    return {};
  }
}

async function getAllLearningProgress(userId) {
  try {
    if (window.currentUserData?.uid === userId) {
      return window.currentUserData.learningProgress || {};
    }
    const snapshot = await db.collection('users').doc(userId).get();
    return snapshot.exists ? (snapshot.data().learningProgress || {}) : {};
  } catch (error) {
    console.error('Error getting lesson progress:', error);
    return {};
  }
}

const pendingLessonWrites = new Map();

function recordLessonProgress(moduleId, lessonNumber, totalLessons) {
  const user = auth.currentUser;
  const lesson = Number(lessonNumber);
  const total = Number(totalLessons);

  if (!user || !window.isUserApproved || isCurrentUserAdmin()) return;
  if (!moduleId || !Number.isInteger(lesson) || !Number.isInteger(total)) return;
  if (lesson < 1 || lesson > total) return;

  const key = `${user.uid}:${moduleId}`;
  const pending = pendingLessonWrites.get(key) || {
    userId: user.uid,
    moduleId,
    totalLessons: total,
    lessons: new Set(),
    timer: null
  };

  pending.totalLessons = total;
  pending.lessons.add(lesson);
  clearTimeout(pending.timer);
  pending.timer = setTimeout(() => flushLessonProgress(key), 450);
  pendingLessonWrites.set(key, pending);
}

async function flushLessonProgress(key) {
  const pending = pendingLessonWrites.get(key);
  if (!pending) return;
  pendingLessonWrites.delete(key);

  const lessons = Array.from(pending.lessons).sort((a, b) => a - b);
  const lastLesson = lessons[lessons.length - 1];

  try {
    const basePath = `learningProgress.${pending.moduleId}`;
    await db.collection('users').doc(pending.userId).update({
      [`${basePath}.moduleId`]: pending.moduleId,
      [`${basePath}.totalLessons`]: pending.totalLessons,
      [`${basePath}.lastLesson`]: lastLesson,
      [`${basePath}.visitedLessons`]: firebase.firestore.FieldValue.arrayUnion(...lessons),
      [`${basePath}.lastActiveAt`]: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (error) {
    console.error('Unable to save lesson progress:', error);
  }
}

async function loadUserProgress(userId) {
  const [quizResults, learningProgress] = await Promise.all([
    getAllQuizResults(userId),
    getAllLearningProgress(userId)
  ]);

  window.currentQuizResults = quizResults;
  window.currentLearningProgress = learningProgress;
  renderProgressPage(quizResults, learningProgress);
}

function showSignedOutProgressState() {
  const loading = document.getElementById('progressLoadingState');
  const signedOut = document.getElementById('progressSignedOutState');
  const content = document.getElementById('progressContent');

  if (loading) loading.hidden = true;
  if (signedOut) signedOut.hidden = false;
  if (content) content.hidden = true;
}

function escapePortalHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function timestampToDate(value) {
  if (!value) return null;
  const date = value.toDate
    ? value.toDate()
    : new Date(value.seconds ? value.seconds * 1000 : value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatProgressDate(value) {
  const date = timestampToDate(value);
  if (!date) return 'No activity yet';
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatRelativeActivity(value) {
  const date = timestampToDate(value);
  if (!date) return 'Recently';

  const elapsedMinutes = Math.max(0, Math.floor((Date.now() - date.getTime()) / 60000));
  if (elapsedMinutes < 1) return 'Just now';
  if (elapsedMinutes < 60) return `${elapsedMinutes}m ago`;

  const hours = Math.floor(elapsedMinutes / 60);
  if (hours < 24) return `${hours}h ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return formatProgressDate(value);
}

function getModuleProgress(module, quizResult, learningResult) {
  const totalLessons = Number(module.lessonTotal || learningResult?.totalLessons || 1);
  const rawLessons = learningResult?.visitedLessons || learningResult?.visitedSlides || [];
  const validLessons = Array.from(new Set(rawLessons.map(Number)))
    .filter(lesson => Number.isInteger(lesson) && lesson >= 1 && lesson <= totalLessons);

  // Quiz records predate lesson tracking. Treat those legacy completions as fully viewed.
  const isLegacyQuizResult = quizResult && !quizResult.trackingVersion;
  const completedLessons = isLegacyQuizResult && validLessons.length === 0
    ? totalLessons
    : Math.min(validLessons.length, totalLessons);
  const quizCompleted = !!quizResult;
  const completedUnits = completedLessons + (quizCompleted ? 1 : 0);
  const totalUnits = totalLessons + 1;
  const percentage = Math.round((completedUnits / totalUnits) * 100);

  let status = 'Not started';
  let statusClass = 'not-started';
  if (percentage === 100) {
    status = 'Completed';
    statusClass = 'completed';
  } else if (completedLessons === totalLessons) {
    status = 'Quiz remaining';
    statusClass = 'quiz-pending';
  } else if (completedLessons > 0 || quizCompleted) {
    status = 'In progress';
    statusClass = 'in-progress';
  }

  return {
    module,
    quizResult,
    learningResult,
    totalLessons,
    completedLessons,
    quizCompleted,
    completedUnits,
    totalUnits,
    percentage,
    status,
    statusClass
  };
}

function renderProgressPage(quizResults = {}, learningProgress = {}) {
  const loading = document.getElementById('progressLoadingState');
  const signedOut = document.getElementById('progressSignedOutState');
  const content = document.getElementById('progressContent');

  if (!content) return;
  if (!window.isUserSignedIn) {
    showSignedOutProgressState();
    return;
  }

  if (loading) loading.hidden = true;
  if (signedOut) signedOut.hidden = true;
  content.hidden = false;

  const approvalNotice = document.getElementById('progressApprovalNotice');
  if (approvalNotice) approvalNotice.hidden = window.isUserApproved;

  const moduleProgress = MODULES
    .filter(module => module.status === 'available')
    .map(module => getModuleProgress(module, quizResults[module.id], learningProgress[module.id]));

  const totalLessons = moduleProgress.reduce((sum, item) => sum + item.totalLessons, 0);
  const completedLessons = moduleProgress.reduce((sum, item) => sum + item.completedLessons, 0);
  const completedUnits = moduleProgress.reduce((sum, item) => sum + item.completedUnits, 0);
  const totalUnits = moduleProgress.reduce((sum, item) => sum + item.totalUnits, 0);
  const completedModules = moduleProgress.filter(item => item.percentage === 100).length;
  const completedQuizzes = moduleProgress.filter(item => item.quizCompleted);
  const quizAverage = completedQuizzes.length
    ? Math.round(completedQuizzes.reduce((sum, item) => {
      return sum + (item.quizResult.bestPercentage ?? item.quizResult.percentage ?? 0);
    }, 0) / completedQuizzes.length)
    : null;
  const overallPercentage = totalUnits ? Math.round((completedUnits / totalUnits) * 100) : 0;

  const ring = document.getElementById('overallProgressRing');
  const ringValue = document.getElementById('overallProgressValue');
  if (ring) {
    ring.style.setProperty('--progress-value', overallPercentage);
    ring.setAttribute('aria-label', `Overall completion ${overallPercentage} percent`);
  }
  if (ringValue) ringValue.textContent = `${overallPercentage}%`;

  const summary = document.getElementById('overallProgressSummary');
  if (summary) {
    summary.textContent = overallPercentage === 100
      ? 'All lessons and one-time assessments are complete.'
      : `${completedModules} of ${moduleProgress.length} modules fully completed.`;
  }

  const values = {
    completedLessonsCount: completedLessons,
    remainingLessonsCount: Math.max(0, totalLessons - completedLessons),
    quizAverageValue: quizAverage === null ? '—' : `${quizAverage}%`,
    completedModulesCount: `${completedModules} / ${moduleProgress.length}`
  };

  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });

  renderCourseProgress(moduleProgress);
  renderAssessmentResults(moduleProgress);
  renderRecentActivity(moduleProgress);
}

function renderCourseProgress(moduleProgress) {
  const list = document.getElementById('courseProgressList');
  if (!list) return;
  list.innerHTML = '';

  moduleProgress.forEach(item => {
    const quizLabel = item.quizCompleted
      ? `Quiz ${item.quizResult.bestScore ?? item.quizResult.score}/${item.quizResult.total}`
      : 'Quiz not submitted';
    const action = window.isUserApproved
      ? `<a class="course-progress-action" href="${escapePortalHTML(item.module.path)}" aria-label="Open ${escapePortalHTML(item.module.title)}">&rarr;</a>`
      : '<span class="course-progress-action disabled" aria-hidden="true">&rarr;</span>';

    const row = document.createElement('article');
    row.className = 'course-progress-item';
    row.innerHTML = `
      <div class="course-progress-heading">
        <span class="course-progress-icon" style="--module-color: ${escapePortalHTML(item.module.color)}" aria-hidden="true">${item.module.icon}</span>
        <div>
          <h3>${escapePortalHTML(item.module.title)}</h3>
          <p>${escapePortalHTML(item.module.subtitle)}</p>
        </div>
      </div>
      <span class="progress-status ${item.statusClass}">${item.status}</span>
      <div class="course-progress-meter">
        <div class="progress-track" aria-hidden="true">
          <span style="width: ${item.percentage}%; --module-color: ${escapePortalHTML(item.module.color)}"></span>
        </div>
        <div class="course-progress-meta">
          <span>${item.completedLessons} / ${item.totalLessons} lessons</span>
          <span>${escapePortalHTML(quizLabel)}</span>
          <strong>${item.percentage}%</strong>
        </div>
      </div>
      ${action}
    `;
    list.appendChild(row);
  });
}

function renderAssessmentResults(moduleProgress) {
  const list = document.getElementById('assessmentResultsList');
  if (!list) return;
  list.innerHTML = '';

  moduleProgress.forEach(item => {
    const result = item.quizResult;
    const row = document.createElement('article');
    row.className = `assessment-result ${result ? 'submitted' : 'pending'}`;

    if (result) {
      const percentage = result.bestPercentage ?? result.percentage ?? 0;
      row.innerHTML = `
        <div>
          <h3>${escapePortalHTML(item.module.title)}</h3>
          <p>Submitted ${escapePortalHTML(formatProgressDate(result.completedAt))}</p>
        </div>
        <div class="assessment-score">
          <strong>${result.bestScore ?? result.score}/${result.total}</strong>
          <span>${percentage}%</span>
        </div>
        <span class="progress-status completed">Submitted</span>
      `;
    } else {
      row.innerHTML = `
        <div>
          <h3>${escapePortalHTML(item.module.title)}</h3>
          <p>One-time quiz not submitted</p>
        </div>
        <div class="assessment-score"><strong>—</strong><span>No score</span></div>
        <span class="progress-status not-started">Pending</span>
      `;
    }

    list.appendChild(row);
  });
}

function renderRecentActivity(moduleProgress) {
  const list = document.getElementById('recentActivityList');
  if (!list) return;

  const activities = [];
  moduleProgress.forEach(item => {
    if (item.learningResult?.lastActiveAt) {
      activities.push({
        type: 'lesson',
        title: `Continued ${item.module.title}`,
        detail: `Lesson ${item.learningResult.lastLesson || item.completedLessons} of ${item.totalLessons}`,
        timestamp: item.learningResult.lastActiveAt
      });
    }

    if (item.quizResult?.completedAt) {
      activities.push({
        type: 'quiz',
        title: `${item.module.title} quiz submitted`,
        detail: `Score ${item.quizResult.bestScore ?? item.quizResult.score}/${item.quizResult.total}`,
        timestamp: item.quizResult.completedAt
      });
    }
  });

  activities.sort((a, b) => {
    return (timestampToDate(b.timestamp)?.getTime() || 0) - (timestampToDate(a.timestamp)?.getTime() || 0);
  });

  if (activities.length === 0) {
    list.innerHTML = `
      <div class="empty-state compact">
        <span class="state-icon" aria-hidden="true">○</span>
        <h3>No learning activity yet</h3>
        <p>Open a module to begin.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = activities.slice(0, 6).map(activity => `
    <article class="activity-item">
      <span class="activity-icon ${activity.type}" aria-hidden="true">${activity.type === 'quiz' ? '✓' : '›'}</span>
      <div>
        <h3>${escapePortalHTML(activity.title)}</h3>
        <p>${escapePortalHTML(activity.detail)}</p>
      </div>
      <time>${escapePortalHTML(formatRelativeActivity(activity.timestamp))}</time>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('progressSignInBtn')?.addEventListener('click', () => {
    if (typeof googleSignIn === 'function') googleSignIn();
  });
});

// Shared one-time quiz gate for module pages.
window.oneTimeQuizState = {
  moduleId: null,
  total: 0,
  resetQuiz: null,
  attemptActive: false,
  started: false,
  completed: false,
  result: null,
  initialized: false
};

function initOneTimeQuizGate(options) {
  window.oneTimeQuizState = {
    moduleId: options.moduleId,
    total: options.total,
    resetQuiz: options.resetQuiz,
    attemptActive: false,
    started: false,
    completed: false,
    result: null,
    initialized: true
  };
  refreshOneTimeQuizGate();
  return window.oneTimeQuizState;
}

function removeQuizGateOverlay(kind) {
  const selector = kind
    ? `.quiz-lock-overlay[data-lock="${kind}"]`
    : '.quiz-lock-overlay[data-lock="start"], .quiz-lock-overlay[data-lock="completed"]';
  document.querySelectorAll(selector).forEach(overlay => overlay.remove());
}

function setQuizBoxLocked(isLocked) {
  document.getElementById('quizBox')?.classList.toggle('gated-locked', isLocked);
}

function renderQuizGateOverlay(kind, title, description, actionHTML) {
  const quizBox = document.getElementById('quizBox');
  if (!quizBox) return;

  removeQuizGateOverlay(kind);
  const overlay = document.createElement('div');
  overlay.className = `quiz-lock-overlay quiz-${kind}-overlay`;
  overlay.dataset.lock = kind;
  overlay.innerHTML = `
    <div class="quiz-lock-card">
      <div class="quiz-lock-title">${title}</div>
      <div class="quiz-lock-desc">${description}</div>
      ${actionHTML || ''}
    </div>
  `;
  quizBox.appendChild(overlay);
  setQuizBoxLocked(true);
}

async function refreshOneTimeQuizGate() {
  const state = window.oneTimeQuizState;
  if (!state?.initialized) return;

  removeQuizGateOverlay();
  updateQuizAttemptControls();

  const user = auth.currentUser;
  if (!user || !window.isUserApproved) return;

  if (isCurrentUserAdmin()) {
    renderQuizGateOverlay(
      'start',
      'Admin Practice Quiz',
      'Admin accounts can retake this quiz for testing. Student accounts receive one submitted attempt.',
      '<button class="btn btn-primary btn-lock-signin" onclick="startOneTimeQuizAttempt()">Start Quiz</button>'
    );
    return;
  }

  const result = await getQuizResult(user.uid, state.moduleId);
  state.result = result;
  state.completed = !!result;

  if (state.completed && !state.attemptActive) {
    const scoreText = `${result.bestScore ?? result.score ?? 0}/${result.total || state.total}`;
    renderQuizGateOverlay(
      'completed',
      'Quiz Already Submitted',
      `This is a one-time quiz. Your recorded score for this module is <strong>${scoreText}</strong>.`,
      '<a class="btn btn-secondary btn-lock-signin" href="../progress.html">View My Progress</a>'
    );
    updateQuizAttemptControls();
    return;
  }

  if (!state.started && !state.attemptActive) {
    renderQuizGateOverlay(
      'start',
      'One-Time Quiz',
      'You can submit this quiz only once. Starting it locks lesson navigation until every question is finished and submitted.',
      '<button class="btn btn-primary btn-lock-signin" onclick="startOneTimeQuizAttempt()">Start Quiz</button>'
    );
  }
}

async function startOneTimeQuizAttempt() {
  const state = window.oneTimeQuizState;
  const user = auth.currentUser;
  if (!state?.initialized || !user) return;

  if (!window.isUserApproved) {
    showToast('Your account must be approved before starting the quiz.', 'error');
    return;
  }

  if (!isCurrentUserAdmin() && await hasCompletedQuiz(user.uid, state.moduleId)) {
    state.completed = true;
    state.attemptActive = false;
    refreshOneTimeQuizGate();
    showToast('This one-time quiz was already submitted.', 'error');
    return;
  }

  removeQuizGateOverlay('start');
  setQuizBoxLocked(false);
  state.started = true;
  state.completed = false;

  if (typeof state.resetQuiz === 'function') state.resetQuiz();

  state.attemptActive = true;
  updateQuizAttemptControls();
  showToast('Quiz started. Finish it before leaving this lesson.', 'info');
}

function completeOneTimeQuizAttempt() {
  const state = window.oneTimeQuizState;
  if (!state?.initialized) return;

  state.attemptActive = false;
  state.started = false;
  if (!isCurrentUserAdmin()) state.completed = true;
  setQuizBoxLocked(false);
  updateQuizAttemptControls();
}

function isQuizNavigationLocked() {
  return !!window.oneTimeQuizState?.attemptActive;
}

function canAnswerOneTimeQuiz() {
  const state = window.oneTimeQuizState;
  return !state?.initialized || isCurrentUserAdmin() || state.attemptActive;
}

function canResetOneTimeQuiz() {
  const state = window.oneTimeQuizState;
  if (!state?.initialized || isCurrentUserAdmin()) return true;
  if (state.attemptActive) {
    showToast('Finish the active quiz before restarting.', 'error');
    return false;
  }
  if (state.completed) {
    showToast('This one-time quiz has already been submitted.', 'error');
    return false;
  }
  return true;
}

function updateQuizAttemptControls() {
  const state = window.oneTimeQuizState;
  const isAdmin = isCurrentUserAdmin();
  const shouldDisableReset = !!(state?.initialized && !isAdmin && (state.attemptActive || state.completed));
  const shouldLockNavigation = !!(state?.initialized && state.attemptActive);

  document.querySelectorAll('button[onclick="resetQuiz()"]')
    .forEach(button => {
      button.disabled = shouldDisableReset;
      if (shouldDisableReset) {
        button.dataset.originalText ||= button.textContent;
        button.textContent = state.attemptActive ? 'Quiz in progress' : 'Completed';
      } else if (button.dataset.originalText) {
        button.textContent = button.dataset.originalText;
      }
    });

  ['prevBtn', 'nextBtn'].forEach(id => {
    const button = document.getElementById(id);
    if (button) button.disabled = shouldLockNavigation;
  });

  document.querySelectorAll('.portal-back-btn').forEach(link => {
    if (shouldLockNavigation) {
      link.dataset.originalHref ||= link.getAttribute('href') || '';
      link.removeAttribute('href');
      link.style.pointerEvents = 'none';
      link.style.opacity = '0.5';
      link.title = 'Finish the quiz before returning to the portal.';
    } else if (link.dataset.originalHref) {
      link.setAttribute('href', link.dataset.originalHref);
      link.style.pointerEvents = '';
      link.style.opacity = '';
      link.title = 'Back to Portal';
    }
  });
}
