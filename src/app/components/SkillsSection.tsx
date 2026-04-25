import { motion } from 'motion/react';

interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: '言語',
    skills: [
      { name: 'Python', level: 3 },
      { name: 'HTML', level: 4 },
      { name: 'CSS', level: 4 },
      { name: 'JavaScript', level: 3 },
      { name: 'SQL', level: 3 },
      { name: 'TypeScript', level: 3 },
    ],
  },
  {
    title: 'フレームワーク',
    skills: [
      { name: 'Flask', level: 3 },
      { name: 'Node.js', level: 3 },
      { name: 'React', level: 3 },
      { name: 'FastAPI', level: 2 },
    ],
  },
  {
    title: 'ツール',
    skills: [
      { name: 'Docker', level: 2 },
      { name: 'AWS', level: 2 },
      { name: 'Linux', level: 3 },
      { name: 'Raspberry Pi', level: 3 },
      { name: 'Git', level: 3 },
      { name: 'MySQL', level: 3 },
      { name: 'SO-101', level: 2 },
    ],
  },
  {
    title: '資格',
    skills: [
      { name: 'ITパスポート', level: 5 },
      { name: '基本情報技術者試験', level: 5 },
    ],
  },
];

const levelDescriptions = [
  { level: 1, text: '触れたことがある' },
  { level: 2, text: '基礎的な知識がある' },
  { level: 3, text: '自力で実装ができる' },
  { level: 4, text: '実務レベルで使える' },
  { level: 5, text: '他人に教えられる/改善できる' },
];

function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= level ? 'opacity-100' : 'opacity-20'}>
          🌸
        </span>
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-[#F5FFFA]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFB6C1]">
            Skills
          </h2>
          <div className="w-20 h-1 bg-[#FFB6C1] mx-auto rounded-full mb-8" />

          {/* Level descriptions */}
          <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto border-2 border-[#FFD6DC] mb-12">
            <h3 className="font-bold text-lg mb-4 text-[#333333]">評価基準</h3>
            <div className="space-y-2 text-left">
              {levelDescriptions.map((desc) => (
                <div key={desc.level} className="flex items-center gap-3">
                  <SkillLevel level={desc.level} />
                  <span className="text-[#666666]">{desc.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FFD6DC]"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#FFB6C1]">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-[#333333] font-medium">{skill.name}</span>
                    <SkillLevel level={skill.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
