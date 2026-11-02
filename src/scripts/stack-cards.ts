/**
 * Tarjetas que se superponen al hacer scroll.
 *
 * El hero y cada sección son `position: sticky`. Para que una sección más alta que la
 * pantalla se pueda leer completa antes de quedar fija, su `top` debe ser
 * `min(0, altoPantalla - altoSección)`: así se ancla cuando su borde inferior toca el
 * final de la pantalla, y la siguiente sección (con mayor z-index) sube y la tapa.
 */
const cards = Array.from(document.querySelectorAll<HTMLElement>('.hero, .sheet'));

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
