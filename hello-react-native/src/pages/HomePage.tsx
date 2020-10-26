import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { PizzaTranslator } from '../components/PizzaTranslator'

const HomePage = ({ navigation }) => {
  const onGoToProfileButtonPressed = () => {
    navigation.navigate('Profile', {})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is a home page</Text>
      <Button
        title="Go to profile page (navigate)"
        onPress={onGoToProfileButtonPressed}
      />
      <Button
        title="Show ScrollPage"
        onPress={() => navigation.navigate('ScrollPage')}
      />
      <Button
        title="Show FlatListPage"
        onPress={() => navigation.navigate('FlatListPage')}
      />

      <PizzaTranslator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  heading: {
    fontSize: 24,
  },
})

export { HomePage }
