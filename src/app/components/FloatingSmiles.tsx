import { motion } from 'motion/react';

const positions = [
  { top: '15%', left: '8%', size: 22, duration: 6, delay: 0 },
  { top: '65%', left: '5%', size: 14, duration: 7, delay: 1 },
  { top: '22%', left: '90%', size: 18, duration: 8, delay: 0.5 },
  { top: '72%', left: '88%', size: 26, duration: 6.5, delay: 1.5 },
  { top: '45%', left: '95%', size: 12, duration: 5.5, delay: 2 },
];

export function FloatingSmiles({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {positions.map((p, i) => (
        <motion.svg
          key={i}
          width={p.size}
          height={p.size}
          viewBox="0 0 40 40"
          className="absolute text-[#FFB6C1]"
          style={{ top: p.top, left: p.left }}
          animate={{ opacity: [0.15, 0.4, 0.15], y: [0, -14, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="14" cy="17" r="1.6" fill="currentColor" />
          <circle cx="26" cy="17" r="1.6" fill="currentColor" />
          <path
            d="M12 23C14 27 18 29 20 29C22 29 26 27 28 23"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>
      ))}
    </div>
  );
}
