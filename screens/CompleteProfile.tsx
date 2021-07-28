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

const CompleteProfile = () => {
    return() => {
        <View style = {styles.textHeader}>
            <Text style = {styles.textHeader}> Complete your profile </Text> 

            <TextInput style = {styles.textInput} placeholder= "First Name" /> 
            <TextInput style = {styles.textInput} placeholder= "Last Name" /> 
            <TextInput 
            style = {styles.aboutMe} 
            placeholder= "About me." 
            multiline={true}
            numberOfLines={3}
            /> 


            <TouchableOpacity 
            style ={styles.roundedButton}
            // onPress={() =>
            //     this.props.navigation.navigate('Profile')
            //     }
            >
                <Text style ={styles.textButton}> Continue </Text>
            </TouchableOpacity>
       
      
        </View>
    }
}



export default CompleteProfile;

