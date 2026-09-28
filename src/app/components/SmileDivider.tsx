import { motion } from 'motion/react';

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const mouthVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

export function SmileDivider({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      width="64"
      height="28"
      viewBox="0 0 64 28"
      fill="none"
      className={`mx-auto text-[#FFB6C1] ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-hidden="true"
    >
      <motion.circle
        cx="14"
        cy="10"
        r="2.2"
        fill="currentColor"
        variants={dotVariants}
        transition={{ delay: 0.5, duration: 0.3 }}
      />
      <motion.circle
        cx="50"
        cy="10"
        r="2.2"
        fill="currentColor"
        variants={dotVariants}
        transition={{ delay: 0.6, duration: 0.3 }}
      />
      <motion.path
        d="M8 16C14 25 22 27 32 27C42 27 50 25 56 16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        variants={mouthVariants}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
}
