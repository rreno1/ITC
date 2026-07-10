// js/auth.js

window.isUserSignedIn = false;
window.isUserApproved = false;
window.isUserAdmin = false;
window.currentUserData = null;

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

async function findManualAccountByEmail(email) {
  const normalized = normalizeEmail(email);
  if (!normalized) return null;

  try {
    const snapshot = await db.collection('users')
      .where('email', '==', normalized)
      .limit(5)
      .get();

    if (snapshot.empty) return null;
    const doc = snapshot.docs.find(item => item.data().manual === true);
    if (!doc) return null;
    return { uid: doc.id, ...doc.data() };
  } catch (error) {
    console.log('Manual account lookup skipped:', error);
    return null;
  }
}

function timeToMinutes(timeValue) {
  const [hours, minutes] = String(timeValue || '0:0').split(':').map(Number);
  return (hours * 60) + minutes;
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getAttendanceWindow(userData, now = new Date()) {
  if (!userData || userData.role !== 'student' || userData.approved !== true) {
    return { eligible: false, reason: 'not-approved-student' };
  }

  const batchConfig = getBatchConfig(userData.batch);
  if (!batchConfig) {
    return { eligible: false, reason: 'no-batch' };
  }

  const minutesNow = (now.getHours() * 60) + now.getMinutes();
  const startMinutes = timeToMinutes(batchConfig.attendanceStart);
  const endMinutes = timeToMinutes(batchConfig.attendanceEnd);
  const isScheduledDay = now.getDay() === batchConfig.attendanceDay;
  const isScheduledTime = minutesNow >= startMinutes && minutesNow <= endMinutes;

  return {
    eligible: isScheduledDay && isScheduledTime,
    batchConfig,
    dateKey: formatDateKey(now),
    reason: !isScheduledDay ? 'wrong-day' : (!isScheduledTime ? 'outside-window' : 'eligible')
  };
}

async function markAttendanceIfEligible(user, userData) {
  const attendance = getAttendanceWindow(userData);
  if (!attendance.eligible) return;

  const toastKey = `attendance-toast-${user.uid}-${attendance.dateKey}`;
  const existingRecord = userData.attendance && userData.attendance[attendance.dateKey];
  const basePath = `attendance.${attendance.dateKey}`;
  const updates = {
    [`${basePath}.dateKey`]: attendance.dateKey,
    [`${basePath}.present`]: true,
    [`${basePath}.batch`]: attendance.batchConfig.id,
    [`${basePath}.batchLabel`]: attendance.batchConfig.label,
    [`${basePath}.scheduleDay`]: attendance.batchConfig.attendanceDayName,
    [`${basePath}.window`]: `${attendance.batchConfig.attendanceStart}-${attendance.batchConfig.attendanceEnd}`,
    [`${basePath}.page`]: window.location.pathname,
    [`${basePath}.lastSeenAt`]: firebase.firestore.FieldValue.serverTimestamp()
  };

  if (!existingRecord || !existingRecord.firstSeenAt) {
    updates[`${basePath}.firstSeenAt`] = firebase.firestore.FieldValue.serverTimestamp();
  }

  try {
    await db.collection('users').doc(user.uid).update(updates);
    if (!sessionStorage.getItem(toastKey)) {
      showToast(`Attendance checked for ${attendance.batchConfig.label}.`, 'success');
      sessionStorage.setItem(toastKey, 'shown');
    }
  } catch (error) {
    console.error('Attendance check-in failed:', error);
  }
}

function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(async (result) => {
      const user = result.user;
      const userDocRef = db.collection('users').doc(user.uid);
      const userDoc = await userDocRef.get();
      const isAdmin = ADMIN_EMAILS.includes(user.email);

      if (!userDoc.exists) {
        const manualAccount = isAdmin ? null : await findManualAccountByEmail(user.email);

        await userDocRef.set({
          name: user.displayName || (manualAccount && manualAccount.name) || user.email,
          email: normalizeEmail(user.email),
          photoURL: user.photoURL,
          role: isAdmin ? 'admin' : ((manualAccount && manualAccount.role) || 'student'),
          approved: isAdmin ? true : !!(manualAccount && manualAccount.approved),
          batch: isAdmin ? null : ((manualAccount && manualAccount.batch) || null),
          linkedManualAccountId: manualAccount ? manualAccount.uid : null,
          registeredAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastActive: firebase.firestore.FieldValue.serverTimestamp()
        });
      } else {
        const userData = userDoc.data();
        const currentRole = userData.role || 'student';
        const updates = {
          name: user.displayName || userData.name || user.email,
          email: normalizeEmail(user.email),
          photoURL: user.photoURL,
          lastActive: firebase.firestore.FieldValue.serverTimestamp()
        };

        if (!isAdmin && currentRole === 'admin') {
          updates.role = 'student';
          updates.approved = false;
        } else if (isAdmin && currentRole !== 'admin') {
          updates.role = 'admin';
          updates.approved = true;
          updates.batch = null;
        }

        await userDocRef.update(updates);
      }

      showToast('Logged in successfully!', 'success');

      if (window.location.pathname.includes('auth.html')) {
        window.location.href = 'index.html';
      }
    })
    .catch((error) => {
      console.error('Sign-in error:', error);
      showToast('Sign-in failed. Please try again.', 'error');
    });
}

function signOut() {
  auth.signOut().then(() => {
    showToast('Signed out.', 'info');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });
}

auth.onAuthStateChanged(async (user) => {
  const signInBtn = document.getElementById('signInBtn');
  const userMenu = document.getElementById('userMenu');
  const userDisplayName = document.getElementById('userDisplayName');
  const adminLink = document.getElementById('adminLink');

  if (user) {
    window.isUserSignedIn = true;
    if (signInBtn) signInBtn.style.display = 'none';
    if (userMenu) {
      userMenu.style.display = 'flex';
      if (userDisplayName) userDisplayName.textContent = user.displayName || user.email;
    }

    try {
      const userDoc = await db.collection('users').doc(user.uid).get();
      if (userDoc.exists) {
        const data = userDoc.data();
        const isAdmin = ADMIN_EMAILS.includes(user.email) || data.role === 'admin';
        window.isUserAdmin = isAdmin;
        window.isUserApproved = isAdmin || data.approved === true;
        window.currentUserData = { uid: user.uid, ...data };
      } else {
        const isAdmin = ADMIN_EMAILS.includes(user.email);
        window.isUserAdmin = isAdmin;
        window.isUserApproved = isAdmin;
        window.currentUserData = isAdmin
          ? { uid: user.uid, name: user.displayName, email: normalizeEmail(user.email), role: 'admin', approved: true }
          : null;
      }
    } catch (err) {
      console.error('Error checking approval:', err);
      window.isUserAdmin = false;
      window.isUserApproved = false;
      window.currentUserData = null;
    }

    if (typeof renderModuleCards === 'function') renderModuleCards();

    if (adminLink) {
      adminLink.style.display = window.isUserAdmin ? 'inline-block' : 'none';
    }

    db.collection('users').doc(user.uid).update({
      lastActive: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(err => console.log('Silently ignored lastActive update error:', err));

    if (window.currentUserData) {
      markAttendanceIfEligible(user, window.currentUserData);
    }

    if (typeof loadUserProgress === 'function') {
      loadUserProgress(user.uid);
    }

    if (typeof checkAdminAccess === 'function') {
      checkAdminAccess(user);
    }

    if (typeof onAuthGateChanged === 'function') {
      onAuthGateChanged(user, window.isUserApproved);
    }
  } else {
    window.isUserSignedIn = false;
    window.isUserApproved = false;
    window.isUserAdmin = false;
    window.currentUserData = null;

    if (signInBtn) signInBtn.style.display = 'inline-flex';
    if (userMenu) userMenu.style.display = 'none';
    if (adminLink) adminLink.style.display = 'none';

    if (typeof renderModuleCards === 'function') renderModuleCards();
    if (typeof resetStudentDashboard === 'function') resetStudentDashboard();

    if (typeof checkAdminAccess === 'function') {
      checkAdminAccess(null);
    }

    if (typeof onAuthGateChanged === 'function') {
      onAuthGateChanged(null, false);
    }
  }
});

function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.getElementById('signInBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  const googleSignInBtn = document.getElementById('googleSignInBtn');

  if (signInBtn) signInBtn.addEventListener('click', googleSignIn);
  if (signOutBtn) signOutBtn.addEventListener('click', signOut);
  if (googleSignInBtn) googleSignInBtn.addEventListener('click', googleSignIn);
});
