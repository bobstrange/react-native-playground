import React, { FC } from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'

type Props = {
  colorName: string
  hexCode: string
}

export const ColorBox: FC<Props> = ({ colorName, hexCode }) => {
  const boxColor: ViewStyle = {
    backgroundColor: hexCode,
  }
  const textColor: TextStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  }
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
  boxText: {
    fontWeight: 'bold',
  },
})
