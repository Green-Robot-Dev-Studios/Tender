import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../assets/styles";

const SignUp = (props: any) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={styles.textHeader}>
      <Text style={styles.textHeader}>Sign Up</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.roundedButtonSign}>
        <Text style={styles.textButton}> Sign Up </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
