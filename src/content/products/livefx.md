---
title: LiveFx
description: 入学式PJで使用した、ライブパフォーマンス向けのインタラクティブシステム。
period: 2025年12月末～2026年4月
duration: 3ヶ月
kind: チーム開発
order: 1
thumbnail: ../../assets/products/LiveFx.png
thumbnailAlt: 入学式会場で、観客のペンライトが青や緑に光っている様子
deployUrl: https://siwlivefx.github.io/LiveFx-site/
deployLabel: 紹介ページ
repos:
  - label: GitHub
    url: https://github.com/SIWLiveFX/livefx-public
teamSize: 12
role: 2代目PM、認証機能の実装、インタラクティブ演出のバックエンド実装
technologies: [TypeScript, React, Express, Tailwind CSS, Docker, Kubernetes, AWS, Grafana, Prometheus, WebSocket]
---

## 背景・目的

入学式の在校生プレゼンテーションで使用するため、ライブで使われる無線制御ペンライトをスマートフォンで同じように光らせることができるシステムです。QRコードを読み込ませることで、様々な演出をコントロールすることができます。2026年度の新機能として、観客の操作に応じてリアルタイムでスクリーン画面が変化する機能を追加しました。

## 機能

- 表示画面切り替え機能
- 同期機能
- 複数の演出パターン
- インタラクティブ演出
