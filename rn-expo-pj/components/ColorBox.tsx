import React, { FC } from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native'

type Props = {
  colorName: string
  hexCode: string
}

export const ColorBox: FC<Props> = ({ colorName, hexCode }) => {
  const boxColor: ViewStyle = {
    backgroundColor: hexCode,
  }
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
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
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
