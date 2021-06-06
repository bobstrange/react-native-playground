import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen } from "../src/screens/ChatScreen";

type MainStackParamList = {
  Chat: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
