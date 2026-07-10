(function setupSharedNavigation() {
  function initializeCollapsibleMenu(button) {
    const menuId = button.getAttribute('aria-controls');
    const menu = menuId ? document.getElementById(menuId) : null;
    if (!menu) return;

    const close = () => {
      button.setAttribute('aria-expanded', 'false');
      menu.classList.remove('menu-open');
      if (window.innerWidth <= 720) menu.setAttribute('aria-hidden', 'true');
    };

    button.addEventListener('click', event => {
      event.stopPropagation();
      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(shouldOpen));
      menu.classList.toggle('menu-open', shouldOpen);
      menu.setAttribute('aria-hidden', String(!shouldOpen));
    });

    menu.addEventListener('click', event => {
      if (event.target.closest('a, button[data-tab]')) close();
    });

    document.addEventListener('click', event => {
      if (!menu.classList.contains('menu-open')) return;
      if (!menu.contains(event.target) && !button.contains(event.target)) close();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') close();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) {
        menu.removeAttribute('aria-hidden');
        close();
      } else if (!menu.classList.contains('menu-open')) {
        menu.setAttribute('aria-hidden', 'true');
      }
    });

    if (window.innerWidth <= 720) menu.setAttribute('aria-hidden', 'true');
  }

  function initializeCourseSidebar() {
    const toggle = document.getElementById('courseSidebarToggle');
    const sidebar = document.getElementById('courseSidebar');
    const overlay = document.getElementById('courseSidebarOverlay');
    const closeButton = document.getElementById('courseSidebarClose');
    if (!toggle || !sidebar || !overlay) return;

    const setOpen = (open, returnFocus = false) => {
      const isMobile = window.innerWidth <= 1100;
      document.body.classList.toggle('course-sidebar-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      sidebar.setAttribute('aria-hidden', String(isMobile && !open));
      sidebar.inert = isMobile && !open;
      overlay.setAttribute('aria-hidden', String(!open));
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
      if (!lesson || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      lesson.click();
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
    });
    sidebar.setAttribute('aria-hidden', String(window.innerWidth <= 1100));
    sidebar.inert = window.innerWidth <= 1100;
    overlay.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mobile-menu-toggle[aria-controls]:not(.course-sidebar-toggle)').forEach(initializeCollapsibleMenu);
    initializeCourseSidebar();
  });
})();
