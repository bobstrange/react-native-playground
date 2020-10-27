import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { StyleSheet, View } from 'react-native'
import { MovieList } from '../components/MovieList'

export const FetchDataPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  return (
    <View style={styles.container}>
      <MovieList data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
})
