import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";
import { auth } from "../../firebase";
import { LoginScreenNavigationProp } from "../../navigations/AuthStack";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  pLg: {
    padding: 24,
  },
  pSm: {
    padding: 8,
  },
  mb: {
    marginBottom: 16,
  },
});

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Signin success");
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.pLg]}>
        <Title style={styles.mb}>Login</Title>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.mb}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
          style={styles.mb}
        />
        <Button
          mode="contained"
          style={[styles.pSm, styles.mb]}
          onPress={signin}
        >
          Login
        </Button>
        <Button
          style={[styles.pSm, styles.mb]}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Create an account
        </Button>
      </View>
    </SafeAreaView>
  );
};
