// js/app.js

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
    card.className = `module-card ${mod.status === 'locked' ? 'locked' : ''}`;
    card.id = `card-${mod.id}`;
    card.style.setProperty('--card-color', mod.color);
    card.style.animationDelay = `${index * 0.06}s`;
    
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
        ${mod.status === 'locked' ? '<span class="locked-label">🔒 Coming Soon</span>' : '<span class="open-label">Open Module →</span>'}
      </div>
      ${mod.status === 'locked' ? '<div class="card-locked-overlay"></div>' : ''}
    `;
    
    // Click action for open modules
    if (mod.status === 'available') {
      card.addEventListener('click', () => {
        window.location.href = mod.path;
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
