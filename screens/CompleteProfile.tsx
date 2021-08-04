import { useState} from 'react'
import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import styles from "../assets/styles";
import Profile from './Profile';



const CompleteProfile = (props:any) => {
    const [lastName, setLastName] = useState("");
    const [firstName, setfirstName] = useState("");

    return(
        <View style = {styles.textHeader}>
            <Text style = {styles.textHeader}> Complete your profile </Text> 

            <TextInput 
            style = {styles.textInput} 
            placeholder= "First Name"> 
            </TextInput>

            <TextInput
            style = {styles.textInput}
            placeholder= "Last Name"  
            onChangeText = { setLastName}> 
            </TextInput>

            <TextInput 
            style = {styles.aboutMe} 
            placeholder= "About me." 
            multiline={true}
            numberOfLines={3}
            > </TextInput>


            <TouchableOpacity 
            style ={styles.roundedButton}
 
            >
            <Text style ={styles.textButton}> Continue </Text>
            </TouchableOpacity>
       
      
        </View>
        )
    }
    export default CompleteProfile; 

