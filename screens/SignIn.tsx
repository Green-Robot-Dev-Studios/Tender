import React, { useState } from "react";
import { View, Text, Image, ImageBackground, Button, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles, { BLUE, LIGHT_GRAY } from "../assets/styles";
import bg from "../assets/images/bg.jpg";
import tender from "../assets/images/tender.png";
import firebase from "firebase";

function signIn(email:string, password:string) {

  firebase.auth().signInWithEmailAndPassword(email, password).catch((e) => {
    Alert.alert(e.message);
  });

}

const SignIn = ({ navigation }: { navigation: any }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);

  return (
    <ImageBackground
      source={bg}
      style={{ height: "100%", opacity: 0.8, justifyContent: "center" }}
    >
      <View style={{ width: "90%", alignSelf: "center" }}>
        <View style={{ marginBottom: "10%" }}>
          <Image
            resizeMode="contain"
            source={tender}
            style={{ width: "100%", height: 120 }}
          />
        </View>

        <View>
          <TextInput
            selectionColor={BLUE}
            underlineColorAndroid={isFocusedEmail ? BLUE : LIGHT_GRAY}
            style={styles.textInput}
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
            placeholder="Email"
            onChangeText={setEmail}
          />

          <TextInput
            selectionColor={BLUE}
            underlineColorAndroid={isFocusedPassword ? BLUE : LIGHT_GRAY}
            style={styles.textInput}
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
          />

          <Button
            onPress={() => signIn(email, password)}
            title="Sign In"
          />
        </View>

        <View>
          <Text>Don't have an account?</Text>
          <Button
            onPress={() => navigation.navigate("Sign Up")}
            title="Sign Up"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignIn;
