/**
 * Tarjetas que se superponen al hacer scroll.
 *
 * El hero y cada sección son `position: sticky`. Para que una sección más alta que la
 * pantalla se pueda leer completa antes de quedar fija, su `top` debe ser
 * `min(0, altoPantalla - altoSección)`: así se ancla cuando su borde inferior toca el
 * final de la pantalla, y la siguiente sección (con mayor z-index) sube y la tapa.
 *
 * Efecto secundario de sticky: una sección ya "pegada" parece estar arriba aunque esté
 * debajo de otras tarjetas, así que el navegador no se desplaza al saltar a su #ancla
 * (p. ej. "Volver arriba" solo subía unos píxeles). Por eso cada sección tiene un
 * marcador invisible no sticky que guarda su posición real, y los enlaces internos
 * se desplazan a ese marcador.
 */
const cards = Array.from(document.querySelectorAll<HTMLElement>('.hero, .sheet'));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function update() {
  const vh = window.innerHeight;
  for (const el of cards) {
    el.style.setProperty('--stick-top', `${Math.min(0, vh - el.offsetHeight)}px`);
  }
}

update();
const ro = new ResizeObserver(update);
cards.forEach((el) => ro.observe(el));
window.addEventListener('resize', update);

// ---------- Anclas internas ----------
const markers = new Map<string, { marker: HTMLElement; card: HTMLElement }>();
for (const card of cards) {
  if (!card.id) continue;
  const marker = document.createElement('div');
  marker.setAttribute('aria-hidden', 'true');
  marker.style.cssText = 'height:0;margin:0;padding:0;pointer-events:none;';
  card.before(marker);
  markers.set(card.id, { marker, card });
}

/** Posición real (sin el desplazamiento de sticky) donde empieza la sección. */
function naturalTop(id: string): number | null {
  const entry = markers.get(id);
  if (!entry) return null;
  const overlap = parseFloat(getComputedStyle(entry.card).marginTop) || 0; // margen negativo de la hoja
  return Math.max(0, entry.marker.getBoundingClientRect().top + window.scrollY + overlap);
}

function goTo(id: string, smooth: boolean) {
  const top = naturalTop(id);
  if (top === null) return false;
  window.scrollTo({ top, behavior: smooth && !reduceMotion.matches ? 'smooth' : 'auto' });
  const { card } = markers.get(id)!;
  if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '-1');
  card.focus({ preventScroll: true });
  return true;
}

document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (!link) return;
  const id = decodeURIComponent(link.hash.slice(1));
  if (!markers.has(id)) return;
  e.preventDefault();
  goTo(id, true);
  history.pushState(null, '', `#${id}`);
});

// Entrar con #ancla en la URL o navegar atrás/adelante entre anclas
const fromHash = () => {
  const id = decodeURIComponent(location.hash.slice(1));
  if (id) goTo(id, false);
};
window.addEventListener('popstate', fromHash);
if (location.hash) requestAnimationFrame(fromHash);
