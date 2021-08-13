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
import { Formik, Field , useField } from 'formik';


const CompleteProfile = (props:any) => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [bio, setBio] = useState("");
    const [birthDate, setBirthDate] = useState("");
    
    return(  
      <View>
        <Text style ={styles.header}> Create your Profile</Text>

        <Text style ={styles.textHeader}>First Name</Text>
        <TextInput 
        placeholder="First Name"
        style ={styles.inputBox} 
        onChangeText={setFirstName}
        />

        <Text style ={styles.textHeader}>Last Name</Text>   
        <TextInput
          placeholder="Last Name" 
          style ={styles.inputBox}
          onChangeText={setLastName}
         />

        <Text style ={styles.textHeader}>Birth Date</Text>   
          <TextInput
            style ={styles.inputBox} 
            placeholder="MM/DD/YYYY"
            onChangeText={setBirthDate}
          />
        <Text style ={styles.textHeader}>Pronouns</Text>
        <TextInput 
        placeholder="They/Them, She/Here"
        style ={styles.inputBox} 
        onChangeText={setFirstName}
        />

        <Text style ={styles.textHeader}>Bio</Text>   
        <Text style ={styles.textSubHeader}>Write about yourself, anything from your interests to family to hobbies</Text>
          <TextInput 
            style = {styles.aboutMe} 
            placeholder= "About me." 
            multiline={true}
            numberOfLines={1}
            onChangeText={setBio}
            > </TextInput>
        
        <Text style ={styles.textHeader}>How have you been feeling lately?</Text>   
        <Text style ={styles.textSubHeader}>This helps others understand and support you where you need it most</Text>
          <TextInput 
            style = {styles.aboutMe} 
            placeholder= "I've been feeling stressed because of work and my boss pressuring deadlines" 
            multiline={true}
            numberOfLines={1}
            onChangeText={setBio}
            > </TextInput>

          <TouchableOpacity style ={styles.roundedButton}> Submit </TouchableOpacity>
           
       </View>
   
      )
    } 

export default CompleteProfile; 

