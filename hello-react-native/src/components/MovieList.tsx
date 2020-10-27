import React from 'react'
import { ListRenderItem, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const renderItem: ListRenderItem<ListItem> = ({ item }) => {
  return (
    <Text>
      {item.title}, {item.releaseYear}
    </Text>
  )
}

type ListItem = {
  id: number
  title: string
  releaseYear: string
}

type Props = {
  data: ListItem[]
}

export const MovieList: React.FC<Props> = ({ data }) => {
  return <FlatList data={data} renderItem={renderItem} />
}
