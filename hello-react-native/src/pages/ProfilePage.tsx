import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileDescription}>
        Hi! I'm Bob Strange as a web developer.
      </Text>
      <Image
        source={{ uri: 'https://avatars3.githubusercontent.com/u/1381585' }}
        style={styles.profileImage}
      />
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
  },
})

export { ProfilePage }
