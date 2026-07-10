// js/progress.js

function isCurrentUserAdmin() {
  const user = auth.currentUser;
  return !!(user && ADMIN_EMAILS.includes(user.email));
}

// Save quiz result to Firestore. Student accounts are limited to one attempt per module.
async function saveQuizResult(moduleId, score, total) {
  const user = auth.currentUser;
  if (!user) {
    showToast('Sign in with Google to save your quiz scores!', 'error');
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

    const attempts = existing.exists ? (existing.data().attempts || 0) + 1 : 1;
    const bestScore = existing.exists ? Math.max(existing.data().bestScore || 0, score) : score;

    await docRef.set({
      moduleId: moduleId,
      score: score,
      bestScore: bestScore,
      total: total,
      percentage: Math.round((score / total) * 100),
      bestPercentage: Math.round((bestScore / total) * 100),
      attempts: attempts,
      completedAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    showToast(`Quiz score saved: ${score}/${total}`, 'success');
    return { saved: true, attempts };
  } catch (error) {
    console.error('Error saving quiz score:', error);
    showToast('Failed to save score. Check your connection or Firestore settings.', 'error');
    return { saved: false, reason: 'error', error };
  }
}

// Get one quiz result for a user
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
  const result = await getQuizResult(userId, moduleId);
  return !!result;
}

// Get all quiz results for a user
async function getAllQuizResults(userId) {
  try {
    const snapshot = await db.collection('users').doc(userId).collection('quizResults').get();
    const results = {};
    snapshot.forEach(doc => {
      results[doc.id] = doc.data();
    });
    return results;
  } catch (error) {
    console.error('Error getting all quiz results:', error);
    return {};
  }
}

// Load user progress and update homepage grid
async function loadUserProgress(userId) {
  const results = await getAllQuizResults(userId);

  MODULES.forEach(mod => {
    if (mod.status !== 'available') return;

    const scoreBadge = document.getElementById(`score-${mod.id}`);
    const card = document.getElementById(`card-${mod.id}`);

    if (card) {
      const progressBar = card.querySelector('.progress-fill');
      const result = results[mod.id];

      if (result) {
        // Set progress bar width to the quiz percentage
        if (progressBar) {
          progressBar.style.width = result.bestPercentage + '%';
        }
        // Update score badge
        if (scoreBadge) {
          scoreBadge.textContent = `Score: ${result.bestScore}/${result.total}`;
          scoreBadge.classList.add('visible');
        }
      } else {
        if (progressBar) {
          progressBar.style.width = '0%';
        }
        if (scoreBadge) {
          scoreBadge.classList.remove('visible');
        }
      }
    }
  });
}

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
  const quizBox = document.getElementById('quizBox');
  if (quizBox) quizBox.classList.toggle('gated-locked', isLocked);
}

function renderQuizGateOverlay(kind, title, desc, buttonHtml) {
  const quizBox = document.getElementById('quizBox');
  if (!quizBox) return;

  removeQuizGateOverlay(kind);
  const overlay = document.createElement('div');
  overlay.className = `quiz-lock-overlay quiz-${kind}-overlay`;
  overlay.dataset.lock = kind;
  overlay.innerHTML = `
    <div class="quiz-lock-card">
      <div class="quiz-lock-title">${title}</div>
      <div class="quiz-lock-desc">${desc}</div>
      ${buttonHtml || ''}
    </div>
  `;
  quizBox.appendChild(overlay);
  setQuizBoxLocked(true);
}

async function refreshOneTimeQuizGate() {
  const state = window.oneTimeQuizState;
  if (!state || !state.initialized) return;

  removeQuizGateOverlay();
  updateQuizAttemptControls();

  const user = auth.currentUser;
  if (!user || !window.isUserApproved) return;

  if (isCurrentUserAdmin()) {
    renderQuizGateOverlay(
      'start',
      'Admin Practice Quiz',
      'Admin accounts can start and retake this quiz for testing. Student accounts only get one submitted attempt.',
      '<button class="btn btn-primary btn-lock-signin" style="pointer-events: auto;" onclick="startOneTimeQuizAttempt()">Start Quiz</button>'
    );
    return;
  }

  const result = await getQuizResult(user.uid, state.moduleId);
  state.result = result;
  state.completed = !!result;

  if (state.completed && !state.attemptActive) {
    const scoreText = `${result.bestScore || result.score || 0}/${result.total || state.total}`;
    renderQuizGateOverlay(
      'completed',
      'Quiz Already Submitted',
      `This is a one-time quiz. Your recorded score for this module is <strong>${scoreText}</strong>.`,
      '<a class="btn btn-secondary btn-lock-signin" style="pointer-events: auto; background: transparent; border: 1px solid var(--text-secondary); color: var(--text-primary); text-decoration: none;" href="../index.html">Back to Portal</a>'
    );
    updateQuizAttemptControls();
    return;
  }

  if (!state.started && !state.attemptActive) {
    renderQuizGateOverlay(
      'start',
      'One-Time Quiz',
      'You can submit this quiz only once with this student account. After you click Start Quiz, the lesson navigation is locked until you finish and submit.',
      '<button class="btn btn-primary btn-lock-signin" style="pointer-events: auto;" onclick="startOneTimeQuizAttempt()">Start Quiz</button>'
    );
  }
}

async function startOneTimeQuizAttempt() {
  const state = window.oneTimeQuizState;
  const user = auth.currentUser;
  if (!state || !state.initialized || !user) return;

  if (!window.isUserApproved) {
    showToast('Your account must be approved before starting the quiz.', 'error');
    return;
  }

  if (!isCurrentUserAdmin()) {
    const alreadyDone = await hasCompletedQuiz(user.uid, state.moduleId);
    if (alreadyDone) {
      state.completed = true;
      state.attemptActive = false;
      refreshOneTimeQuizGate();
      showToast('This one-time quiz was already submitted.', 'error');
      return;
    }
  }

  removeQuizGateOverlay('start');
  setQuizBoxLocked(false);
  state.started = true;
  state.completed = false;

  if (typeof state.resetQuiz === 'function') {
    state.resetQuiz();
  }

  state.attemptActive = true;

  updateQuizAttemptControls();
  showToast('Quiz started. Finish it before leaving this slide.', 'info');
}

function completeOneTimeQuizAttempt() {
  const state = window.oneTimeQuizState;
  if (!state || !state.initialized) return;

  state.attemptActive = false;
  state.started = false;
  if (!isCurrentUserAdmin()) {
    state.completed = true;
  }
  setQuizBoxLocked(false);
  updateQuizAttemptControls();
}

function isQuizNavigationLocked() {
  const state = window.oneTimeQuizState;
  return !!(state && state.initialized && state.attemptActive);
}

function canAnswerOneTimeQuiz() {
  const state = window.oneTimeQuizState;
  return !state || !state.initialized || isCurrentUserAdmin() || state.attemptActive;
}

function canResetOneTimeQuiz() {
  const state = window.oneTimeQuizState;
  if (!state || !state.initialized || isCurrentUserAdmin()) return true;
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
  const shouldDisableReset = !!(state && state.initialized && !isAdmin && (state.attemptActive || state.completed));
  const shouldLockNavigation = !!(state && state.initialized && state.attemptActive);

  document.querySelectorAll('button[onclick="resetQuiz()"]').forEach(btn => {
    btn.disabled = shouldDisableReset;
    if (shouldDisableReset) {
      btn.dataset.originalText = btn.dataset.originalText || btn.textContent;
      btn.textContent = state.attemptActive ? 'Quiz in progress' : 'Completed';
    } else if (btn.dataset.originalText) {
      btn.textContent = btn.dataset.originalText;
    }
  });

  ['prevBtn', 'nextBtn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.disabled = shouldLockNavigation;
  });

  document.querySelectorAll('.portal-back-btn').forEach(link => {
    if (shouldLockNavigation) {
      link.dataset.originalHref = link.dataset.originalHref || link.getAttribute('href') || '';
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
