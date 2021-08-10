import React from "react";
import { Text, View, Image } from "react-native";
import { MessageT } from "../types";
import styles from "../assets/styles";
import Identicon from 'react-identicons';

const Message = ({ id, lastMessage, name }:any) => (
  <View style={styles.containerMessage}>
    <View style={{paddingRight: 10}}>
      <Identicon string={id} size="30" />
    </View>
    <View>
      <Text>{name}</Text>
      <Text style={styles.message}>{lastMessage}</Text>
    </View>
  </View>
);

export default Message;
