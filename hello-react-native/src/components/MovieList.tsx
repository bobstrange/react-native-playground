import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const renderItem = ({ item }) => {
  return (
    <Text>
      {item.title}, {item.releaseYear}
    </Text>
  )
}

export const MovieList = ({ data }) => {
  return <FlatList data={data} renderItem={renderItem} />
}
