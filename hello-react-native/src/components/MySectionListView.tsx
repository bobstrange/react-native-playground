import React from 'react'
import {
  SectionList,
  SectionListData,
  SectionListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native'

type MySectionListViewItem = {
  title: string
  data: string[]
}

type MySectionListViewProps = {
  data: MySectionListViewItem[]
}

const MySectionListView = ({ data }: MySectionListViewProps) => {
  const renderItem: SectionListRenderItem<
    MySectionListViewItem['data'],
    MySectionListViewItem
  > = ({ item }) => {
    return (
      <View>
        <Text style={styles.listItem}>{item}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={}
      />
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
export { MySectionListView }
