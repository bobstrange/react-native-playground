import React from 'react'
import { ListRenderItem, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

type MyFlatListViewItem = {
  key: string
}

type MyFlatListViewProps = {
  data: MyFlatListViewItem[]
}

const MyFlatListView = ({ data }: MyFlatListViewProps) => {
  const renderItem: ListRenderItem<MyFlatListViewItem> = ({ item }) => {
    return <Text style={styles.listItem}>{item.key}</Text>
  }
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
export { MyFlatListView }
