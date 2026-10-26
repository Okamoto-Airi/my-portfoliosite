/**
 * ヒーローに舞う桜の花びら（Canvas 2D）。
 * - 画面外・タブが裏のときは止まる
 * - 「動きを減らす」設定のときは、静止した1フレームだけ描く
 * - マウスの近くの花びらはふわっと押しのけられる
 * 戻り値の関数を呼ぶと後片付け（イベント解除・アニメ停止）ができる。
 */

interface Petal {
  x: number;
  y: number;
  size: number;
  rot: number;
  spin: number;
  fall: number;
  sway: number;
  phase: number;
  flip: number;
  color: string;
  alpha: number;
  pushX: number;
  pushY: number;
}

const COLORS = ['#ffb6c1', '#ffc9d3', '#ffd6dc', '#ff9fb0'];

export function startPetals(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const host = canvas.parentElement ?? canvas;

  let width = 0;
  let height = 0;
  let petals: Petal[] = [];
  let raf = 0;
  let running = false;
  let last = 0;
  const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, t: 0 };

  const rand = (min: number, max: number) => min + Math.random() * (max - min);

  const createPetal = (scatter: boolean): Petal => ({
    x: rand(0, width),
    y: scatter ? rand(0, height) : rand(-40, -10),
    size: rand(7, 15),
    rot: rand(0, Math.PI * 2),
    spin: rand(-0.8, 0.8),
    fall: rand(22, 48),
    sway: rand(14, 34),
    phase: rand(0, Math.PI * 2),
    flip: rand(0.6, 1.6),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: rand(0.55, 0.95),
    pushX: 0,
    pushY: 0,
  });

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = host.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

    const target = Math.max(12, Math.min(34, Math.round(width / 55)));
    while (petals.length < target) petals.push(createPetal(true));
    petals.length = target;
    if (reduceMotion) draw();
  }

  function drawPetal(p: Petal, time: number) {
    const c = ctx!;
    const s = p.size;
    // 花びらがひらひら裏返るように、縦方向のスケールを揺らす
    const flutter = 0.35 + Math.abs(Math.sin(time * p.flip + p.phase)) * 0.65;
    c.save();
    c.translate(p.x, p.y);
    c.rotate(p.rot);
    c.scale(1, flutter);
    c.globalAlpha = p.alpha;
    c.fillStyle = p.color;
    c.beginPath();
    c.moveTo(0, s);
    c.bezierCurveTo(-s * 0.95, s * 0.3, -s * 0.85, -s * 0.9, -s * 0.12, -s);
    c.quadraticCurveTo(0, -s * 0.72, s * 0.12, -s);
    c.bezierCurveTo(s * 0.85, -s * 0.9, s * 0.95, s * 0.3, 0, s);
    c.fill();
    c.restore();
  }

  function draw(time = 0) {
    ctx!.clearRect(0, 0, width, height);
    for (const p of petals) drawPetal(p, time);
  }

  function frame(now: number) {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const time = now / 1000;

    for (const p of petals) {
      // マウスの近くは押しのける
      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120 && dist > 0.1) {
        const force = (1 - dist / 120) * 1.4;
        p.pushX += (dx / dist) * force + pointer.vx * 0.02;
        p.pushY += (dy / dist) * force + pointer.vy * 0.02;
      }
      p.pushX *= 0.93;
      p.pushY *= 0.93;

      p.y += (p.fall + p.pushY * 30) * dt;
      p.x += (Math.sin(time * 0.9 + p.phase) * p.sway + p.pushX * 30) * dt;
      p.rot += p.spin * dt;

      if (p.y > height + 30 || p.x < -60 || p.x > width + 60) {
        Object.assign(p, createPetal(false));
      }
    }
    pointer.vx *= 0.8;
    pointer.vy *= 0.8;

    draw(time);
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduceMotion || document.hidden) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  const onPointerMove = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const now = performance.now();
    const dt = Math.max(now - pointer.t, 1);
    pointer.vx = ((x - pointer.x) / dt) * 16;
    pointer.vy = ((y - pointer.y) / dt) * 16;
    pointer.x = x;
    pointer.y = y;
    pointer.t = now;
  };
  const onPointerLeave = () => {
    pointer.x = pointer.y = -9999;
  };
  const onVisibility = () => (document.hidden ? stop() : visible && start());

  let visible = true;
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? start() : stop();
  });
  const ro = new ResizeObserver(resize);

  resize();
  io.observe(host);
  ro.observe(host);
  host.addEventListener('pointermove', onPointerMove);
  host.addEventListener('pointerleave', onPointerLeave);
  document.addEventListener('visibilitychange', onVisibility);
  start();

  return () => {
    stop();
    io.disconnect();
    ro.disconnect();
    host.removeEventListener('pointermove', onPointerMove);
    host.removeEventListener('pointerleave', onPointerLeave);
    document.removeEventListener('visibilitychange', onVisibility);
  };
}
