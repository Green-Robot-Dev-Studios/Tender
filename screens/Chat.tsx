import React, { useState, useCallback, useLayoutEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

import firebase from "firebase/app";
import "firebase/auth";

function Chat({route, navigation}:any) {
  const props = route.params;

  const db = firebase.firestore();
  const auth = firebase.auth();

  // Null assertion operator (!) fixes TS bug not knowing context of navigator
  const id = auth.currentUser!.uid;
  const name = "Test";

  const [messages, setMessages] = useState([] as any);
  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("rooms")
      .doc(props.room)
      .collection("messages")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      );
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    db.collection("rooms").doc(props.room).collection("messages").add({
      _id,
      createdAt,
      text,
      user,
    });
    console.log("Sending to", props.room, text, user);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      // showAvatarForEveryMessage={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: id,
        name: name,
      }}
    />
  );
}

export default Chat;
