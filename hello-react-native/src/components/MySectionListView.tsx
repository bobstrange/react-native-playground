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

type MySectionListData = SectionListData<
  MySectionListViewItem['data'],
  MySectionListViewItem['title']
>

const MySectionListView = ({ data }: MySectionListViewProps) => {
  const renderItem: SectionListRenderItem<
    MySectionListViewItem['data'],
    MySectionListViewItem['title']
  > = ({ item }) => {
    return (
      <View>
        <Text style={styles.listItem}>{item}</Text>
      </View>
    )
  }

  const renderSectionHeader = ({ section }: { section: MySectionListData }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>
  }
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
export { MySectionListView }
