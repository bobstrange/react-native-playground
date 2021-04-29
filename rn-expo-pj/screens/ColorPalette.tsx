import { useRoute } from '@react-navigation/core'
import React, { FC } from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import { ColorPaletteProps } from '../route'
import { ColorBox } from '../components/ColorBox'

const ColorPalette: FC = () => {
  const route = useRoute<ColorPaletteProps['route']>()

  return (
    <FlatList
      style={styles.container}
      data={route.params.colors}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      keyExtractor={({ hexCode }) => hexCode}
      ListHeaderComponent={() => <Text style={styles.title}>Solarized</Text>}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

export default ColorPalette
