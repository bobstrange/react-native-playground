import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home: FC = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
