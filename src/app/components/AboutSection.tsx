import { motion } from 'motion/react';
import { User, GraduationCap, Heart } from 'lucide-react';
import iconImage from '../../images/icon.jpg';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-[#F5FFFA]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFB6C1]">
            About me
          </h2>
          <div className="w-20 h-1 bg-[#FFB6C1] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#FFD6DC]"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img
                src={iconImage}
                alt="Okamoto Airi"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Profile Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-[#FFB6C1]" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold text-[#333333]">
                  Okamoto Airi
                </h3>
              </div>

              <div className="space-y-6 text-[#333333]">
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-[#7FFFD4] mt-1 flex-shrink-0" size={24} />
                  <p className="leading-relaxed">
                    4年制のIT専門学校に通っている学生です（3年 / 28卒）
                    <br />
                    Web技術を中心に幅広いIT分野を学んでいます。
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="text-[#FFB6C1] mt-1 flex-shrink-0" size={24} />
                  <div className="leading-relaxed">
                    <p className="mb-4">
                      私は、誰かが感じている「ちょっとした不満」や「不便さ」を技術で解決することで、人の役に立てるエンジニアになりたいと考えています。
                    </p>
                    <p className="mb-4">
                      日々の学習では、単に知識を増やすだけでなく、自分なりに手を動かしながら試行錯誤を重ねることを大切にしています。
                    </p>
                    <p>
                      将来は、ユーザーの気持ちに寄り添い、小さな課題にも丁寧に向き合えるエンジニアを目指しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
