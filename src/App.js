import { useState,useEffect } from "react";
import {Button,FormControl,Input,InputLabel} from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([{username:'Shivanshu',message:'hey'},{username:'Shiv',message:'hello'}]);
  const [username,setUsername] = useState('');

  useEffect(() => {
     db.collection('messages')
     .orderBy('timestamp','desc')
     .onSnapshot(snapshot => {
       setMessages(snapshot.docs.map(doc => ({id:doc.id,message : doc.data()})))
     });
  },[])

  useEffect(() => {
    setUsername(prompt('Please enter your name:'));
  },[])
  const sendMessages = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
    <h1>Hello Messanger ✔</h1>
    <h2>Welcome {username}</h2>
    <form className="app_form">
    <FormControl className="app_formControl">
  <InputLabel>Enter a message...</InputLabel>
  <Input className="app_input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
  <IconButton className="app_iconButton" disabled={!input} variant="outlined" color="primary" onClick={sendMessages} type="submit"><SendIcon /></IconButton>
   </FormControl>
    </form>
    <FlipMove>
    {
      messages.map(({id,message}) => {return <Message key={id} username={username} message={message} />})
    }
    </FlipMove>
    </div>
  );
}

export default App;
