// js/maintenance.js — Maintenance Mode Handler for CC 101 Portal

(function() {
  // Default maintenance state (Active upon deployment)
  const DEFAULT_MAINTENANCE_MODE = true;
  const DEFAULT_MAINTENANCE_MESSAGE = "The CC 101 Introduction to Computing learning portal is currently undergoing scheduled system updates and improvements. Student access is temporarily paused.";

  window.isMaintenanceMode = DEFAULT_MAINTENANCE_MODE;
  window.maintenanceMessage = DEFAULT_MAINTENANCE_MESSAGE;

  // Determine relative root path depending on whether we are in a subfolder (e.g., hardware-part-1/)
  function getRelativePath(toRootFile) {
    const isSubfolder = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean).length > 1 &&
      !window.location.pathname.endsWith('index.html') &&
      !window.location.pathname.endsWith('admin.html') &&
      !window.location.pathname.endsWith('progress.html');
    return isSubfolder ? `../${toRootFile}` : toRootFile;
  }

  function isAdminUser() {
    if (window.isUserAdmin === true) return true;
    if (typeof auth !== 'undefined' && auth.currentUser) {
      const email = String(auth.currentUser.email || '').trim().toLowerCase();
      if (typeof ADMIN_EMAILS !== 'undefined' && Array.isArray(ADMIN_EMAILS)) {
        return ADMIN_EMAILS.map(e => e.toLowerCase()).includes(email);
      }
      if (typeof ADMIN_EMAIL === 'string' && ADMIN_EMAIL.toLowerCase() === email) {
        return true;
      }
    }
    return false;
  }

  function isMaintenanceModeActive() {
    return Boolean(window.isMaintenanceMode);
  }
  window.isMaintenanceModeActive = isMaintenanceModeActive;

  // Broadcast maintenance state change
  function broadcastMaintenanceState() {
    document.dispatchEvent(new CustomEvent('maintenancestatechange', {
      detail: {
        active: window.isMaintenanceMode,
        message: window.maintenanceMessage
      }
    }));
  }

  // Update maintenance state locally and in UI
  function setLocalMaintenanceState(active, message) {
    window.isMaintenanceMode = Boolean(active);
    if (message) window.maintenanceMessage = message;
    try {
      localStorage.setItem('cc101_maintenance_mode', active ? 'true' : 'false');
    } catch (e) {}
    broadcastMaintenanceState();
    refreshMaintenanceGate();
  }
  window.setLocalMaintenanceState = setLocalMaintenanceState;

  // Persist maintenance state to Firestore (Admins only)
  async function setMaintenanceMode(active, message = DEFAULT_MAINTENANCE_MESSAGE) {
    setLocalMaintenanceState(active, message);

    if (typeof auth === 'undefined' || !auth.currentUser || typeof db === 'undefined') {
      console.warn('Firebase not ready to persist maintenance mode.');
      return;
    }

    const user = auth.currentUser;
    const userDocRef = db.collection('users').doc(user.uid);

    try {
      await userDocRef.set({
        courseModuleSettings: {
          maintenanceMode: {
            enabled: Boolean(active),
            message: String(message),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedBy: user.email || user.uid
          }
        }
      }, { merge: true });

      // Also update reserved fallback doc if permission allows
      try {
        await db.collection('users').doc('__course_settings__').set({
          maintenanceMode: {
            enabled: Boolean(active),
            message: String(message),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          }
        }, { merge: true });
      } catch (err) {
        // Fallback document write might be restricted by rules; ignore
      }

      if (typeof showToast === 'function') {
        showToast(`Maintenance mode turned ${active ? 'ON' : 'OFF'}.`, active ? 'warning' : 'success');
      }
    } catch (error) {
      console.error('Failed to save maintenance state to Firestore:', error);
      if (typeof showToast === 'function') {
        showToast('Could not save maintenance status to database.', 'error');
      }
      throw error;
    }
  }
  window.setMaintenanceMode = setMaintenanceMode;

  // Fetch saved maintenance mode from Firestore
  async function loadMaintenanceModeFromFirestore() {
    if (typeof db === 'undefined') return;

    try {
      // 1. If current user is signed in admin, read their profile
      if (typeof auth !== 'undefined' && auth.currentUser) {
        const doc = await db.collection('users').doc(auth.currentUser.uid).get();
        if (doc.exists) {
          const mData = doc.data()?.courseModuleSettings?.maintenanceMode;
          if (mData !== undefined) {
            const enabled = typeof mData === 'boolean' ? mData : Boolean(mData?.enabled);
            const msg = mData?.message || DEFAULT_MAINTENANCE_MESSAGE;
            setLocalMaintenanceState(enabled, msg);
            return;
          }
        }
      }

      // 2. Query admin profiles for configured settings
      if (typeof ADMIN_EMAILS !== 'undefined' && Array.isArray(ADMIN_EMAILS)) {
        for (const email of ADMIN_EMAILS) {
          const snap = await db.collection('users').where('email', '==', email.toLowerCase()).limit(1).get();
          if (!snap.empty) {
            const mData = snap.docs[0].data()?.courseModuleSettings?.maintenanceMode;
            if (mData !== undefined) {
              const enabled = typeof mData === 'boolean' ? mData : Boolean(mData?.enabled);
              const msg = mData?.message || DEFAULT_MAINTENANCE_MESSAGE;
              setLocalMaintenanceState(enabled, msg);
              return;
            }
          }
        }
      }

      // 3. Fallback check on __course_settings__
      const legacySnap = await db.collection('users').doc('__course_settings__').get();
      if (legacySnap.exists) {
        const mData = legacySnap.data()?.maintenanceMode;
        if (mData !== undefined) {
          const enabled = typeof mData === 'boolean' ? mData : Boolean(mData?.enabled);
          const msg = mData?.message || DEFAULT_MAINTENANCE_MESSAGE;
          setLocalMaintenanceState(enabled, msg);
          return;
        }
      }
    } catch (error) {
      // Offline or permission restricted for anonymous readers — keep default maintenance mode
      console.log('Using default maintenance mode setting:', window.isMaintenanceMode);
    }
  }

  // Render or remove the maintenance gate
  function refreshMaintenanceGate() {
    const isMaintenance = isMaintenanceModeActive();
    const isAdmin = isAdminUser();
    const isSpecialAdminPage = window.location.pathname.endsWith('admin.html');
    const isStandaloneMaintenancePage = window.location.pathname.endsWith('maintenance.html');

    // On standalone maintenance.html page, don't show overlay, but update status
    if (isStandaloneMaintenancePage) {
      updateStandaloneMaintenancePage(isMaintenance, isAdmin);
      return;
    }

    // On admin.html page, never block the admin dashboard with full-screen overlay
    if (isSpecialAdminPage) {
      removeMaintenanceGate();
      renderAdminBanner(isMaintenance);
      return;
    }

    // If Maintenance is active AND user is NOT an admin -> BLOCK
    if (isMaintenance && !isAdmin) {
      renderMaintenanceOverlay();
      removeAdminBanner();
    } else {
      // If maintenance is OFF, or user is an ADMIN -> UNBLOCK
      removeMaintenanceGate();
      if (isMaintenance && isAdmin) {
        renderAdminBanner(true);
      } else {
        removeAdminBanner();
      }
    }
  }
  window.refreshMaintenanceGate = refreshMaintenanceGate;

  // Overlay UI for non-admins
  function renderMaintenanceOverlay() {
    let overlay = document.getElementById('cc101MaintenanceOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'cc101MaintenanceOverlay';
      overlay.className = 'maintenance-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-labelledby', 'maintTitle');
      document.body.appendChild(overlay);
    }

    const homeUrl = getRelativePath('index.html');
    const adminUrl = getRelativePath('admin.html');

    overlay.innerHTML = `
      <div class="maintenance-card">
        <div class="maintenance-badge">
          <span class="maintenance-pulse" aria-hidden="true"></span>
          <span>System Status: Scheduled Maintenance</span>
        </div>

        <div class="maintenance-icon-wrap" aria-hidden="true">
          <span class="maintenance-gear">⚙️</span>
          <span class="maintenance-wrench">🔧</span>
        </div>

        <h1 class="maintenance-title" id="maintTitle">Portal Under Maintenance</h1>
        <p class="maintenance-subtitle">${window.maintenanceMessage}</p>

        <div class="maintenance-details-box">
          <div class="maint-detail-row">
            <span class="maint-detail-icon">🎓</span>
            <div>
              <strong>CC 101 — Introduction to Computing</strong>
              <small>MLG College of Learning</small>
            </div>
          </div>
          <div class="maint-detail-row">
            <span class="maint-detail-icon">🛡️</span>
            <div>
              <strong>Student Progress & Grades Secure</strong>
              <small>All completed quizzes and scores are safely preserved.</small>
            </div>
          </div>
          <div class="maint-detail-row">
            <span class="maint-detail-icon">⏳</span>
            <div>
              <strong>Expected Availability</strong>
              <small>System will resume regular access shortly. Please check back later.</small>
            </div>
          </div>
        </div>

        <div class="maintenance-actions">
          ${auth?.currentUser ? `
            <div style="width: 100%; margin-bottom: 0.75rem; font-size: 0.88rem; color: var(--text-secondary);">
              Signed in as: <strong style="color: var(--text-primary);">${auth.currentUser.email}</strong> (Student)
            </div>
            <button type="button" class="btn btn-primary maint-admin-btn" id="maintSwitchAccountBtn">
              <span>Sign in with Instructor Account</span>
            </button>
            <button type="button" class="btn btn-secondary maint-signout-btn" id="maintSignOutBtn">
              <span>Sign Out</span>
            </button>
          ` : `
            <button type="button" class="btn btn-primary maint-admin-btn" id="maintAdminSignInBtn">
              <svg class="google-icon" width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
                <path fill="#4285F4" d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.47h4.84c-.21 1.12-.84 2.07-1.8 2.72v2.24h2.9c1.7-1.57 2.68-3.88 2.68-6.6z"/>
                <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.2l-2.9-2.24c-.8.54-1.84.87-3.06.87-2.35 0-4.34-1.58-5.05-3.71H.95v2.3C2.43 15.89 5.5 18 9 18z"/>
                <path fill="#FBBC05" d="M3.95 10.72A5.4 5.4 0 0 1 3.6 9c0-.6.1-1.19.35-1.72V4.98H.95A9.002 9.002 0 0 0 0 9c0 1.62.43 3.14 1.19 4.47l2.76-2.25z"/>
                <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35L15 2.1C13.46.66 11.43 0 9 0 5.5 0 2.43 2.11.95 5.28l2.76 2.25C4.66 5.16 6.65 3.58 9 3.58z"/>
              </svg>
              <span>Instructor / Admin Sign In</span>
            </button>
          `}
          <button type="button" class="btn btn-secondary maint-refresh-btn" id="maintRefreshBtn">
            <span>Check Again / Refresh</span>
          </button>
        </div>

        <div class="maintenance-footer-hint">
          <span>Are you an instructor? Sign in with your authorized school email to bypass maintenance mode.</span>
        </div>
      </div>
    `;

    document.body.classList.add('portal-in-maintenance');

    // Attach listeners
    const signInBtn = overlay.querySelector('#maintAdminSignInBtn');
    if (signInBtn) {
      signInBtn.addEventListener('click', () => {
        if (typeof googleSignIn === 'function') {
          googleSignIn();
        } else if (typeof auth !== 'undefined') {
          const provider = new firebase.auth.GoogleAuthProvider();
          auth.signInWithPopup(provider).catch(err => {
            console.error('Sign in error:', err);
            alert('Sign in failed: ' + (err.message || err));
          });
        }
      });
    }

    const switchBtn = overlay.querySelector('#maintSwitchAccountBtn');
    if (switchBtn) {
      switchBtn.addEventListener('click', async () => {
        if (typeof auth !== 'undefined') {
          await auth.signOut();
          if (typeof googleSignIn === 'function') {
            googleSignIn();
          }
        }
      });
    }

    const signOutBtn = overlay.querySelector('#maintSignOutBtn');
    if (signOutBtn) {
      signOutBtn.addEventListener('click', async () => {
        if (typeof auth !== 'undefined') {
          await auth.signOut();
          refreshMaintenanceGate();
        }
      });
    }

    const refreshBtn = overlay.querySelector('#maintRefreshBtn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        refreshBtn.disabled = true;
        refreshBtn.innerHTML = '<span>Checking...</span>';
        loadMaintenanceModeFromFirestore().then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 400);
        });
      });
    }
  }

  function removeMaintenanceGate() {
    const overlay = document.getElementById('cc101MaintenanceOverlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('portal-in-maintenance');
  }

  // Banner shown to logged-in admins when maintenance mode is active
  function renderAdminBanner(isActive) {
    let banner = document.getElementById('cc101AdminMaintenanceBanner');
    if (!isActive) {
      if (banner) banner.remove();
      document.body.classList.remove('has-admin-maint-banner');
      return;
    }

    if (!banner) {
      banner = document.createElement('aside');
      banner.id = 'cc101AdminMaintenanceBanner';
      banner.className = 'admin-maint-banner';
      banner.setAttribute('role', 'status');
      banner.setAttribute('aria-label', 'Maintenance mode warning');
      document.body.prepend(banner);
    }

    const adminUrl = getRelativePath('admin.html');
    banner.innerHTML = `
      <div class="admin-maint-banner-inner">
        <div class="admin-maint-banner-text">
          <span class="admin-maint-badge">ADMIN BYPASS</span>
          <strong>Maintenance Mode is currently ACTIVE.</strong>
          <span>Students and visitors cannot access course materials.</span>
        </div>
        <div class="admin-maint-banner-actions">
          <a href="${adminUrl}" class="admin-maint-btn">Admin Dashboard</a>
          <button type="button" class="admin-maint-btn-toggle" id="quickToggleMaintBtn">Turn OFF</button>
        </div>
      </div>
    `;

    document.body.classList.add('has-admin-maint-banner');

    const toggleBtn = banner.querySelector('#quickToggleMaintBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', async () => {
        if (confirm('Turn OFF maintenance mode? The portal will become immediately accessible to students.')) {
          toggleBtn.disabled = true;
          toggleBtn.textContent = 'Disabling...';
          try {
            await setMaintenanceMode(false);
          } catch (e) {
            toggleBtn.disabled = false;
            toggleBtn.textContent = 'Turn OFF';
          }
        }
      });
    }
  }

  function removeAdminBanner() {
    const banner = document.getElementById('cc101AdminMaintenanceBanner');
    if (banner) banner.remove();
    document.body.classList.remove('has-admin-maint-banner');
  }

  // Update standalone maintenance.html view
  function updateStandaloneMaintenancePage(isMaintenance, isAdmin) {
    const statusText = document.getElementById('standaloneStatusText');
    const badge = document.getElementById('standaloneStatusBadge');
    if (statusText) {
      statusText.textContent = isMaintenance
        ? "Maintenance mode is currently ACTIVE. Student access is paused."
        : "Maintenance mode is currently INACTIVE. The portal is live.";
    }
    if (badge) {
      badge.textContent = isMaintenance ? "Status: Maintenance Active" : "Status: Systems Operational";
      badge.className = isMaintenance ? "maintenance-badge" : "maintenance-badge operational";
    }
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    refreshMaintenanceGate();
    loadMaintenanceModeFromFirestore();
  });

  // Re-check when Firebase auth state resolves
  if (typeof auth !== 'undefined') {
    auth.onAuthStateChanged(() => {
      refreshMaintenanceGate();
      loadMaintenanceModeFromFirestore();
    });
  }

  // Listen to custom events
  document.addEventListener('maintenancestatechange', refreshMaintenanceGate);

})();
