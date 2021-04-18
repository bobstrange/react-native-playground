import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { ListItem } from './components/ListItem'

const ARTICLES = [
  {
    urlToImage: 'https://picsum.photos/200',
    title:
      'React Native は、Facebookが開発したクロスプラットフォームアプリ開発用フレームワークです。 ReactNative でアプリを作ることで、クロスプラットフォーム( iOS / Androidどちらでも動く)アプリを作ることができます。',
    author: 'Techニュース',
  },
  {
    urlToImage: 'https://picsum.photos/201',
    title:
      'React Native Japan コミュニティは、日本でのReact Nativeの普及のため、活動を行っているコミュニティです。',
    author: 'React Native Japan',
  },
  {
    urlToImage: 'https://picsum.photos/203',
    title:
      'JavaScriptはプロトタイプベースのオブジェクト指向スクリプト言語であるが、クラスなどのクラスベースに見られる機能も取り込んでいます。',
    author: 'JavaScriptFan',
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={ARTICLES}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.author}
            imageURL={item.urlToImage}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
