import React, { FC } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
]

const ColorPaletteModal: FC = () => {
  return (
    <View>
      <FlatList
        data={COLORS}
        keyExtractor={({ hexCode }) => hexCode}
        renderItem={({ item }) => (
          <View style={listItemStyles.container}>
            <Text>{item.colorName}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={listStyles.separator} />}
        ListHeaderComponent={
          <View style={listHeaderStyles.container}>
            <Text style={listHeaderStyles.title}>
              Name of your color palette
            </Text>
            <TextInput style={listHeaderStyles.input} />
          </View>
        }
        ListFooterComponent={
          <View style={listFooterStyles.container}>
            <TouchableOpacity style={listFooterStyles.button}>
              <Text style={listFooterStyles.buttonTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  )
}

const listStyles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#bbb',
    marginHorizontal: 10,
  },
})

const listItemStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
})

const listHeaderStyles = StyleSheet.create({
  container: { padding: 5, marginBottom: 10 },
  title: { marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
})

const listFooterStyles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#53777A',
    padding: 8,
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
  },
})

export default ColorPaletteModal
