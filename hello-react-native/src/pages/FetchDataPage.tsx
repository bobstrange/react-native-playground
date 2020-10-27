import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { MovieList } from '../components/MovieList'
import { Movie, fetchMovies } from '../apis/movie'

export const FetchDataPage = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Movie[]>([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const response = await fetchMovies()
        setData(response.movies)
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
