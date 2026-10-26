export type Level = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  /** 5段階の自己評価。資格など、段階を持たないものは省略 */
  level?: Level;
  /**
   * 作品の `technologies` と突き合わせるキーワード。
   * 一致した作品が「使った作品」として自動で表示される。
   */
  uses?: string[];
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: '言語',
    skills: [
      { name: 'HTML', level: 4 },
      { name: 'CSS', level: 4 },
      { name: 'JavaScript', level: 3 },
      { name: 'Python', level: 3, uses: ['Pygame', 'Flask'] },
      { name: 'SQL', level: 3, uses: ['SQLite'] },
      { name: 'TypeScript', level: 2, uses: ['TypeScript'] },
    ],
  },
  {
    title: 'フレームワーク',
    skills: [
      { name: 'Flask', level: 3, uses: ['Flask'] },
      { name: 'Node.js', level: 3, uses: ['Express'] },
      { name: 'React', level: 3, uses: ['React'] },
      { name: 'FastAPI', level: 2 },
    ],
  },
  {
    title: 'ツール',
    skills: [
      { name: 'Docker', level: 2, uses: ['Docker'] },
      { name: 'AWS', level: 2, uses: ['AWS'] },
      { name: 'Linux', level: 3 },
      { name: 'Git', level: 3 },
      { name: 'Raspberry Pi', level: 2 },
    ],
  },
  {
    title: '資格',
    skills: [{ name: 'ITパスポート' }, { name: '基本情報技術者試験' }],
  },
];

export const levelDescriptions: { level: Level; text: string }[] = [
  { level: 1, text: '触れたことがある' },
  { level: 2, text: '基礎的な知識がある' },
  { level: 3, text: '自力で実装ができる' },
  { level: 4, text: '実務レベルで使える' },
  { level: 5, text: '他人に教えられる/改善できる' },
];
