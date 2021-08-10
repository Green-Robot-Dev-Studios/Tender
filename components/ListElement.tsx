import React from "react";
import firebase from "firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { TouchableOpacity, Text } from "react-native";
import Message from "./Message";
import { useNavigation } from "@react-navigation/native";

const ListElement = (props:any) => {
  const db = firebase.firestore();
  const navigation = useNavigation();

  const [snapshot, loading, error] = useDocument(
    db.collection("rooms").doc(props.room)
  );

  const members = snapshot?.data()?.members;
  const partner = members?.splice(members.indexOf(props.user.uid, 1))[0];

  return (
    <>
      {snapshot && (
        <TouchableOpacity onPress={() => navigation.navigate("Chat", {room: props.room})} style={{paddingTop: 10}}>
          <Message id={partner} name={partner} lastMessage={partner} />
        </TouchableOpacity>
      )}
      {loading && <Text>Loading...</Text>}
    </>
  );
};

export default ListElement;