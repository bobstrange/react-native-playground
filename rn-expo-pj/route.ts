import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParams = {
  Main: undefined
  AddNewPalette: undefined
}

export type MainProps = StackScreenProps<RootStackParams, 'Main'>
export type AddNewPalette = StackScreenProps<RootStackParams, 'AddNewPalette'>

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
