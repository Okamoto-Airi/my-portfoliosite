import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('[data-cursor-hover]');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        animate={{ scale: isHovering ? 1.6 : 1, rotate: isHovering ? 8 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <circle
          cx="20"
          cy="20"
          r="17"
          fill={isHovering ? '#FFB6C1' : 'transparent'}
          stroke="#FFB6C1"
          strokeWidth="2.5"
          opacity={isHovering ? 0.9 : 0.7}
        />
        {isHovering && (
          <>
            <circle cx="14" cy="17" r="1.6" fill="#333333" />
            <circle cx="26" cy="17" r="1.6" fill="#333333" />
            <path
              d="M13 23C15 27 18 28.5 20 28.5C22 28.5 25 27 27 23"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}
      </motion.svg>
    </motion.div>
  );
}
