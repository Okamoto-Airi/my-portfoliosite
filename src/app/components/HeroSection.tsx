import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FloatingSmiles } from './FloatingSmiles';

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#F5FFFA]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFD6DC] blur-3xl opacity-60"
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#7FFFD4] blur-3xl opacity-30"
        animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <FloatingSmiles />

      <div className="relative z-10 text-center px-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#FFB6C1]">
            MyPortfolio
          </h1>
          <p className="text-2xl md:text-3xl text-[#333333] font-medium">
            - Airi's Products -
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto"
        >
          技術で人の笑顔を創るエンジニアへ
        </motion.p>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        onClick={scrollToAbout}
        data-cursor-hover
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 inline-flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#FFB6C1] hover:text-[#FF99A8] transition-colors cursor-pointer"
        >
          <ChevronDown size={48} />
        </motion.div>
      </motion.button>
    </section>
  );
}
