import { motion } from 'motion/react';

interface SmileMarkProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const mouthVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

export function SmileMark({ size = 32, className = '', animate = false }: SmileMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" />
      <motion.circle
        cx="14"
        cy="17"
        r="1.8"
        fill="currentColor"
        initial={animate ? 'hidden' : false}
        animate={animate ? 'visible' : undefined}
        variants={dotVariants}
        transition={{ delay: 0.6, duration: 0.3 }}
      />
      <motion.circle
        cx="26"
        cy="17"
        r="1.8"
        fill="currentColor"
        initial={animate ? 'hidden' : false}
        animate={animate ? 'visible' : undefined}
        variants={dotVariants}
        transition={{ delay: 0.7, duration: 0.3 }}
      />
      <motion.path
        d="M12 24C14 28 18 30 20 30C22 30 26 28 28 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={animate ? 'hidden' : false}
        animate={animate ? 'visible' : undefined}
        variants={mouthVariants}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
      />
    </svg>
  );
}
