import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import axios from 'axios'
import { ListItem } from '../components/ListItem'

type Article = {
  urlToImage: string
  title: string
  author: string
  publishedAt: string
}

export const HomeScreen = () => {
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
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
