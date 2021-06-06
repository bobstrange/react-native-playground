import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./navigations/MainStack";
import { AuthStack } from "./navigations/AuthStack";

export default function App() {
  const loggedIn = false;
  return (
    <>
      <NavigationContainer>
        {loggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  );
}
