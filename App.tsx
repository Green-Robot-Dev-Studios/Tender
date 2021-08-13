import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile, SignUp, SignIn, CompleteProfile } from "./screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import ChatStack from "./screens/ChatStack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  // Boot up Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyAWX7_YBIehaRvJ5ahAW_eVF_zkBpHD7-A",
      authDomain: "tender-b4511.firebaseapp.com",
      projectId: "tender-b4511",
      storageBucket: "tender-b4511.appspot.com",
      messagingSenderId: "371235521505",
      appId: "1:371235521505:web:489a8643e19497714908a0",
    });
  } else {
    console.log("Firebase is already started.");
  }

  const [currentUser, setUser] = useState(firebase.auth().currentUser);
  useEffect(()=> {
    firebase.auth().onAuthStateChanged((user)=>setUser(user));
  })

  return (
    <NavigationContainer>
      {/* Global stack navigator */}
      <Stack.Navigator>
        {/* If signed in, show tab navigator, else, show SignIn on top of SignUp */}
        {currentUser ? (
          // Tab navigator as a stacked screen
          <Stack.Screen
            name="Tab"
            options={{ headerShown: false, animationEnabled: false }}
          >
            {() => (
              <Tab.Navigator
                tabBarOptions={{
                  showLabel: false,
                  activeTintColor: PRIMARY_COLOR,
                  inactiveTintColor: DARK_GRAY,
                  labelStyle: {
                    fontSize: 14,
                    textTransform: "uppercase",
                    paddingTop: 10,
                  },
                  style: {
                    backgroundColor: WHITE,
                    borderTopWidth: 0,
                    marginBottom: 0,
                    shadowOpacity: 0.05,
                    shadowRadius: 10,
                    shadowColor: BLACK,
                    shadowOffset: { height: 0, width: 0 },
                  },
                }}
              >
                <Tab.Screen
                  name="Explore"
                  component={CompleteProfile}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon
                        focused={focused}
                        iconName="search"
                        text="Explore"
                      />
                    ),
                  }}
                />

                <Tab.Screen
                  name="Matches"
                  component={Matches}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon
                        focused={focused}
                        iconName="heart"
                        text="Matches"
                      />
                    ),
                  }}
                />

                <Tab.Screen
                  name="Chat"
                  component={ChatStack}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon
                        focused={focused}
                        iconName="chatbubble"
                        text="Chat"
                      />
                    ),
                  }}
                />

                <Tab.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon
                        focused={focused}
                        iconName="person"
                        text="Profile"
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="Sign In"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
