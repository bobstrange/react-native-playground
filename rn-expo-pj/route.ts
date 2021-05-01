import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native'

export type RootStackParams = {
  Main: NavigatorScreenParams<MainStackParams>
  AddNewPalette: undefined
}

export type MainProps = StackScreenProps<RootStackParams, 'Main'>
export type AddNewPalette = StackScreenProps<RootStackParams, 'AddNewPalette'>

export type AddNewPaletteNavigationProp = StackNavigationProp<
  RootStackParams,
  'AddNewPalette'
>

export type MainStackParams = {
  Home: undefined
  ColorPalette: {
    paletteName: string
    colors: { colorName: string; hexCode: string }[]
  }
}

export type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParams, 'Home'>,
  StackNavigationProp<RootStackParams>
>
export type HomeRouteProp = RouteProp<MainStackParams, 'Home'>

export type ColorPaletteNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParams, 'ColorPalette'>,
  StackNavigationProp<RootStackParams>
>
export type ColorPaletteRouteProp = RouteProp<MainStackParams, 'ColorPalette'>
