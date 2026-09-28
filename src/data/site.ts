export const site = {
  name: "Airi's Portfolio",
  author: 'Okamoto Airi',
  url: 'https://okamoto-airi.github.io/my-portfoliosite/',
  description:
    'Okamoto Airi（IT専門学校3年・28卒）のポートフォリオ。Web技術を中心とした制作物、スキル、活動をまとめています。',
  tagline: '技術で人の役に立つエンジニアを目指して',
  status: 'IT専門学校 3年（28卒）',
  email: 'okamoto.airi.0123@gmail.com',
  github: 'https://github.com/Okamoto-Airi',
} as const;

export const nav = [
  { href: '/#about', label: 'About' },
  { href: '/#products', label: 'Products' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#activities', label: 'Activities' },
  { href: '/#contact', label: 'Contact' },
] as const;
