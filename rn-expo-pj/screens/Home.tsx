import { useNavigation, useRoute } from '@react-navigation/core'
import Axios from 'axios'
import React, { FC, useCallback, useEffect, useState } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { HomeNavigationProp, HomeRouteProp } from '../route'

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
  const route = useRoute<HomeRouteProp>()
  const newColorPalette = route.params?.newColorPalette
  const [colorPalettes, setColorPalettes] = useState<ColorPalette[]>([])

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((current) => [newColorPalette, ...current])
    }
  }, [newColorPalette])

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

  const navigation = useNavigation<HomeNavigationProp>()
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
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.listHeaderContainer}
            onPress={() => {
              navigation.navigate('AddNewPalette')
            }}
          >
            <Text style={styles.listHeaderTitle}>Add a color scheme</Text>
          </TouchableOpacity>
        }
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
  listHeaderContainer: {
    marginBottom: 10,
  },
  listHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'teal',
  },
})
export default Home
