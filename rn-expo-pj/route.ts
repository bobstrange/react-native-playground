import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParams = {
  Home: undefined
  ColorPalette: {
    paletteName: string
    colors: { colorName: string; hexCode: string }[]
  }
}

export type HomeProps = StackScreenProps<RootStackParams, 'Home'>
export type ColorPaletteProps = StackScreenProps<
  RootStackParams,
  'ColorPalette'
>
