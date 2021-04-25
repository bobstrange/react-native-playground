import React from 'react'
import { Text, SafeAreaView, View, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colours
        </Text>
        <View style={styles.cyanBox}>
          <Text style={styles.boxText}>Cyan: #2aa198</Text>
        </View>
        <View style={styles.blueBox}>
          <Text style={styles.boxText}>Blue: #268bd2</Text>
        </View>
        <View style={styles.magentaBox}>
          <Text style={styles.boxText}>Magenta: #d33682</Text>
        </View>
        <View style={styles.orangeBox}>
          <Text style={styles.boxText}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cyanBox: {
    backgroundColor: '#2aa198',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  blueBox: {
    backgroundColor: '#268bd2',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  magentaBox: {
    backgroundColor: '#d33682',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  orangeBox: {
    backgroundColor: '#cb4b16',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
