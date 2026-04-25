import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

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
      <div className="relative z-10 text-center px-4 space-y-8">
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
          技術で人の役に立つエンジニアを目指して
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToAbout}
          className="mt-8 inline-flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#FFB6C1] hover:text-[#FF99A8] transition-colors cursor-pointer"
          >
            <ChevronDown size={48} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
