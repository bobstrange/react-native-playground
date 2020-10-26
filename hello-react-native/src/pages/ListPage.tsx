import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { MyFlatListView } from '../components/MyFlatListView'

const listPageDummyData = [
  { key: 'Devin' },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
]

type ListType = 'flat' | 'section'

const ListPage = () => {
  const [listType, setListType] = useState<ListType>('flat')
  const buttonTitle = () => {
    switch (listType) {
      case 'flat':
        return 'Show Section List'
      case 'section':
        return 'Show Flat list'
      default:
        const neverHere: never = listType
        return neverHere
    }
  }

  const onButtonPress = () => {
    switch (listType) {
      case 'flat':
        return setListType('section')
      case 'section':
        return setListType('flat')
      default:
        const neverHere: never = listType
        return neverHere
    }
  }

  const renderList = () => {
    switch (listType) {
      case 'flat':
        return <MyFlatListView data={listPageDummyData} />
      case 'section':
        return <Text>Section List</Text>
      default:
        const neverHere: never = listType
        return neverHere
    }
  }

  return (
    <View>
      <Button title={buttonTitle()} onPress={onButtonPress} />
      {renderList()}
    </View>
  )
}

export { ListPage }
