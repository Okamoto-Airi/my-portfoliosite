import { useState } from 'react';
import { motion } from 'motion/react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ExternalLink, Github, Users, Calendar, Code } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  date: string;
  type: 'チーム開発' | '個人開発';
  thumbnail: string;
  deployUrl?: string;
  githubUrls: string[];
  background: string;
  features: string;
  teamSize?: number;
  responsibilities: string;
  technologies: string[];
  duration: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'サンプルプロジェクト1',
    description: 'Web技術を活用した学習支援アプリケーション',
    date: '2025年3月',
    type: 'チーム開発',
    thumbnail: '🎨',
    deployUrl: 'https://example.com',
    githubUrls: ['https://github.com/example/project1'],
    background: 'オンライン学習の効率化を目的として開発しました。',
    features: 'リアルタイムチャット、進捗管理、学習記録の可視化',
    teamSize: 4,
    responsibilities: 'フロントエンド開発（React）、UIデザイン',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    duration: '2ヶ月',
  },
  {
    id: 2,
    name: 'サンプルプロジェクト2',
    description: 'タスク管理をシンプルにするWebアプリ',
    date: '2025年1月',
    type: '個人開発',
    thumbnail: '📝',
    githubUrls: ['非公開'],
    background: '日々のタスク管理をもっと手軽にしたいという思いから開発しました。',
    features: 'ドラッグ&ドロップでタスクを整理、期限通知機能',
    responsibilities: '全体設計、実装、デプロイまで全て担当',
    technologies: ['React', 'Node.js', 'MongoDB'],
    duration: '3週間',
  },
  {
    id: 3,
    name: 'サンプルプロジェクト3',
    description: 'レスポンシブ対応のポートフォリオサイト',
    date: '2024年12月',
    type: '個人開発',
    thumbnail: '🌟',
    deployUrl: 'https://example.com/portfolio',
    githubUrls: ['https://github.com/example/portfolio'],
    background: '自己紹介と作品を効果的に見せるために制作しました。',
    features: 'スムーズなアニメーション、ダークモード対応',
    responsibilities: 'デザイン、コーディング、デプロイ',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    duration: '2週間',
  },
];

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 px-4 bg-[#F5FFFA]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFB6C1]">
            Products
          </h2>
          <div className="w-20 h-1 bg-[#FFB6C1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-[#FFB6C1] group"
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                {product.thumbnail}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#333333]">{product.name}</h3>
              <p className="text-[#666666] mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#999999]">{product.date}</span>
                <span className="px-3 py-1 bg-[#FFD6DC] text-[#333333] rounded-full">
                  {product.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Dialog.Root open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl max-w-3xl w-[90vw] max-h-[85vh] z-50 shadow-2xl overflow-hidden flex flex-col">
              <div className="flex justify-between items-start p-8 pb-4 flex-shrink-0">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{selectedProduct?.thumbnail}</span>
                  <Dialog.Title className="text-3xl font-bold text-[#333333]">
                    {selectedProduct?.name}
                  </Dialog.Title>
                </div>
                <Dialog.Close className="text-[#999999] hover:text-[#333333] transition-colors">
                  <X size={32} />
                </Dialog.Close>
              </div>

              <div className="space-y-6 px-8 pb-8 overflow-y-auto">
                <div className="flex flex-wrap gap-4">
                  {selectedProduct?.deployUrl && (
                    <a
                      href={selectedProduct.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FFFD4] text-[#333333] rounded-full hover:bg-[#6FEFCE] transition-colors"
                    >
                      <ExternalLink size={18} />
                      デプロイ先
                    </a>
                  )}
                  {selectedProduct?.githubUrls.map((url, i) => (
                    <a
                      key={i}
                      href={url !== '非公開' ? url : undefined}
                      target={url !== '非公開' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 ${
                        url === '非公開'
                          ? 'bg-gray-300 text-[#666666] cursor-not-allowed'
                          : 'bg-[#333333] text-white hover:bg-[#555555]'
                      } rounded-full transition-colors`}
                    >
                      <Github size={18} />
                      {url === '非公開' ? '非公開' : `GitHub ${i + 1}`}
                    </a>
                  ))}
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#FFB6C1] flex items-center gap-2">
                    <Calendar size={20} />
                    背景・目的
                  </h4>
                  <p className="text-[#333333] leading-relaxed">{selectedProduct?.background}</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#FFB6C1] flex items-center gap-2">
                    <Code size={20} />
                    機能
                  </h4>
                  <p className="text-[#333333] leading-relaxed">{selectedProduct?.features}</p>
                </div>

                {selectedProduct?.teamSize && (
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#FFB6C1] flex items-center gap-2">
                      <Users size={20} />
                      制作人数
                    </h4>
                    <p className="text-[#333333]">{selectedProduct.teamSize}名</p>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#FFB6C1]">担当箇所</h4>
                  <p className="text-[#333333] leading-relaxed">{selectedProduct?.responsibilities}</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#FFB6C1]">使用技術</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct?.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#FAFAD2] text-[#333333] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#FFB6C1]">制作期間</h4>
                  <p className="text-[#333333]">{selectedProduct?.duration}</p>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
