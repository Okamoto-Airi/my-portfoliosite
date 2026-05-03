import { motion } from 'motion/react';
import { Mail, Github} from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-4 bg-[#F5FFFA]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFB6C1]">
            Contact
          </h2>
          <div className="w-20 h-1 bg-[#FFB6C1] mx-auto rounded-full mb-8" />

          <p className="text-xl md:text-2xl text-[#333333] font-medium mb-2">
            ご覧いただきありがとうございました
          </p>
          <p className="text-lg text-[#666666] mb-8">
            Thank you for your time and interest!
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:okamoto.airi.0123@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-[#FFB6C1] text-[#333333] hover:bg-[#FFD6DC]"
            >
              <Mail size={20} />
              <span className="font-medium">Email</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Okamoto-Airi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-[#333333] text-[#333333] hover:bg-gray-100"
            >
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t-2 border-white/50"
        >
          <p className="text-lg font-medium text-[#333333] mb-2 flex items-center justify-center gap-2">
            MyPortfolio - Airi's Products -
          </p>
          <p className="text-sm text-[#666666]">
            © 2026 Okamoto Airi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
