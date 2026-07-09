// js/app.js

// Auth gate — tracks whether a user is currently signed in AND approved
let isUserSignedIn = false;
let isUserApproved = false;

// Theme initialization and toggling
function initTheme() {
  const savedTheme = localStorage.getItem('itc-portal-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggleBtn(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('itc-portal-theme', newTheme);
  updateThemeToggleBtn(newTheme);
}

function updateThemeToggleBtn(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Render dynamic module grid
function renderModuleCards() {
  const grid = document.getElementById('moduleGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  MODULES.forEach((mod, index) => {
    const card = document.createElement('div');
    
    // Determine if this card should be locked
    const isComingSoon = (mod.status === 'locked');
    const isNotSignedIn = (mod.status === 'available' && !isUserSignedIn);
    const isPendingApproval = (mod.status === 'available' && isUserSignedIn && !isUserApproved);
    const isLocked = isComingSoon || isNotSignedIn || isPendingApproval;
    
    card.className = `module-card ${isLocked ? 'locked' : ''} ${isPendingApproval ? 'pending' : ''} ${isNotSignedIn ? 'clickable-locked' : ''}`;
    card.id = `card-${mod.id}`;
    card.style.setProperty('--card-color', mod.color);
    card.style.animationDelay = `${index * 0.06}s`;
    
    // Footer label
    let footerLabel;
    if (isComingSoon) {
      footerLabel = '<span class="locked-label">🔒 Coming Soon</span>';
    } else if (isNotSignedIn) {
      footerLabel = '<span class="locked-label">🔒 Sign in to access</span>';
    } else if (isPendingApproval) {
      footerLabel = '<span class="locked-label pending-label">⏳ Awaiting teacher approval</span>';
    } else {
      footerLabel = '<span class="open-label">Open Module →</span>';
    }
    
    // Card HTML structure
    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon" style="background: ${mod.color}20; color: ${mod.color}">${mod.icon}</div>
        <span class="score-badge" id="score-${mod.id}"></span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${mod.title}</h3>
        <p class="card-subtitle" style="color: ${mod.color}">${mod.subtitle}</p>
        <p class="card-description">${mod.description}</p>
      </div>
      <div class="card-footer">
        <div class="progress-bar">
          <div class="progress-fill" style="width: 0%"></div>
        </div>
        ${footerLabel}
      </div>
      ${isLocked ? '<div class="card-locked-overlay"></div>' : ''}
    `;
    
    // Click action — only if fully unlocked (signed in + approved)
    if (mod.status === 'available' && isUserSignedIn && isUserApproved) {
      card.addEventListener('click', () => {
        window.location.href = mod.path;
      });
      card.style.cursor = 'pointer';
    } else if (isNotSignedIn) {
      // Clicking a sign-in-locked card triggers Google sign-in
      card.addEventListener('click', () => {
        if (typeof googleSignIn === 'function') googleSignIn();
      });
      card.style.cursor = 'pointer';
    }
    
    grid.appendChild(card);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderModuleCards();
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Smooth scrolling for Hero CTA button
  const exploreBtn = document.querySelector('.hero-content .btn-primary');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const modulesSection = document.getElementById('modules');
      if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
