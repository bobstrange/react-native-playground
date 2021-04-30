# React Native V2

Frontend master の [React Native V2](https://kadikraman.github.io/react-native-v2) の写経

## 環境構築 (Ubuntu)

[参考](https://reactnative.dev/docs/environment-setup)

Android のエミュレータが動作するようにする。

1. JDK のインストール
    - `sudo apt update && sudo apt install default-jdk` でインストール
    - `javac --version` で、 JDK がインストールされたことを確認
    - [参考](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-20-04-ja)
2. Android Studio のインストール
    - [こちら](https://developer.android.com/studio/index.html) tar.gz をダウンロード
    - `tar xzvf <downloaded-file>` で、解凍
    - 解凍されたフォルダを `/usr/local` 配下に移動
        - `sudo mv android-studio /usr/local`
    - インストールスクリプトを実行 `/usr/local/android-studio/bin/studio.sh`
        - 特にこだわりが無ければ、Standard の設定で
    - VM アクセラレーションを設定する
        - [こちら](https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux) の手順で、 `/dev/kvm exists` と出たらOK
        - 入っていない場合は、[こちら](https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux) にあるとおり
            - `sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils ia32-libs-multiarch` で、インストールする
3. Android SDK のインストール
    - Android Studio は、デフォルトで最新の Android SDK をインストールするが、 React Native の Native Code の開発には、 `Android 10 (Q)` SDK が必要なので、個別でインストールする
    - Configure -> SDK Manager を選択
    - 開いた設定画面で、SDK Platforms タブを選択
    - 右下の `Show Package Detail` チェックボックスにチェックを入れる
    - Android 10.0 (Q) のエントリーで、↓にチェックが入っている
        - `Android SDK Platform 29`
        - `Intel x86 Atom_64 System Image`
    - SDK Tools タブを選択
    - 右下の `Show Package Detail` チェックボックスにチェックを入れる
    - Android SDK Build-Tools エントリで、29.0.2 がチェックされている
    - 最後に、 Apply を押すと、ダウンロードとインストールが開始される
4. エミュレータのインストール
    - [参考](https://docs.expo.io/workflow/android-studio-emulator/)
    - `/dev/kvm` の permission が無いというエラーが出ているので、直す
        - [参考](https://efficientcoder.net/dev-kvm-not-found-device-permission-denied-errors-linux-ubuntu-20-04-19-04/#:~:text=Solving%20%2Fdev%2Fkvm%20device%20permission%20denied%20Error&text=you%20need%20to%20install%20qemu,username%20to%20the%20kvm%20group.&text=If%20your%20user%20name%20is,start%20using%20your%20Android%20emulator.)
        - `qemu-kvm` をインストール `sudo apt install qemu-kvm`
        - 自分のユーザを kvm グループに追加 `sudo adduser $USER kvm`
        - システム再起動で、エラーが解消されている
5. エミュレータでの起動
    - `yarn start` して、 `a` でエミュレータ上で起動する

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

## Debug

[参考](https://kadikraman.github.io/react-native-v2/debugging)

Debug Menu の表示 `Ctrl - M` (Win/Linux) `Cmd - M` (Mac)

### Debug Menu でできること

- Reload
- Enable/Disable Hot reload
- Element inspector
- Debug

## Memo

- Text は全て `<Text>` タグで囲まれていないとエラーになる
- `<SafeAreaView>` を使うことで、画面上部や、画面下部に表示されるシステム用などの領域に、Overlap しないようにできる
- 1 つの Component に複数の style を適用する場合は、`style` に配列を渡す
  - `<View style={[styles.firstStyle, styles.secondStyle]} />`

## List Rendering

[参考](https://kadikraman.github.io/react-native-v2/lists)

### Flat List

基本的には以下 3 つのプロパティを設定すれば良い

- `data`
  - リストに表示したい項目の配列
- `renderItem`
  - リストの 1 要素にレンダリングしたい内容
- `keyExtractor`
  - リストの各要素を区別するためのキー
  - リストレンダリングでは、要素の再利用があるため、要素の中身にレンダリングされる内容を区別するためのキーが必要

### List Props

- `ListEmptyComponent`
  - `data` が空配列 or undefined のときにレンダリングされる
  - List の data の Loading 中などを表現するのに使える
- `extraData`
  - List の再レンダリングを制御するためのマーカー
  - `data` が変更されたときには、List は自動的に再レンダリングされるが、Header, Footer など、`data` 以外のプロパティによって制御されている箇所を、再レンダリングさせたいときに使用する
- `onEndReached`
  - Pagination などを実装するためにある

## Pull to Refresh

https://kadikraman.github.io/react-native-v2/pull-to-refresh

`FlatList` の `refreshing` attribute と `onRefresh` attribute を設定すれば良い

```tsx
const [data, setData] = useState([])
const [isRefresh, setIsRefresh] = useState(false)

const handleFetchData = useCallback(async () => {
  const res = await fetch('https://xxx.yyy.zzz/data')
  if (res.ok) {
    setData(await res.json())
  }
}, [])

const handleRefresh = useCallback(async () => {
  setIsRefresh(true)
  await handleFetchData()
  setIsRefresh(false)
}, [])

<FlatList
  refreshing={isRefresh}
  onRefresh={handleRefresh}
/>
```
