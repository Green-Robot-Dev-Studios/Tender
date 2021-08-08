import React, { useState, useCallback, useLayoutEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
// import firebase from "firebase";
import firebase from "firebase/app";$
import "firebase/auth";


function ChatTest() {
const db = firebase.firestore();

  const [messages, setMessages] = useState([]);
  useLayoutEffect(() => {
    const unsubscribe = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(snapshot => setMessages(
    snapshot.docs.map(doc => ({
    _id: doc.data()._id,
    createdAt: doc.data().createdAt.toDate(),
    text: doc.data().text,
    user: doc.data().user,
    }))
    ));
    return unsubscribe;
    }, [])


 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
        _id,
        createdAt,
        text,
        user,
        } = messages[0]
    db.collection('messages').add({
        _id,
        createdAt,
        text,
        user
        })
  }, [])

  

  return (
    <GiftedChat
    messages={messages}
    // showAvatarForEveryMessage={true}
    onSend={messages => onSend(messages)}
    user={{
    _id: auth?.currentUser?.email,
    name: auth?.currentUser?.displayName,
    
    }}
    />
  )
}

export default ChatTest;

