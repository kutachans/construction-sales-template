# 建設業向け営業サイト マスターテンプレート

Astro + TypeScript + SCSS の静的サイトです。防水工事会社向けのサンプルを同梱し、会社情報・サービス・施工事例を差し替えて横展開できます。JavaScript に依存しないナビゲーションと FAQ を採用しています。

## インストール・起動

Node.js 24 LTS 推奨（最低 22.12.0）、npm 9.6.5 以上を使用します。

```sh
cd construction-sales-template
npm install
npm run dev -- --host 0.0.0.0
```

通常のローカル開発では開発サーバーの案内に従って表示します。ロックファイルから再現する場合や CI では `npm ci` を使用してください。

```sh
npm run check
npm run build
npm run preview -- --host 0.0.0.0
```

`check` は Astro と TypeScript の型チェック、`build` は静的ページの生成です。成果物は `dist/` に出力されます。自動テストスイートは未同梱です。公開先を設定してビルドする例：

```sh
SITE_URL=https://www.your-company.jp npm run build
```

`SITE_URL` は canonical と Open Graph の URL に使われます。未指定時は `https://example.com` です。秘密情報は不要です。お問い合わせは電話・メールのリンク方式で、フォーム送信サーバーはありません。

## ファイル構成

- `src/data/company.ts`：型定義、会社情報、連絡先、サービス、強み、施工事例、工事の流れ、FAQ
- `src/components/`：Header / Hero / Services / Strengths / Projects / Process / Faq / About / Contact / Footer
- `src/pages/index.astro`：ページ構成、タイトル、SEO メタ情報
- `src/styles/global.scss`：色、余白、レスポンシブレイアウト
- `public/images/`：同梱のオリジナル SVG イラスト（実際の施工写真ではありません）
- `astro.config.mjs`：静的出力とサイト URL

## 別会社への横展開

1. GitHub の設定で Template repository を有効化し、Use this template から別リポジトリを作成するか、本リポジトリを複製します。案件ごとの会社情報をマスターへ上書きしない運用を推奨します。
2. `src/data/company.ts` の全項目を実際の会社情報に変更します。`contact.phone` は表示用電話番号、`contact.email` はメールアドレスです。`null` の項目はリンクを表示しません。
3. サービス・対応エリア・施工事例・FAQ・営業時間を確認します。強みやアフターケアの文章も実際の提供範囲に合わせてください。施工事例の画像を `public/images/` に追加し、`image` と `alt` を更新します。
4. サンプル表記を取り除きます。`About.astro` の会社名に付く「サンプル」、`Projects.astro` の説明、データ内のサンプル文言を確認してください。未提供の実績・保証・資格を掲載しないでください。
5. `Header.astro` のブランドマーク、`public/favicon.svg`、`global.scss` の色を変更します。業種に合わせて `index.astro` のタイトルも変更します。フォントは端末の日本語フォントを使い、外部フォントの通信はありません。
6. 公開先の `SITE_URL` を設定し、型チェック・ビルドを実行します。スマートフォン表示、キーボード操作、FAQ、電話・メールのリンク、画像代替テキストを確認します。
7. `dist/` を静的ホスティングへ配置します。公開やホスティング設定はこの初期構成には含みません。

## クラウド開発

既存の `/workspace/construction-sales-template` を使用してください。各タスクは隔離されているため、追加の Git worktree は不要です。npm の既定キャッシュが書き込み不可の場合は `npm --cache /tmp/construction-npm-cache ci` を使用できます。Astro のユーザー設定ディレクトリが書き込み不可の場合は、各 Astro コマンドに `ASTRO_TELEMETRY_DISABLED=1` を付けて実行してください。実行中の開発サーバーは新しいタスクへ引き継がれないため、必要なときに起動してください。
