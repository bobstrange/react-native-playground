import React from 'react'
import { Text, ScrollView, Image } from 'react-native'

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
}

const MyScrollView = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 96, marginVertical: 20 }}>
        Please scroll me !!!
      </Text>
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />

      <Text style={{ fontSize: 96, marginVertical: 20 }}>If you like</Text>
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />

      <Text style={{ fontSize: 96, marginVertical: 20 }}>Scroll down</Text>
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />

      <Text style={{ fontSize: 96, marginVertical: 20 }}>What's the best</Text>
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />

      <Text style={{ fontSize: 96, marginVertical: 20 }}>
        Framework around ?
      </Text>
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />

      <Text style={{ fontSize: 96, marginVertical: 20 }}>React Native</Text>
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
      <Image source={logo} style={{ marginBottom: 10 }} />
    </ScrollView>
  )
}

export { MyScrollView }
