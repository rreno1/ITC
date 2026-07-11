(function setupSharedNavigation() {
  const MOBILE_NAV_BREAKPOINT = 720;
  const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  function initializeMobileDrawer(button) {
    const menuId = button.getAttribute('aria-controls');
    const menu = menuId ? document.getElementById(menuId) : null;
    if (!menu) return;

    const overlay = document.querySelector(`[data-mobile-overlay-for="${menuId}"]`);
    const closeButton = menu.querySelector('[data-mobile-menu-close]');
    const isMobile = () => window.innerWidth <= MOBILE_NAV_BREAKPOINT;
    const originalParent = menu.parentNode;
    const originalNextSibling = menu.nextSibling;
    const mountMenuForViewport = () => {
      if (isMobile() && menu.parentNode !== document.body) {
        document.body.appendChild(menu);
      } else if (!isMobile() && menu.parentNode !== originalParent) {
        originalParent.insertBefore(menu, originalNextSibling);
      }
    };
    const backgroundTargets = () => [
      document.getElementById('adminMainPanel'),
      document.querySelector('main'),
      document.querySelector('.hero-section'),
      document.querySelector('.modules-section'),
      document.querySelector('.portal-footer')
    ].filter((element, index, elements) => element && elements.indexOf(element) === index);

    const focusableElements = () => Array.from(menu.querySelectorAll(FOCUSABLE_SELECTOR))
      .filter(element => !element.hidden && element.getAttribute('aria-hidden') !== 'true');

    const setOpen = (open, restoreFocus = false) => {
      const shouldOpen = isMobile() && open;
      button.setAttribute('aria-expanded', String(shouldOpen));
      button.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
      menu.classList.toggle('menu-open', shouldOpen);
      menu.setAttribute('aria-hidden', String(isMobile() && !shouldOpen));
      menu.inert = isMobile() && !shouldOpen;
      if (isMobile()) {
        menu.setAttribute('role', 'dialog');
        menu.setAttribute('aria-modal', String(shouldOpen));
        menu.setAttribute('aria-label', menuId === 'adminNav' ? 'Admin navigation' : 'Site navigation');
      } else {
        menu.removeAttribute('role');
        menu.removeAttribute('aria-modal');
        menu.removeAttribute('aria-label');
      }
      overlay?.setAttribute('aria-hidden', String(!shouldOpen));
      backgroundTargets().forEach(element => { element.inert = shouldOpen; });

      if (shouldOpen) {
        document.body.classList.add('mobile-nav-open');
        menu.scrollTop = 0;
        window.requestAnimationFrame(() => (closeButton || focusableElements()[0])?.focus());
      } else {
        if (!document.querySelector('.mobile-nav-panel.menu-open')) {
          document.body.classList.remove('mobile-nav-open');
        }
        if (restoreFocus && isMobile()) button.focus();
      }
    };

    button.addEventListener('click', () => {
      setOpen(button.getAttribute('aria-expanded') !== 'true');
    });

    closeButton?.addEventListener('click', () => setOpen(false, true));
    overlay?.addEventListener('click', () => setOpen(false, true));

    menu.addEventListener('click', event => {
      if (event.target.closest('a, button[data-tab]')) setOpen(false, true);
    });

    document.addEventListener('click', event => {
      if (!menu.classList.contains('menu-open')) return;
      if (!menu.contains(event.target) && !button.contains(event.target)) setOpen(false, true);
    });

    document.addEventListener('keydown', event => {
      if (!menu.classList.contains('menu-open')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false, true);
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = focusableElements();
      if (!focusable.length) {
        event.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (!isMobile()) {
        setOpen(false);
        mountMenuForViewport();
        menu.removeAttribute('aria-hidden');
        menu.inert = false;
        backgroundTargets().forEach(element => { element.inert = false; });
      } else {
        mountMenuForViewport();
        if (!menu.classList.contains('menu-open')) {
          menu.setAttribute('aria-hidden', 'true');
          menu.inert = true;
        }
      }
    });

    mountMenuForViewport();
    if (isMobile()) {
      menu.setAttribute('aria-hidden', 'true');
      menu.inert = true;
    } else {
      menu.removeAttribute('aria-hidden');
      menu.inert = false;
    }
    overlay?.setAttribute('aria-hidden', 'true');
  }

  function initializeCourseSidebar() {
    const toggle = document.getElementById('courseSidebarToggle');
    const sidebar = document.getElementById('courseSidebar');
    const overlay = document.getElementById('courseSidebarOverlay');
    const closeButton = document.getElementById('courseSidebarClose');
    if (!toggle || !sidebar || !overlay) return;
    if (sidebar.dataset.navigationReady === 'true') return;
    sidebar.dataset.navigationReady = 'true';
    const background = [
      document.querySelector('.presentation-viewport'),
      document.querySelector('.bottom-controls')
    ].filter(Boolean);
    const getSidebarFocusable = () => Array.from(sidebar.querySelectorAll(FOCUSABLE_SELECTOR))
      .filter(element => !element.hidden && !element.disabled);

    const setOpen = (open, returnFocus = false) => {
      const isMobile = window.innerWidth <= 1100;
      document.body.classList.toggle('course-sidebar-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close lesson outline' : 'Open lesson outline');
      sidebar.setAttribute('aria-hidden', String(isMobile && !open));
      sidebar.inert = isMobile && !open;
      overlay.setAttribute('aria-hidden', String(!open));
      background.forEach(element => { element.inert = isMobile && open; });
      if (open) closeButton?.focus();
      else if (returnFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => {
      setOpen(!document.body.classList.contains('course-sidebar-open'));
    });
    closeButton?.addEventListener('click', () => setOpen(false, true));
    overlay.addEventListener('click', () => setOpen(false, true));
    sidebar.addEventListener('click', event => {
      if (event.target.closest('.sidebar-item')) setOpen(false, true);
    });
    sidebar.addEventListener('keydown', event => {
      const lesson = event.target.closest('.sidebar-item');
      if (lesson && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        lesson.click();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = getSidebarFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && document.body.classList.contains('course-sidebar-open')) {
        setOpen(false, true);
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1100) setOpen(false);
      const isClosedMobile = window.innerWidth <= 1100 && !document.body.classList.contains('course-sidebar-open');
      sidebar.setAttribute('aria-hidden', String(isClosedMobile));
      sidebar.inert = isClosedMobile;
      if (!isClosedMobile) background.forEach(element => { element.inert = false; });
    });
    sidebar.setAttribute('aria-hidden', String(window.innerWidth <= 1100));
    sidebar.inert = window.innerWidth <= 1100;
    overlay.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mobile-menu-toggle[aria-controls]:not(.course-sidebar-toggle)').forEach(initializeMobileDrawer);
    initializeCourseSidebar();
  });

  window.initializeCourseSidebar = initializeCourseSidebar;
})();
