import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { ListItem } from './components/ListItem'
import axios from 'axios'

type Article = {
  urlToImage: string
  title: string
  author: string
  publishedAt: string
}

export default function App() {
  const [articles, setArticles] = useState<Article[]>([])

  const fetch = async () => {
    const response = await axios.get<Article[]>(
      'http://localhost:3333/articles'
    )
    setArticles(response.data)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.author}
            imageURL={item.urlToImage}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
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
