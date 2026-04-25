import { motion } from 'motion/react';

interface Activity {
  date: string;
  title: string;
}

const activities: Activity[] = [
  {
    date: '2024/09',
    title: '自動運転AIチャレンジ参加',
  },
  {
    date: '2024/11',
    title: 'ITパスポート合格',
  },
  {
    date: '2024/12',
    title: 'ドロカツ東日本大会オープン部門準優勝・電気通信大学スポンサー賞',
  },
  {
    date: '2025/04',
    title: 'ドロカツ全国大会出場',
  },
  {
    date: '2025/06',
    title: '基本情報技術者試験合格',
  },
  {
    date: '2025/08-2026/05',
    title: '保育園シフトプロジェクト参加',
  },
  {
    date: '2025/11',
    title: '海外実学研修',
  },
  {
    date: '2025/12-2026/04',
    title: '入学式プロジェクト参加',
  },
];

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 px-4 bg-[#F5FFFA]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFB6C1]">
            Activities
          </h2>
          <div className="w-20 h-1 bg-[#FFB6C1] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Continuous timeline line */}
          <div className="absolute left-[6px] top-0 bottom-0 w-0.5 bg-[#FFB6C1]" />

          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative flex items-start gap-4 mb-6"
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-[#FFB6C1] rounded-full mt-2 relative z-10" />
              </div>

              {/* Date and Title */}
              <div className="flex-1 pt-1 flex gap-4">
                <span className="text-[#FFB6C1] font-medium inline-block w-[160px] flex-shrink-0">
                  {activity.date}
                </span>
                <span className="text-[#333333] flex-1">{activity.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
