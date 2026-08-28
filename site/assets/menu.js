// Fullscreen nav overlay — the site's only piece of state (one boolean).
(function () {
  var overlay = document.querySelector('.nav-overlay');
  if (!overlay) return;

  var openBtn = document.querySelector('.rail .hamburger');
  var closeBtn = overlay.querySelector('.close');

  function setOpen(open) {
    overlay.classList.toggle('open', open);
    overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (openBtn) openBtn.addEventListener('click', function () { setOpen(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) setOpen(false);
  });

  setOpen(false);
})();
