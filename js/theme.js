(function setupSharedTheme() {
  const storageKey = 'cc101-theme';
  const legacyKeys = ['itc-portal-theme', 'itc-theme'];

  function readStoredTheme() {
    try {
      const stored = localStorage.getItem(storageKey)
        || legacyKeys.map(key => localStorage.getItem(key)).find(Boolean);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch (error) {
      return null;
    }
  }

  function savedTheme() {
    const stored = readStoredTheme();
    if (stored) return stored;
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function updateThemeControls(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      const icon = button.querySelector('.theme-toggle-icon');
      if (icon) icon.textContent = theme === 'dark' ? '\u2600' : '\u263e';
      button.title = theme === 'dark' ? 'Use light theme' : 'Use dark theme';
      button.setAttribute('aria-label', button.title);
    });

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#101417' : '#f2f6f5';
  }

  function applyTheme(theme, persist = false) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.documentElement.dataset.themeReady = 'true';
    if (persist) {
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch (error) {
        // Theme still applies when browser storage is unavailable.
      }
    }
    updateThemeControls(nextTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark', true);
  }

  window.toggleTheme = toggleTheme;
  window.applyTheme = applyTheme;
  applyTheme(savedTheme());

  document.addEventListener('DOMContentLoaded', () => {
    updateThemeControls(document.documentElement.getAttribute('data-theme') || 'dark');
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.addEventListener('click', toggleTheme);
    });
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey && (event.newValue === 'light' || event.newValue === 'dark')) {
      applyTheme(event.newValue);
    }
  });

  window.matchMedia?.('(prefers-color-scheme: light)').addEventListener?.('change', event => {
    if (!readStoredTheme()) applyTheme(event.matches ? 'light' : 'dark');
  });
})();
