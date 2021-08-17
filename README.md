# ABOUT

[EarthquakeInfomation](https://nemutas.github.io/app-earthquake-info/)<br>
<br>
このアプリケーションは、[気象庁](https://www.jma.go.jp/jma/index.html)から提供されている地震情報の API をもとに作成しました。<br>
表示される地震情報は、過去 1 ヵ月間です。<br>

![無題2](https://user-images.githubusercontent.com/46724121/126518608-f7537dfd-8feb-436d-8045-4a32bb73dab5.png)

# Technology

- React（w/ typescript）を使用して作成しています
- UI は、[Material UI](https://material-ui.com/getting-started/installation/)を使用しています
- レスポンシブデザインに対応しています
- 状態管理は、[Redux toolkit](https://redux-toolkit.js.org/)を使用しています
- ライト/ダークモード設定は、[Redux persist](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist)を使用して localStrage に保存しています
- [PWA](https://qiita.com/nemutas/items/8b7d22d4e44d659ef4eb)に対応しています

# Clone

github ページからダウンロードまたは、以下のコマンドで Clone を作成します。

```
gh repo clone nemutas/earthquake_info
```

プロジェクトフォルダで以下を実行します。

```
npm install
```
