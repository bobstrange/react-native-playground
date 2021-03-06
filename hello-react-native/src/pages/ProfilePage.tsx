import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'

const ProfilePage = ({ navigation }) => {
  const onShowProfilePageButtonPressed = () => {
    navigation.push('Profile', {})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.profileDescription}>
        Hi! I'm Bob Strange as a web developer.
      </Text>
      <Image
        source={{ uri: 'https://avatars3.githubusercontent.com/u/1381585' }}
        style={styles.profileImage}
      />

      <Button
        title="Show profile page again (Push)"
        onPress={onShowProfilePageButtonPressed}
      />
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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
  profileDescription: {
    fontSize: 24,
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
})

export { ProfilePage }
