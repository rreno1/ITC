(function setupUniformCourseShell() {
  function currentModule() {
    if (typeof MODULES === 'undefined' || !Array.isArray(MODULES)) return null;
    const path = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    return MODULES.find(module => path.endsWith(`/${module.path.toLowerCase()}`)) || null;
  }

  function standardizeWelcome() {
    const module = currentModule();
    const layout = document.querySelector('.slide.title-layout, .slide .title-layout');
    const header = layout?.querySelector('.hero-header');
    if (!module || !layout || !header) return;

    const category = header.querySelector('.sub-category');
    const heading = header.querySelector('h1');
    const description = header.querySelector('.hero-desc');
    if (category) category.textContent = 'INTRODUCTION TO COMPUTING';
    if (heading) heading.textContent = 'Introduction to Computing';
    if (description) description.textContent = module.description;

    let moduleTitle = header.querySelector('.module-intro-title');
    if (!moduleTitle) {
      moduleTitle = document.createElement('p');
      moduleTitle.className = 'module-intro-title';
      heading?.insertAdjacentElement('afterend', moduleTitle);
    }
    moduleTitle.textContent = `${module.title}: ${module.subtitle}`;

    const grid = layout.querySelector('.welcome-grid');
    if (grid) {
      grid.innerHTML = `
        <div class="info-card uniform-welcome-card">
          <span class="welcome-card-mark" aria-hidden="true">01</span>
          <div><h4>Current Module</h4><p>${module.title}</p></div>
        </div>
        <div class="info-card uniform-welcome-card">
          <span class="welcome-card-mark" aria-hidden="true">CC</span>
          <div><h4>Course</h4><p>Introduction to Computing</p></div>
        </div>
        <div class="info-card uniform-welcome-card">
          <span class="welcome-card-mark" aria-hidden="true">GO</span>
          <div><h4>Learning Flow</h4><p>Lessons, activity, quiz, and review</p></div>
        </div>
      `;
    }

    if (Array.isArray(module.objectives) && module.objectives.length) {
      let objectives = layout.querySelector('.welcome-objectives');
      if (!objectives) {
        objectives = document.createElement('section');
        objectives.className = 'welcome-objectives';
        grid?.insertAdjacentElement('afterend', objectives);
      }
      objectives.innerHTML = `
        <h2>Learning objectives</h2>
        <ul class="slide-body-bullets">
          ${module.objectives.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;
    }

    const navTitle = document.querySelector('.top-navbar .nav-title');
    if (navTitle) navTitle.textContent = module.title;
    document.title = `Introduction to Computing - ${module.title}`;
  }

  function syncFinalNavigation() {
    const finalSlide = document.querySelector('.presentation-viewport .slide:last-of-type');
    const nextButton = document.getElementById('nextBtn');
    if (!finalSlide || !nextButton) return;
    const isFinal = finalSlide.classList.contains('active-slide');
    nextButton.hidden = isFinal;
    document.body.classList.toggle('is-final-slide', isFinal);
  }

  document.addEventListener('DOMContentLoaded', () => {
    standardizeWelcome();
    syncFinalNavigation();
    const viewport = document.querySelector('.presentation-viewport');
    if (viewport) {
      new MutationObserver(syncFinalNavigation).observe(viewport, {
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      });
    }
  });
})();
