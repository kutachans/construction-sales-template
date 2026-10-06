# 建設業向け営業サイト マスターテンプレート

Astro + TypeScript + SCSS の静的サイトです。第1号デモは「有限会社昭和防水工事」を想定した Web 制作提案用です。同社の公式サイトではありません。

## インストール・起動

Node.js 24 LTS 推奨（最低 22.12.0）、npm 9.6.5 以上。

```sh
npm ci
npm run dev -- --host 0.0.0.0
```

```sh
npm run check
npm run build
npm run preview -- --host 0.0.0.0
```

`check` は Astro と TypeScript の型チェック、`build` は静的ページ生成です。成果物は `dist/` です。自動テストスイートは未同梱です。バックエンドや秘密情報は不要です。

## 構成

- `src/data/company.ts`：会社固有情報、Hero、許可・特徴、サービス、実績、症状、法人向け対象例、デモ注意書き
- `src/components/`：Header → Hero → Trust → About → Services → Works → Problems → Corporate → Area → Company → ContactCTA → Footer
- `src/layouts/DemoLayout.astro`：共通メタ情報と `noindex,nofollow`
- `src/pages/index.astro`：セクションの組み立て
- `src/styles/global.scss`：紺色系配色とレスポンシブレイアウト

Process / FAQ と旧架空会社データは削除しています。施工写真は未設定で、実際の写真と混同しないプレースホルダーを表示します。

## 情報の取り扱い

会社名、所在地、事業種類、許可表記、かえで会館の工事情報は今回ユーザーから指定された情報です。このリポジトリに出典 URL は未収録で、独立した公開情報の照合は実施していません。提案前に最新の出典と表記を確認してください。未確認の電話・メール・営業時間は `null` です。保証、資格、施工件数、顧客の声、アフターケア、架空の実績は追加していません。法人向けの建物一覧は対象例であり、施工実績ではありません。

## 別会社への横展開

1. GitHub の Template repository を有効にして別リポジトリを作るか、複製してください。マスターに案件ごとの変更を上書きしない運用を推奨します。
2. `src/data/company.ts` の会社名、英語表記、住所、説明、対応エリア、注意書きを差し替えます。防水・塗装・屋根・外装・リフォーム業に応じて `services` と `problems` を編集します。
3. `trust` はその会社で確認できた情報だけに変更してください。未確認の許可・実績は引き継がないでください。`works` に確認済み実績を追加し、未掲載枠は `COMING SOON` のままにします。
4. 写真は使用権と内容を確認して `public/images/` に置き、`heroImage` または各実績の `image` に `{ src: '/images/file.jpg', alt: '写真の説明' }` を設定します。未設定時は `null` としてください。Hero は大きな写真を表示できる構成です。
5. `contact.phone`、`contact.email`、`businessHours` は確認できた場合のみ設定します。`null` の連絡先リンク・会社情報欄は表示しません。提案デモの ContactCTA は問い合わせ受付をしない旨を表示します。
6. 型チェック・ビルド後、PC・スマートフォン、ページ内リンク、画像、キーボード操作を確認します。

全ページで `DemoLayout` を使い、`<meta name="robots" content="noindex,nofollow">` と Footer の注意書きを維持してください。canonical・sitemap は生成しません。`noindex` はアクセス制限ではありません。公式サイトへ転用する場合は別途、情報の確定、連絡先、問い合わせ機能、SEO・公開設定を見直してください。

## 配色

Primary `#102A43` / Secondary `#334E68` / Accent `#4D7899` / Background `#F7F9FB` / Text `#1D252C` / Subtext `#667784` / White `#FFFFFF`。

## クラウド環境

既存の `/workspace/construction-sales-template` を使用します。タスクは隔離されているため追加の Git worktree は不要です。npm の既定キャッシュが書き込み不可の場合は `npm --cache /tmp/construction-npm-cache ci` を使用してください。Astro のユーザー設定ディレクトリが書き込み不可の場合は以下のように実行します。

```sh
export ASTRO_TELEMETRY_DISABLED=1
npm run check
npm run build
npm run dev -- --host 0.0.0.0
```

実行中のサーバーは新しいタスクへ引き継がれません。必要時に起動してください。
