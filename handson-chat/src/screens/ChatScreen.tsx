import { useNavigation } from "@react-navigation/core";
import React, { useState, useCallback, useLayoutEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Button } from "react-native-paper";
import { auth, db } from "../../firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type User = {
  _id: string | null | undefined;
  name: string;
  avatar: string;
};

type Message = {
  _id: number;
  text: string;
  createdAt: Date;
  user: User;
};

export const ChatScreen = () => {
  const navigation = useNavigation();

  const signout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Sign out success");
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={signout}>Logout</Button>,
    });
  });

  const [messages, setMessages] = useState<Message[]>([]);

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const res = snapshot.docs.map((doc) => {
          return {
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          };
        });
        setMessages(res);
      });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    db.collection("chats").add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        placeholder="メッセージを入力してください..."
        onSend={onSend}
        user={{
          _id: auth?.currentUser?.email || "",
          name: "Me",
          avatar: "https://placeimg.com/140/140/any",
        }}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};
