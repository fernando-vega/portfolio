/**
 * Respaldo para navegadores sin scroll-driven animations (animation-timeline: view()).
 * Añade .is-in a hojas y elementos [data-reveal] cuando entran al viewport.
 */
const supportsTimeline = CSS.supports('animation-timeline: view()');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!supportsTimeline && !reduceMotion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );
  document.querySelectorAll('.sheet, [data-reveal], [data-card]').forEach((el) => io.observe(el));
}
