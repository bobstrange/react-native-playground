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

function Input({ addEet }: { addEet: (text: string) => void }) {
  const [text, setText] = useState("");
  const onPress = () => {
    addEet(text);
    setText("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(_text) => setText(_text)}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>イートする</Text>
      </TouchableOpacity>
    </View>
  );
}

const eetStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "rgb(29, 161, 242)",
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
function Eet({ text }: { text: string }) {
  return (
    <View style={eetStyles.container}>
      <Text style={eetStyles.text}>{text}</Text>
    </View>
  );
}

export default function App() {
  const [eetList, setEetList] = useState<{ text: string }[]>([]);
  const addEet = (text: string) => {
    const newEet = eetList.concat([]);
    newEet.push({ text });
    setEetList(newEet);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Input addEet={addEet} />
      <View style={styles.container}></View>
      <View style={styles.content}>
        {eetList.map((eet, index) => (
          <Eet key={index} text={eet.text} />
        ))}
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
