import { useState } from 'react';
import { motion } from 'motion/react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ExternalLink, Github, Users, Calendar, Code } from 'lucide-react';
import shootingGameThumb from '../../images/products/shooting-game.png';
import mySiteThumb from '../../images/products/my-site.png';
import traceMasterThumb from '../../images/products/trace-master.png';
import liveFxThumb from '../../images/products/LiveFx.png';
import shiftAppThumb from '../../images/products/shift-app.png';

interface Product {
  id: number;
  name: string;
  description: string;
  date: string;
  type: 'チーム開発' | '個人開発';
  thumbnail: string;
  deployUrl?: string;
  deployLabel?: string;
  githubUrls?: ({ label: string; url: string } | '非公開')[];
  background: string;
  features: string;
  teamSize?: number;
  responsibilities?: string;
  technologies: string[];
  duration: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'シューティングゲーム',
    description: 'Pygameで作成した2Dシューティングゲーム。',
    date: '2025年7月～2025年8月',
    type: 'チーム開発',
    thumbnail: shootingGameThumb,
    deployUrl: 'https://okamoto-airi.github.io/pygame-site/',
    deployLabel: '公開サイト',
    githubUrls: [
      { label: 'Webサイト', url: 'https://github.com/Okamoto-Airi/pygame-site' },
      { label: 'レベル1', url: 'https://github.com/Okamoto-Airi/web-pygame_level1_PC' },
      { label: 'レベル2', url: 'https://github.com/Okamoto-Airi/web-pygame_level2-PC' },
      { label: 'レベル3', url: 'https://github.com/Okamoto-Airi/web-pygame_level3-PC' }
    ],
    background: 'チーム開発演習として、チームメンバー全員ができるPythonを使って2Dシューティングゲームを制作しました。',
    features: 'プレイヤーキャラクターの移動と攻撃、敵キャラクターの出現と行動パターン、スコアリングシステム、複数レベルの実装と難易度調整',
    teamSize: 5,
    responsibilities: 'ゲーム開発全般（設計・実装・テスト）',
    technologies: ['Pygame', 'Pygbag', 'GitHub Pages'],
    duration: '1.5ヶ月',
  },
  {
    id: 2,
    name: 'My Site',
    description: '自己紹介サイト',
    date: '2026年4月',
    type: '個人開発',
    thumbnail: mySiteThumb,
    deployUrl: 'https://okamoto-airi.github.io/my-portfoliosite/',
    deployLabel: '公開サイト',
    githubUrls: [{ label: 'GitHub', url: 'https://github.com/Okamoto-Airi/my-portfoliosite' }],
    background: 'React・TypeScript・Tailwind CSSの学習を兼ねて、自身のポートフォリオサイトを作成しました。',
    features: 'Product紹介、レスポンシブデザイン',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    duration: '1週間',
  },
  {
    id: 3,
    name: 'TraceMaster',
    description: '基本情報技術者試験科目B(アルゴリズム)の学習を支援するWebアプリケーション。',
    date: '2025年12月～2026年1月',
    type: 'チーム開発',
    thumbnail: traceMasterThumb,
    deployUrl: 'https://pear0123.pythonanywhere.com/',
    deployLabel: 'Webアプリ',
    githubUrls: [{ label: 'GitHub', url: 'https://github.com/Okamoto-Airi/fe_trace_app' }],
    background: '基本情報技術者試験のアルゴリズム分野の学習を支援するため、チームでWebアプリケーションを開発しました。',
    features: 'ログイン機能、レベル別トレース演習、学習履歴、称号機能',
    teamSize: 6,
    responsibilities: 'アプリ設計、プロトタイプ実装、バックエンド実装、デプロイ',
    technologies: ['Flask', 'Tailwind CSS', 'SQLite', 'PythonAnywhere'],
    duration: '2週間',
  },
  {
    id: 4,
    name: 'LiveFx',
    description: '入学式の在校生プレゼンテーションで使用した、ライブパフォーマンス向けのインタラクティブシステム。',
    date: '2025年12月末～2026年4月',
    type: 'チーム開発',
    thumbnail: liveFxThumb,
    deployUrl: 'https://siwlivefx.github.io/LiveFx-site/',
    deployLabel: '紹介ページ',
    githubUrls: ['非公開'],
    background: '入学式の在校生プレゼンテーションで使用するため、ライブで使われる無線制御ペンライトをスマートフォンで同じように光らせることができるシステムです。QRコードを読み込ませることで、様々な演出をコントロールすることができます。2026年度の新機能として、観客の操作に応じてリアルタイムでスクリーン画面が変化する機能を追加しました。',
    features: '表示画面切り替え機能、同期機能、複数の演出パターン、インタラクティブ演出',
    teamSize: 12,
    responsibilities: '2代目PM、認証機能の実装、インタラクティブ演出のバックエンド実装',
    technologies: ['TypeScript', 'React', 'Express', 'Tailwind CSS', 'Docker', 'Kubernetes', 'AWS', 'Grafana', 'prometheus', 'WebSocket'],
    duration: '3ヶ月',
  },
  {
    id: 5,
    name: '保育園シフト管理システム',
    description: '保育園のシフト作成を効率化するためのWebアプリケーション。',
    date: '2025年8月～2026年5月',
    type: 'チーム開発',
    thumbnail: shiftAppThumb,
    githubUrls: ['非公開'],
    background: '産学連携プロジェクトとして、保育園のシフト作成を効率化するためのWebアプリケーションを開発しました。ユーザーの希望シフトを収集し、スプレッドシートに自動で反映させることで、シフト作成の手間を大幅に削減します。要件定義から実装、運用保守までを担当し、現在も保育園で実際に使用されています。',
    features: '認証機能、希望シフト入力機能、スプレッドシート連携',
    teamSize: 9,
    responsibilities: 'バックエンド実装',
    technologies: ['GAS', 'スプレッドシート'],
    duration: '3ヶ月',
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-[#FFB6C1] group overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={`${product.name}のサムネイル`}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#333333]">{product.name}</h3>
                <p className="text-[#666666] mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#999999]">{product.date}</span>
                  <span className="px-3 py-1 bg-[#FFD6DC] text-[#333333] rounded-full">
                    {product.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Dialog.Root open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl max-w-3xl w-[90vw] max-h-[85vh] z-50 shadow-2xl overflow-hidden flex flex-col">
              <div className="flex justify-between items-start px-8 pt-8 pb-2 flex-shrink-0">
                <Dialog.Title className="text-3xl font-bold text-[#333333]">
                  {selectedProduct?.name}
                </Dialog.Title>
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
                      {selectedProduct.deployLabel ?? 'デプロイ先'}
                    </a>
                  )}
                  {selectedProduct?.githubUrls?.map((githubUrl, i) => (
                    <a
                      key={i}
                      href={githubUrl !== '非公開' ? githubUrl.url : undefined}
                      target={githubUrl !== '非公開' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 ${
                        githubUrl === '非公開'
                          ? 'bg-gray-300 text-[#666666] cursor-not-allowed'
                          : 'bg-[#333333] text-white hover:bg-[#555555]'
                      } rounded-full transition-colors`}
                    >
                      <Github size={18} />
                      {githubUrl === '非公開' ? '非公開' : githubUrl.label}
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

                {selectedProduct?.type === 'チーム開発' && selectedProduct.responsibilities && (
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#FFB6C1]">担当箇所</h4>
                    <p className="text-[#333333] leading-relaxed">{selectedProduct.responsibilities}</p>
                  </div>
                )}

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
