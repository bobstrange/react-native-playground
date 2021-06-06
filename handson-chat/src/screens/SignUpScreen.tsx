import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";
import { auth } from "../../firebase";
import { SignUpScreenNavigationProp } from "../../navigations/AuthStack";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  pLg: {
    padding: 24,
  },
  mb: {
    marginBottom: 16,
  },
  pSm: {
    padding: 8,
  },
});

export const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const signup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Register success");
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.pLg]}>
        <Title style={styles.mb}>Register User</Title>
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
          secureTextEntry
          style={styles.mb}
        />
        <Button
          mode="contained"
          style={[styles.pSm, styles.mb]}
          onPress={signup}
        >
          Register
        </Button>
        <Button
          style={[styles.pSm, styles.mb]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login as an exiting account
        </Button>
      </View>
    </SafeAreaView>
  );
};
