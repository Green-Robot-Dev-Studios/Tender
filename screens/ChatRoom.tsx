import React, { Children, useState } from 'react';
import { Button } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore()


function SignIn (props:any){
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);

    }
    return(
        
        <button onClick={ signInWithGoogle }> Sign In</button>  
        
    )

}

///////



function ChatRoom (){
    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(24);
    const [messages] = useCollectionData (query, {idField: 'id'});
    const [user] = useAuthState(firebase.auth());
    const [formValue, setFormValue] = useState("")
    const sendMessage = async(e:any) => {

        e.preventDefault();
        const user = firebase.auth().currentUser;
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            user : user?.uid

        })
        setFormValue('');

    }

    return(
        <>
        <section>
            {user ? <ChatRoom /> : <SignIn/>}
        </section>
        <div>
            {messages && messages.map(msg => <ChatMessage key ={msg.id} message={msg}/>)}
        </div>

        <form>
            <input value = {formValue}/> 
             {/* onChange ={ (e:any) => setFormValue(e.target.value)} */}
            <button type = "submit"> </button>
        </form>
     </>
       

    )
/////////


//////////
    function ChatMessage(props: any){
        const {text} = props.message;
        return <p> {text} </p>

    }

}

export default ChatRoom;