/**
 * Red de partículas del hero (evolución del canvas de la versión Angular).
 * - Densidad según el área (~1 punto cada 16.000 px²).
 * - Líneas entre puntos a 30–160 px con alpha según distancia.
 * - Interactiva con el mouse (punto que sigue al cursor).
 * - Se pausa fuera del viewport y con la pestaña oculta.
 * - Con prefers-reduced-motion se dibuja una sola vez (estática).
 */
interface P { x: number; y: number; vx: number; vy: number }

export function initParticles(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SPEED = 0.33;
  const AREA_PER_POINT = 16000;
  const MIN_D = 30;
  const MAX_D = 160;

  let w = 0;
  let h = 0;
  let dpr = 1;
  let points: P[] = [];
  let mouse: P | null = null;
  let raf = 0;
  let visible = true;

  const rand = (n: number) => Math.random() * n;
  const make = (): P => ({ x: rand(w), y: rand(h), vx: (Math.random() - 0.5) * SPEED, vy: (Math.random() - 0.5) * SPEED });

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(140, Math.round((w * h) / AREA_PER_POINT));
    points = Array.from({ length: count }, make);
  }

  function draw() {
    ctx!.clearRect(0, 0, w, h);
    const all = mouse ? [...points, mouse] : points;
    ctx!.lineWidth = 1;
    for (let i = 0; i < all.length; i++) {
      const a = all[i];
      for (let j = i + 1; j < all.length; j++) {
        const b = all[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < MIN_D || d > MAX_D) continue;
        ctx!.globalAlpha = (MAX_D - d) / 500;
        ctx!.strokeStyle = '#fff';
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }
    }
    ctx!.globalAlpha = 0.7;
    ctx!.fillStyle = '#fff';
    for (const p of points) {
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx!.fill();
    }
  }

  function step() {
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x > w + 20 || p.x < -20) p.vx *= -1;
      if (p.y > h + 20 || p.y < -20) p.vy *= -1;
    }
    draw();
    raf = requestAnimationFrame(step);
  }

  function start() {
    if (reduce || raf || !visible || document.hidden) return;
    raf = requestAnimationFrame(step);
  }
  function stop() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  resize();
  draw();
  start();

  let t: number | undefined;
  new ResizeObserver(() => {
    clearTimeout(t);
    t = window.setTimeout(() => {
      resize();
      draw();
    }, 200);
  }).observe(canvas);

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    visible ? start() : stop();
  }).observe(canvas);

  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  if (!reduce && window.matchMedia('(pointer: fine)').matches) {
    const host = canvas.parentElement ?? canvas;
    host.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top, vx: 0, vy: 0 };
    });
    host.addEventListener('pointerleave', () => (mouse = null));
  }
}
