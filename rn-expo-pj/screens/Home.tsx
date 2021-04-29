import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HomeProps } from '../route'

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
]

const Home: FC = () => {
  const navigation = useNavigation<HomeProps['navigation']>()
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColorPalette', {
            paletteName: 'Solarized',
            colors: SOLARIZED,
          })
        }
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
