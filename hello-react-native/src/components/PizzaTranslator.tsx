import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
export default function PizzaTranslator() {
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.translatorTextInput}
        placeholder="Type here to translate"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={styles.textArea}>
        {text
          .split(' ')
          .map((word) => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  translatorTextInput: {
    height: 40,
    paddingHorizontal: 8,
  },
  textArea: {
    padding: 10,
    fontSize: 40,
  },
})
export { PizzaTranslator }
