import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import { Icon, Message, ListElement } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import firebase from "firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

const Messages = ({navigation}:any) => {
  const db = firebase.firestore();
  const user = firebase.auth().currentUser!;

  const [snapshot, loading, error] = useDocument(
    db.collection("users").doc(user.uid)
  );

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      {/* <View style={styles.top}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View> */}
      {loading && <Text>Loading...</Text>}
      {snapshot && (
        <View style={styles.containerMessages}>
          {snapshot.data()?.rooms.map((room: string) => {
            return <ListElement room={room} user={user} key={room} />;
          })}
        </View>
      )}
    </ImageBackground>
  );
};
export default Messages;
