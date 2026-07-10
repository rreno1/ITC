// Browser controls can only discourage copying; they cannot prevent screenshots or source inspection.
(function protectCourseContent() {
  const blockedKeys = new Set(['a', 'c', 'p', 's', 'u', 'v', 'x']);
  let lastNoticeAt = 0;

  function showProtectionNotice() {
    const now = Date.now();
    if (now - lastNoticeAt < 1200) return;
    lastNoticeAt = now;

    if (typeof showToast === 'function') {
      showToast('Copying course content is disabled.', 'info');
    }
  }

  function blockEvent(event, notify = false) {
    event.preventDefault();
    event.stopPropagation();
    if (notify) showProtectionNotice();
  }

  ['copy', 'cut', 'paste'].forEach(type => {
    document.addEventListener(type, event => blockEvent(event, true), true);
  });

  ['contextmenu', 'dragstart'].forEach(type => {
    document.addEventListener(type, event => blockEvent(event, type === 'contextmenu'), true);
  });

  document.addEventListener('selectstart', event => blockEvent(event), true);

  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    const modifierPressed = event.ctrlKey || event.metaKey;
    const inspectShortcut = modifierPressed && event.shiftKey && ['c', 'i', 'j'].includes(key);

    if ((modifierPressed && blockedKeys.has(key)) || inspectShortcut || event.key === 'F12') {
      blockEvent(event, true);
    }
  }, true);
})();
