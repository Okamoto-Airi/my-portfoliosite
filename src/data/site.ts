export const site = {
  name: "Airi's Portfolio",
  author: 'Okamoto Airi',
  url: 'https://okamoto-airi.github.io/my-portfoliosite/',
  description:
    'Okamoto Airiのポートフォリオ。これまでの制作物、スキル、活動をまとめています。',
  tagline: '技術で人の笑顔を創るエンジニアへ',
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
