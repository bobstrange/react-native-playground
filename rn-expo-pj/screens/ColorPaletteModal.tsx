import { useNavigation } from '@react-navigation/core'
import React, { FC, useCallback, useState } from 'react'
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInputProps,
  Alert,
} from 'react-native'
import {
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { AddNewPaletteNavigationProp } from '../route'

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
]

const ColorPaletteModal: FC = () => {
  const navigation = useNavigation<AddNewPaletteNavigationProp>()
  const [state, setState] = useState<{ [k: number]: boolean }>({})
  const [colorName, setColorName] = useState('')

  const handleChangeColorName: TextInputProps['onChangeText'] = (text) => {
    setColorName(text)
  }

  const handleSubmit = useCallback(async () => {
    if (colorName.length === 0) {
      Alert.alert('', 'Please input name of your color palette.')
      return
    }
    if (Object.entries(state).filter(([_, enabled]) => enabled).length < 3) {
      // error
      Alert.alert('', 'Please select at least 3 colors.')
      return
    }

    navigation.goBack()
  }, [navigation, colorName, state])

  return (
    <View>
      <FlatList
        data={COLORS}
        keyExtractor={({ hexCode }) => hexCode}
        renderItem={({ item, index }) => (
          <View style={listItemStyles.container}>
            <Text>{item.colorName}</Text>
            <Switch
              onValueChange={() =>
                setState((current) => ({
                  ...current,
                  [index]: !current[index],
                }))
              }
              value={state[index]}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={listStyles.separator} />}
        ListHeaderComponent={
          <View style={listHeaderStyles.container}>
            <Text style={listHeaderStyles.title}>
              Name of your color palette
            </Text>
            <TextInput
              style={listHeaderStyles.input}
              onChangeText={handleChangeColorName}
            />
          </View>
        }
        ListFooterComponent={
          <View style={listFooterStyles.container}>
            <TouchableOpacity
              style={listFooterStyles.button}
              onPress={handleSubmit}
            >
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
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
