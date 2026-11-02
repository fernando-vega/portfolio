/** Interacciones del hero: secuencia del ciclo de vida y tilt 3D de la tarjeta de la foto. */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initLifecycle(list: HTMLElement) {
  const steps = Array.from(list.querySelectorAll<HTMLElement>('[data-step]'));
  if (!steps.length) return;
  if (reduce) {
    steps.forEach((s) => s.classList.add('is-on'));
    return;
  }
  const STEP_MS = 350;
  const CYCLE_MS = 6000;
  let i = -1;
  let timer: number | undefined;
  let pinned: HTMLElement | null = null;

  const set = (el: HTMLElement | null) => steps.forEach((s) => s.classList.toggle('is-active', s === el));

  function tick() {
    if (pinned) return;
    i += 1;
    if (i < steps.length) {
      set(steps[i]);
      timer = window.setTimeout(tick, STEP_MS);
    } else {
      // deja "Arquitectura" encendida en la pausa, como en el diseño
      set(steps[2] ?? null);
      i = -1;
      timer = window.setTimeout(tick, CYCLE_MS - steps.length * STEP_MS);
    }
  }

  steps.forEach((s) => {
    s.addEventListener('pointerenter', () => {
      pinned = s;
      clearTimeout(timer);
      set(s);
    });
    s.addEventListener('pointerleave', () => {
      pinned = null;
      i = steps.indexOf(s);
      timer = window.setTimeout(tick, STEP_MS);
    });
  });

  timer = window.setTimeout(tick, 900);
}

export function initTilt(el: HTMLElement) {
  if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const max = 6;
  let raf = 0;
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      el.style.setProperty('--ry', `${(px * max * 2).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-py * max * 2).toFixed(2)}deg`);
    });
  });
  el.addEventListener('pointerleave', () => {
    cancelAnimationFrame(raf);
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  });
}
