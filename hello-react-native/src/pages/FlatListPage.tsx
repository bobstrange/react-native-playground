import React from 'react'
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

const FlatListPage = () => {
  return <MyFlatListView data={listPageDummyData} />
}

export { FlatListPage }
