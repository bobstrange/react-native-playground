import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#222",
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    backgroundColor: "rgb(29, 161, 242)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderColor: "rgb(29, 161, 242)",
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  contentText: {
    color: "white",
    fontSize: 22,
  },
});

function Input() {
  const [text, setText] = useState("");
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(_text) => setText(_text)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>イートする</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Input />
      <View style={styles.container}></View>
      <View style={styles.content}>
        <Text style={styles.contentText}></Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
