import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParams = {
  Home: undefined
  ColorPalette: undefined
}

export type HomeProps = StackScreenProps<RootStackParams, 'Home'>
export type ColorPaletteProps = StackScreenProps<
  RootStackParams,
  'ColorPalette'
>
