import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { ListItem } from './components/ListItem'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ListItem
        title="React Native は、Facebookが開発したクロスプラットフォームアプリ開発用フレームワークです。 ReactNative でアプリを作ることで、クロスプラットフォーム( iOS / Androidどちらでも動く)アプリを作ることができます。"
        subTitle="React Native Japan"
        imageURL="https://picsum.photos/200"
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
