import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SmileMark } from './SmileMark';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5FFFA]"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center text-[#FFB6C1]"
        >
          <SmileMark size={48} animate />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#FFB6C1]">
          Airi's Portfolio
        </h1>

        <div className="w-64 mx-auto space-y-4">
          <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-[#FFB6C1] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-2xl font-medium text-[#FFB6C1]">{progress}%</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
