import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../src/screens/LoginScreen";

type AuthNavigationParam = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthNavigationParam>();

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
