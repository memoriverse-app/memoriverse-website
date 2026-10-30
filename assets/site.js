/* Progressive enhancement only: native scrolling and all content work without JS. */
(() => {
  const sections = [...document.querySelectorAll('[data-reveal]')];
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || preference.matches) return;

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.remove('reveal-pending');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08 });

  for (const section of sections) {
    if (section.getBoundingClientRect().top < window.innerHeight) continue;
    section.classList.add('reveal-pending');
    observer.observe(section);
  }
  // Reveal destinations immediately for keyboard and direct anchor navigation.
  const revealTarget = () => {
    let destination;
    if (!window.location.hash) return;
    try { destination = document.querySelector(window.location.hash); }
    catch { return; }
    if (!destination) return;
    destination.classList.remove('reveal-pending');
    destination.querySelectorAll('.reveal-pending').forEach(el => el.classList.remove('reveal-pending'));
  };
  window.addEventListener('hashchange', revealTarget);
  revealTarget();
  const stopMotion = () => {
    if (!preference.matches) return;
    observer.disconnect();
    sections.forEach(section => section.classList.remove('reveal-pending'));
  };
  preference.addEventListener('change', stopMotion);
})();
