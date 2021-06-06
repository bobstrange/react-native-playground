import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Button } from "react-native-paper";
import { auth } from "../../firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type User = {
  _id: number;
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
        console.log("e.message");
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={signout}>Logout</Button>,
    });
  });

  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = React.useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        placeholder="メッセージを入力してください..."
        onSend={onSend}
        user={{
          _id: 1,
          name: "Me",
          avatar: "https://placeimg.com/140/140/any",
        }}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};
