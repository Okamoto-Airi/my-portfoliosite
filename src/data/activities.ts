export interface Activity {
  date: string;
  title: string;
}

/** 古い順。追加するときは末尾に足す */
export const activities: Activity[] = [
  { date: '2024/09', title: '自動運転AIチャレンジ参加' },
  { date: '2024/11', title: 'ITパスポート合格' },
  { date: '2024/12', title: 'ドロカツ東日本大会オープン部門準優勝・電気通信大学スポンサー賞' },
  { date: '2025/04', title: 'ドロカツ全国大会出場' },
  { date: '2025/06', title: '基本情報技術者試験合格' },
  { date: '2025/08', title: '保育園シフトプロジェクト参加' },
  { date: '2025/11', title: '海外実学研修' },
  { date: '2025/12', title: '入学式プロジェクト参加' },
  { date: '2026/03', title: 'Track Job Beginner\'s Hackathon参加' },
  { date: '2026/05', title: '開発インターン・アルバイト開始' },
  { date: '2026/05', title: 'Progateハッカソン参加 (スタディスト賞)' },
  { date: '2026/07', title: '学内図書利用促進プロジェクト発足' },
  { date: '2026/08', title: '夏インターン3社参加' },
];
