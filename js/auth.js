// js/auth.js

// Global variables for authentication and approval state
window.isUserSignedIn = false;
window.isUserApproved = false;

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
        // New user — set approved to false (needs admin approval)
        // Admin accounts are auto-approved
        const isAdmin = ADMIN_EMAILS.includes(user.email);
        await userDocRef.set({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: isAdmin ? 'admin' : 'student',
          approved: isAdmin ? true : false,
          registeredAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastActive: firebase.firestore.FieldValue.serverTimestamp()
        });
      } else {
        // User exists — verify role and update timestamps
        const userData = userDoc.data();
        const isAdmin = ADMIN_EMAILS.includes(user.email);
        const currentRole = userData.role || 'student';
        
        const updates = {
          name: user.displayName,
          photoURL: user.photoURL,
          lastActive: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        // Dynamic downgrade/upgrade if email configuration changes
        if (!isAdmin && currentRole === 'admin') {
          updates.role = 'student';
          updates.approved = false;
        } else if (isAdmin && currentRole !== 'admin') {
          updates.role = 'admin';
          updates.approved = true;
        }
        
        await userDocRef.update(updates);
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
auth.onAuthStateChanged(async (user) => {
  const signInBtn = document.getElementById('signInBtn');
  const userMenu = document.getElementById('userMenu');
  const userDisplayName = document.getElementById('userDisplayName');
  const adminLink = document.getElementById('adminLink');

  if (user) {
    // User is signed in
    window.isUserSignedIn = true;
    if (signInBtn) signInBtn.style.display = 'none';
    if (userMenu) {
      userMenu.style.display = 'flex';
      if (userDisplayName) userDisplayName.textContent = user.displayName;
    }
    
    // Check approval status from Firestore
    try {
      const userDoc = await db.collection('users').doc(user.uid).get();
      if (userDoc.exists) {
        const data = userDoc.data();
        const isAdmin = ADMIN_EMAILS.includes(user.email);
        window.isUserApproved = isAdmin || (data.approved === true);
      } else {
        window.isUserApproved = false;
      }
    } catch (err) {
      console.error('Error checking approval:', err);
      window.isUserApproved = false;
    }
    
    // Re-render module cards with approval status
    if (typeof renderModuleCards === 'function') renderModuleCards();
    
    // Show admin link if admin
    if (adminLink) {
      if (ADMIN_EMAILS.includes(user.email)) {
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
    
    // Trigger page-specific auth callback
    if (typeof onAuthGateChanged === 'function') {
      onAuthGateChanged(user, window.isUserApproved);
    }
  } else {
    // User is signed out
    window.isUserSignedIn = false;
    window.isUserApproved = false;
    if (signInBtn) signInBtn.style.display = 'inline-flex';
    if (userMenu) userMenu.style.display = 'none';
    if (adminLink) adminLink.style.display = 'none';
    
    // Re-render module cards as locked
    if (typeof renderModuleCards === 'function') renderModuleCards();
    
    // Trigger admin check on admin page with null
    if (typeof checkAdminAccess === 'function') {
      checkAdminAccess(null);
    }
    
    // Trigger page-specific auth callback
    if (typeof onAuthGateChanged === 'function') {
      onAuthGateChanged(null, false);
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
