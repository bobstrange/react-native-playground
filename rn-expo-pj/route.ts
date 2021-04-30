import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParams = {
  Main: undefined
}

export type MainProps = StackScreenProps<RootStackParams, 'Main'>

export type MainStackParams = {
  Home: undefined
  ColorPalette: {
    paletteName: string
    colors: { colorName: string; hexCode: string }[]
  }
}

export type HomeProps = StackScreenProps<MainStackParams, 'Home'>
export type ColorPaletteProps = StackScreenProps<
  MainStackParams,
  'ColorPalette'
>
