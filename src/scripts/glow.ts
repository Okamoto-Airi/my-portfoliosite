/**
 * カードの上でマウスを動かすと、光がカーソルに追従する。
 * マウスなどの精密なポインターがあり、「動きを減らす」設定でないときだけ有効。
 */
export function initGlow(selector = '[data-glow]') {
  const enabled =
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!enabled) return;

  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    let raf = 0;

    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
        el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
      });
    });

    el.addEventListener('pointerleave', () => {
      // 位置はそのまま残し、最後にいた場所からフェードアウトさせる（中央へ戻さない）
      cancelAnimationFrame(raf);
    });
  });
}
