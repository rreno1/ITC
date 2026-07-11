// Shared portal behavior for Home and My Progress.

function renderModuleCards() {
  const grid = document.getElementById('moduleGrid');
  if (!grid) return;
  grid.innerHTML = '';

  MODULES.forEach((module, index) => {
    const isComingSoon = module.status === 'locked';
    const isOpen = typeof isModuleOpen !== 'function' || isModuleOpen(module);
    const isClosed = module.status === 'available' && !isOpen;
    const isNotSignedIn = isOpen && !window.isUserSignedIn;
    const isPendingApproval = isOpen && window.isUserSignedIn && !window.isUserApproved;
    const isAccessible = isOpen && window.isUserSignedIn && window.isUserApproved;
    const isInteractive = isAccessible || isNotSignedIn;

    let footerLabel = 'Open module';
    if (isComingSoon) footerLabel = 'Coming soon';
    else if (isClosed) footerLabel = 'Closed by instructor';
    else if (isNotSignedIn) footerLabel = 'Sign in to access';
    else if (isPendingApproval) footerLabel = 'Awaiting teacher approval';
    const stateLabel = isComingSoon ? 'Coming soon' : (isClosed ? 'Closed' : 'Available');
    const stateIcon = isComingSoon ? '&#9203;' : (isClosed ? '&#128274;' : '&#10003;');

    const card = document.createElement('article');
    card.className = [
      'module-card',
      isComingSoon || isClosed || isPendingApproval ? 'locked' : '',
      isClosed ? 'module-closed' : '',
      isPendingApproval ? 'pending' : '',
      isInteractive ? 'interactive' : ''
    ].filter(Boolean).join(' ');
    card.style.setProperty('--card-color', module.color);
    card.style.animationDelay = `${index * 40}ms`;
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon" aria-hidden="true">${module.icon}</span>
        <span class="module-state ${isClosed ? 'is-closed' : 'is-open'}" title="${stateLabel}">
          <span aria-hidden="true">${stateIcon}</span>
          <span class="visually-hidden">${stateLabel}</span>
        </span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${module.title}</h3>
        <p class="card-subtitle">${module.subtitle}</p>
        <p class="card-description">${module.description}</p>
      </div>
      <div class="card-footer">
        <span class="${isAccessible ? 'open-label' : 'locked-label'}">${footerLabel}</span>
        <span class="card-footer-icon" aria-hidden="true">${isAccessible || isNotSignedIn ? '&#8599;' : '&#8212;'}</span>
      </div>
    `;

    const activate = () => {
      if (isAccessible) window.location.href = module.path;
      else if (isNotSignedIn && typeof googleSignIn === 'function') googleSignIn();
    };

    if (isInteractive) {
      card.tabIndex = 0;
      card.setAttribute('role', 'link');
      card.setAttribute('aria-label', `${footerLabel}: ${module.title}`);
      card.addEventListener('click', activate);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activate();
        }
      });
    }

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderModuleCards();

  document.querySelector('.hero-content .btn-primary')?.addEventListener('click', event => {
    const modulesSection = document.getElementById('modules');
    if (!modulesSection) return;
    event.preventDefault();
    modulesSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('moduleavailabilitychange', () => {
  if (document.getElementById('moduleGrid')) renderModuleCards();
});
