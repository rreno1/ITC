(function setupPageLoader() {
  let ready = false;
  let waitingForDom = false;

  function markPageReady() {
    if (ready || waitingForDom) return;
    if (document.readyState === 'loading') {
      waitingForDom = true;
      document.addEventListener('DOMContentLoaded', () => {
        waitingForDom = false;
        markPageReady();
      }, { once: true });
      return;
    }

    ready = true;
    window.requestAnimationFrame(() => {
      const loader = document.getElementById('pageLoader');
      document.documentElement.classList.remove('page-loading');
      if (loader) {
        loader.setAttribute('aria-busy', 'false');
        setTimeout(() => { loader.hidden = true; }, 170);
      }
      document.dispatchEvent(new CustomEvent('page:ready'));
    });
  }

  window.markPageReady = markPageReady;

  // Prevent a permanent overlay if an external SDK is unavailable.
  window.addEventListener('load', () => {
    setTimeout(markPageReady, 12000);
  }, { once: true });
})();
