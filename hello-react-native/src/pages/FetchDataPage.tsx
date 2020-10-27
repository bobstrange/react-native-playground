import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { MovieList } from '../components/MovieList'

export const FetchDataPage = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://reactnative.dev/movies.json')
        setData(response.data.movies)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    })()
  }, [])
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <MovieList data={data} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
})
