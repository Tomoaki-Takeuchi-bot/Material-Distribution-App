## -簡易画像配布アプリ-

## hai-fu-

## _(React Hooks, TypeScript, Firebase)_

---

## ![lQR5DM6oK9FcomUS2Gjj1594429691-1594429794](https://user-images.githubusercontent.com/61924934/87213405-aec9ed80-c35f-11ea-96b3-815b520eb13f.gif)

- アプリ内容

  Firebase 上の写真またはデータ素材をダウンロードする簡易サイト<br> \*本アプリは技術検証用ですのでローカル環境での動作用です。

---

- 目的

  - ReactHook の利用
  - TypeScript（TSX）での作成具合の検証
  - mBaaS の Firebase の利用検証

- 使用言語,環境

  - React v16.13.1
  - React Script v3.4.1
  - TypeScript v3.7.5
  - Node v14.5.0
  - Yarn v1.22.4
  - Material-UI Core v4.11.0
  - Material-UI icons v4.9.1
  - Editor VSCode v1.46.1

- 使用機能

  - React Hooks: usestate,useEffect
  - TypeScript: TSX
  - Firebase: DB

---

1. 環境構築

- Create-react-app、型指定のインストール<br>
  以前に同上コマンド実行した場合は `npm uninstall -g create-react-app` を行ってください。

```
npx create-react-app my-app --template typescript
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

- WebPack ローカルインストールされている、またはその他エラーが出る場合は<br>
  ディレクトリ直下に.env ファイルを設置<br>
  `SKIP_PREFLIGHT_CHECK=true` を記載してください。<br>
  上記は実行する前に公式サイトの確認をお願いします。<br>

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

5. Firebase インストール
   `npm install --save firebase`

---

### 参考サイト

[create-react-app]https://create-react-app.dev/docs/adding-typescript/<br>
[ステートフックの利用]https://ja.reactjs.org/docs/hooks-state.html<br>
[Firebase]https://firebase.google.com/?hl=ja

---
