import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** 一覧カードに出す1〜2行の説明 */
      description: z.string(),
      /** 表示用の期間。例: 2025年8月～2026年5月 */
      period: z.string(),
      /** 制作期間。例: 8ヶ月 */
      duration: z.string(),
      kind: z.enum(['チーム開発', '個人開発']),
      /** 小さい順に上から並ぶ */
      order: z.number(),
      thumbnail: image(),
      thumbnailAlt: z.string(),
      deployUrl: z.url().optional(),
      deployLabel: z.string().optional(),
      repos: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      /** リポジトリが非公開のとき true */
      repoPrivate: z.boolean().default(false),
      teamSize: z.number().optional(),
      /** 担当箇所 */
      role: z.string().optional(),
      technologies: z.array(z.string()),
    }),
});

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    /** タイムラインに出す年月。例: 2024/12 */
    date: z.string(),
    /** 小さい順に上から並ぶ（古い順）。同じ月の並びもこれで決める */
    order: z.number(),
    /** 詳細ページの冒頭と meta description に使う1〜2行の説明 */
    summary: z.string().optional(),
  }),
});

export const collections = { products, activities };
