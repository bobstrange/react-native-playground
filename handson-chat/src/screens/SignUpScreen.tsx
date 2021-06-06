import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";

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
          onPress={() => {}}
        >
          Register
        </Button>
        <Button style={[styles.pSm, styles.mb]} onPress={() => {}}>
          Login as an exiting account
        </Button>
      </View>
    </SafeAreaView>
  );
};
