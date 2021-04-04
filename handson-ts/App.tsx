import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#999",
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
    flex: 1,
  },
  contentText: {
    color: "white",
    fontSize: 22,
  },
  contentContainer: {
    paddingBottom: 50,
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
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={text === ""}
      >
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
  createdAt: {
    color: "white",
    padding: 5,
  },
  actionContainer: {
    borderTopWidth: 1,
    borderTopColor: "#aaa",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingTop: 5,
    marginTop: 20,
  },
});

function Eet({
  eetAt,
  text,
  like,
  onLike,
  onDelete,
}: {
  eetAt: number;
  text: string;
  like: boolean;
  onLike: () => void;
  onDelete: () => void;
}) {
  const date = new Date(eetAt);
  return (
    <View style={eetStyles.container}>
      <Text style={eetStyles.text}>{text}</Text>
      <View style={eetStyles.actionContainer}>
        <Text style={eetStyles.createdAt}>{date.toISOString()}</Text>
        <TouchableOpacity onPress={onLike}>
          {like ? (
            <Ionicons
              name="heart-circle-sharp"
              size={22}
              color="rgb(252, 108, 133)"
            />
          ) : (
            <Ionicons name="heart-circle-outline" size={22} color="#aaa" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="remove-circle" size={22} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface Eet {
  id: number;
  text: string;
  like: boolean;
}

export default function App() {
  const [eetList, setEetList] = useState<Eet[]>([]);
  const addEet = (text: string) => {
    const newEetList = eetList.concat([]);
    newEetList.push({
      id: Date.now(),
      text,
      like: false,
    });
    setEetList(newEetList);
  };

  const deleteEet = (id: number) => {
    const newEetList = eetList.filter((eet) => eet.id !== id);
    setEetList(newEetList);
  };

  const onLike = (index: number) => {
    const newEetList = eetList.concat([]);
    newEetList[index].like = !newEetList[index].like;
    setEetList(newEetList);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Input addEet={addEet} />
        <View style={styles.content}>
          <FlatList
            data={eetList}
            renderItem={({ item, index }) => (
              <Eet
                eetAt={item.id}
                text={item.text}
                like={item.like}
                onLike={() => onLike(index)}
                onDelete={() => deleteEet(item.id)}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}
