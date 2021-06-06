import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../src/screens/LoginScreen";
import { SignUpScreen } from "../src/screens/SignUpScreen";

type AuthNavigationParam = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<AuthNavigationParam>();

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
