import React,{forwardRef} from 'react';
import "./Message.css";
import {Card,Typography,CardContent} from '@material-ui/core';
const Message = forwardRef((props,ref) => {
    const username = props.username;
    const message = props.message;
    const isUser = username === message.username;
    return (
        <div ref = {ref} className={`message && ${isUser && 'message_user'}`}>
        <Card className={isUser ? "message_userCard" : "message_guestCard"}>
      <CardContent>
        <Typography variant="h5" component="h2">
        { !isUser && `${message.username || 'Unknown User'}: ` }{message.message}
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}
)
export default Message;
