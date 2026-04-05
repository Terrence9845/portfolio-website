// ── Case Study Accordion ──────────────────────────────────────────
function toggleCase(header) {
  const body = header.nextElementSibling;
  const toggle = header.querySelector('.case-toggle');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  toggle.classList.toggle('open', !isOpen);
}

// ── Active nav link on scroll ─────────────────────────────────────
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function onScroll() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 80;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current
        ? 'var(--green)'
        : '';
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
