import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile, CompleteProfile, ChatRoom} from "./screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



firebase.initializeApp({
    apiKey: "AIzaSyAWX7_YBIehaRvJ5ahAW_eVF_zkBpHD7-A",
    authDomain: "tender-b4511.firebaseapp.com",
    projectId: "tender-b4511",
    storageBucket: "tender-b4511.appspot.com",
    messagingSenderId: "371235521505",
    appId: "1:371235521505:web:489a8643e19497714908a0"
  
});

const db = firebase.firestore();



// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => (
  <ChatRoom> </ChatRoom> 
);

//   <NavigationContainer>
//      
//     <Stack.Navigator>
    
// //       <Stack.Screen
//         name="Tab"
//         options={{ headerShown: false, animationEnabled: false }}
//       >
//         {() => (
//           <Tab.Navigator
//             tabBarOptions={{
//               showLabel: false,
//               activeTintColor: PRIMARY_COLOR,
//               inactiveTintColor: DARK_GRAY,
//               labelStyle: {
//                 fontSize: 14,
//                 textTransform: "uppercase",
//                 paddingTop: 10,
//               },
//               style: {
//                 backgroundColor: WHITE,
//                 borderTopWidth: 0,
//                 marginBottom: 0,
//                 shadowOpacity: 0.05,
//                 shadowRadius: 10,
//                 shadowColor: BLACK,
//                 shadowOffset: { height: 0, width: 0 },
//               },
//             }}
//           >
//             <Tab.Screen
//               name="Explore"
//               component={Home}
//               options={{
//                 tabBarIcon: ({ focused }) => (
//                   <TabBarIcon
//                     focused={focused}
//                     iconName="search"
//                     text="Explore"
//                   />
//                 ),
//               }}
//             />

//             <Tab.Screen
//               name="Matches"
//               component={Matches}
//               options={{
//                 tabBarIcon: ({ focused }) => (
//                   <TabBarIcon
//                     focused={focused}
//                     iconName="heart"
//                     text="Matches"
//                   />
//                 ),
//               }}
//             />

//             <Tab.Screen
//               name="Chat"
//               component={Messages}
//               options={{
//                 tabBarIcon: ({ focused }) => (
//                   <TabBarIcon
//                     focused={focused}
//                     iconName="chatbubble"
//                     text="Chat"
//                   />
//                 ),
//               }}
//             />

//             <Tab.Screen
//               name="Profile"
//               component={Profile}
//               options={{
//                 tabBarIcon: ({ focused }) => (
//                   <TabBarIcon
//                     focused={focused}
//                     iconName="person"
//                     text="Profile"
//                   />
//                 ),
//               }}
//             />
//           </Tab.Navigator>
//         )}
        
  //     </Stack.Screen>
    
  //   </Stack.Navigator>
  // </NavigationContainer>
// );

export default App;
