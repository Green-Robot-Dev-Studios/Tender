import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Chat, ChatList } from ".";

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={ChatList} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatStack;
