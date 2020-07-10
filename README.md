# React Hooks by TypeScript (firebase)

---

- 使用言語

  - React v16.13.1
  - React Script v3.4.1
  - TypeScript v3.7.5
  - Material-UI Core v4.11.0
  - Material-UI icons v4.9.1

- 使用機能
  - React Hook: usestatehook
  - TypeScript: TSX

---

1. 環境構築

- Create-react-app、型指定のインストール<br>
  以前に同上コマンド実行した場合は `npm uninstall -g create-react-app` を行ってください。

```
npx create-react-app my-app --template typescript
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

- WebPack ローカルインストールによるエラーが出る場合はディレクトリ直下に.env ファイルを設置<br>
  `SKIP_PREFLIGHT_CHECK=true` を記載してください。

2. マテリアル UI のインストール

- 本アプリではマテリアル UI を使用しております。<br>
  `npm install @material-ui/core` でのインストールが必要です。

3. アイコンインストール

- アイコンのインストールは下記コマンドです。
  `npm install @material-ui/icons`

4. React Router のインストール

- React Router のインストールは下記のコマンドとなります。
  `npm install react-router-dom`
  `npm install @types/react-router-dom`
