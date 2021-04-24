# React Native V2

Frontend master の [React Native V2](https://kadikraman.github.io/react-native-v2) の写経

## Lint 追加

[参考](https://kadikraman.github.io/react-native-v2)

```bash
npx eslint --init
```

対話型に ESLint の設定を聞かれるので、↓のようにする

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · node
✔ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now with npm? · No

※ TypeScript 関連の依存関係は、`yarn` で入れたいので一旦 No

```bash
yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
```

ESLint は、コミュニティがメンテしている設定があるみたい `@react-native-community/eslint-config` なので、それを入れる

```bash
yarn add @react-native-community/eslint-config -D
```

prettier 周りも入れる

```bash
yarn add prettier eslint-config-prettier -D
```

依存関係のインストール後、[.eslintrc.js](./.eslintrc.js) と [.prettierrc.js](./.prettierrc.js) を編集
