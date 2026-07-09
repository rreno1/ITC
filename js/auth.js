// js/auth.js

// Google Sign-In via Popup
function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(async (result) => {
      const user = result.user;
      
      // Update/Create user record in Firestore
      const userDocRef = db.collection('users').doc(user.uid);
      const userDoc = await userDocRef.get();
      
      if (!userDoc.exists) {
        await userDocRef.set({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: user.email === ADMIN_EMAIL ? 'admin' : 'student',
          registeredAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastActive: firebase.firestore.FieldValue.serverTimestamp()
        });
      } else {
        await userDocRef.update({
          name: user.displayName,
          photoURL: user.photoURL,
          lastActive: firebase.firestore.FieldValue.serverTimestamp()
        });
      }
      
      showToast('Logged in successfully!', 'success');
      
      // Redirect if on auth.html page
      if (window.location.pathname.includes('auth.html')) {
        window.location.href = 'index.html';
      }
    })
    .catch((error) => {
      console.error('Sign-in error:', error);
      showToast('Sign-in failed. Please try again.', 'error');
    });
}

// Sign Out
function signOut() {
  auth.signOut().then(() => {
    showToast('Signed out.', 'info');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });
}

// Monitor Auth State changes
auth.onAuthStateChanged((user) => {
  const signInBtn = document.getElementById('signInBtn');
  const userMenu = document.getElementById('userMenu');
  const userAvatar = document.getElementById('userAvatar');
  const userDisplayName = document.getElementById('userDisplayName');
  const adminLink = document.getElementById('adminLink');

  if (user) {
    // User is signed in
    if (signInBtn) signInBtn.style.display = 'none';
    if (userMenu) {
      userMenu.style.display = 'flex';
      if (userAvatar) userAvatar.src = user.photoURL || '';
      if (userDisplayName) userDisplayName.textContent = user.displayName;
    }
    
    // Show admin link if matches admin email
    if (adminLink) {
      if (user.email === ADMIN_EMAIL) {
        adminLink.style.display = 'inline-block';
      } else {
        adminLink.style.display = 'none';
      }
    }
    
    // Update lastActive timestamp silently
    db.collection('users').doc(user.uid).update({
      lastActive: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(err => console.log('Silently ignored lastActive update error:', err));
    
    // Trigger load of user progress on pages that have it
    if (typeof loadUserProgress === 'function') {
      loadUserProgress(user.uid);
    }
    
    // Trigger admin check on admin page
    if (typeof checkAdminAccess === 'function') {
      checkAdminAccess(user);
    }
  } else {
    // User is signed out
    if (signInBtn) signInBtn.style.display = 'inline-flex';
    if (userMenu) userMenu.style.display = 'none';
    if (adminLink) adminLink.style.display = 'none';
    
    // Trigger admin check on admin page with null
    if (typeof checkAdminAccess === 'function') {
      checkAdminAccess(null);
    }
  }
});

// Toast notification helper
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Animate slide-in
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Slide-out and remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Bind Sign In triggers
document.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.getElementById('signInBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  const googleSignInBtn = document.getElementById('googleSignInBtn');
  
  if (signInBtn) signInBtn.addEventListener('click', googleSignIn);
  if (signOutBtn) signOutBtn.addEventListener('click', signOut);
  if (googleSignInBtn) googleSignInBtn.addEventListener('click', googleSignIn);
});
