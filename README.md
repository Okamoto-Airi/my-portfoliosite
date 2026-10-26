# my-portfoliosite

Okamoto Airi のポートフォリオサイト。Astro による静的サイトで、GitHub Pages に公開しています。

- 公開URL: https://okamoto-airi.github.io/my-portfoliosite/
- 技術: Astro / TypeScript / Tailwind CSS v4 / GitHub Actions / GitHub Pages
- クライアント側のフレームワーク（React など）は使っていません。動きは CSS と、小さな TypeScript で作っています。

## 開発

```bash
pnpm install
pnpm dev        # http://localhost:4321/my-portfoliosite/
pnpm build      # dist/ に静的ファイルを出力
pnpm preview    # ビルド結果を確認
pnpm check      # 型チェック
```

`main` ブランチに push すると、GitHub Actions が自動でビルドして公開します。

## 内容の更新

| やりたいこと | 編集するファイル |
| --- | --- |
| 作品を追加・修正する | `src/content/products/*.md`（1作品＝1ファイル） |
| スキルを追加・修正する | `src/data/skills.ts` |
| 活動（Activities）を追加する | `src/data/activities.ts` |
| 名前・メール・キャッチコピーを変える | `src/data/site.ts` |
| 色やフォントを変える | `src/styles/global.css` の `@theme` |

### 作品を追加する

1. サムネイル画像を `src/assets/products/` に置く
2. `src/content/products/` に Markdown ファイルを作る（既存のファイルをコピーすると早いです）
3. 先頭の `---` で囲んだ部分に情報を書き、その下に本文を書く

```md
---
title: 作品名
description: 一覧に出す1〜2行の説明
period: 2026年4月～2026年6月
duration: 2ヶ月
kind: チーム開発          # チーム開発 / 個人開発
order: 6                  # 小さい順に上から並ぶ（先頭2件は大きいカード）
thumbnail: ../../assets/products/xxx.png
thumbnailAlt: 画像の内容の説明
deployUrl: https://...    # 省略可
repos:                    # 省略可
  - label: GitHub
    url: https://github.com/...
teamSize: 4               # 省略可
role: 担当箇所            # 省略可
technologies: [TypeScript, React]
---

## 背景・目的
...

## 課題と工夫
...
```

`technologies` に書いた名前は、Skills セクションの「使った作品」と自動で結び付きます（`src/data/skills.ts` の `uses`）。

## 動きの場所

| 動き | ファイル |
| --- | --- |
| タイトルの1文字ずつの浮かび上がり、背景の漂い | `src/components/Hero.astro`（CSS のみ） |
| 舞う花びら（マウスで押しのけられる） | `src/scripts/petals.ts` |
| 作品カード → 詳細ページで、サムネイルが移動する | `ProductCard.astro` と `products/[id].astro` の `transition:name`（View Transitions） |
| カードの上で、光がカーソルに追従する | `src/scripts/glow.ts` と `ProductCard.astro` |
| スクロール量に連動する進捗バー、タイムラインの線 | `src/styles/global.css`、`Activities.astro`（CSS の `animation-timeline`） |

- 「動きを減らす」設定（`prefers-reduced-motion`）では、動きを止めるか、静止した表示にします。
- スクロール連動の動きは、対応していないブラウザでは何も動かず、通常表示になります。
- 動かしているのは `transform` と `opacity` だけです。
