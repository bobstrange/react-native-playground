import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const renderItem = (item) => {
  return (
    <Text>
      {item.title}, {item.releaseYear}
    </Text>
  )
}
export const MovieList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
})
