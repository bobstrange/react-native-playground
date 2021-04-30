import { useNavigation } from '@react-navigation/core'
import Axios from 'axios'
import React, { FC, useCallback, useEffect, useState } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'
import { HomeProps } from '../route'

type Color = {
  colorName: string
  hexCode: string
}

type ColorPalette = {
  paletteName: string
  colors: Color[]
}

const PalettePreview: FC<{ palette: ColorPalette; onPress: () => void }> = ({
  palette,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={palettePreviewStyles.title}>{palette.paletteName}</Text>
      <FlatList
        style={palettePreviewStyles.list}
        data={palette.colors.slice(0, 5)}
        keyExtractor={({ hexCode }) => hexCode}
        renderItem={({ item }) => (
          <View
            style={[
              palettePreviewStyles.box,
              { backgroundColor: item.hexCode },
            ]}
          />
        )}
      />
    </TouchableOpacity>
  )
}

const useRefresh = (
  requestToRefresh: () => Promise<void>
): [boolean, () => Promise<void>] => {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true)
    await requestToRefresh()
    setTimeout(() => {
      setIsRefreshing(false)
    }, 100)
  }, [requestToRefresh])

  return [isRefreshing, handleRefresh]
}

const Home: FC = () => {
  const [colorPalettes, setColorPalettes] = useState<ColorPalette[]>()

  const handleUpdateColorPalettes = useCallback(async () => {
    const res = await Axios.get<ColorPalette[]>(
      'https://color-palette-api.kadikraman.now.sh/palettes'
    )

    if (res.status === 200) {
      setColorPalettes(res.data)
    }
  }, [])

  const [isRefreshing, handleRefresh] = useRefresh(handleUpdateColorPalettes)
  useEffect(() => {
    handleUpdateColorPalettes()
  }, [handleUpdateColorPalettes])

  const navigation = useNavigation<HomeProps['navigation']>()
  return (
    <View>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            palette={item}
            onPress={() => navigation.navigate('ColorPalette', item)}
          >
            <Text>{item.paletteName}</Text>
          </PalettePreview>
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  )
}

const palettePreviewStyles = StyleSheet.create({
  list: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
})

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
})
export default Home
