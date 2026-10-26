// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages（https://okamoto-airi.github.io/my-portfoliosite/）向けの設定
export default defineConfig({
  site: 'https://okamoto-airi.github.io',
  base: '/my-portfoliosite',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
