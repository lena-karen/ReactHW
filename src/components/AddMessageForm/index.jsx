import React, {useContext} from 'react'
import { Context } from '../../context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';

export default function AddMessageForm() {

    const {chatList, refMessageInput, addMessage} = useContext(Context);
    const {currentId} = useParams();

    const submit = (event) => {
        event.preventDefault();
        const [message] = event.target;
        
        const chat = chatList.find(el => el.id == currentId);

        const index = chat.messages.length + 1;

        const newMessage = {
            id: index, 
            text: message.value, 
            author: 'user'
        }
        addMessage(newMessage, currentId)
            
        message.value = ''
    }
  return (
    <Box 
        component = 'form' 
        sx = {
            {
                display: 'flex',
                '& .MuiTextField-root': {m: 4, width: '45ch', height: '5ch'},
                '& .MuiButton-root': {m:4, width: '25ch', height: '5ch'}
            }
        }
        autoComplete = "off"
        onSubmit = {submit}
    >
        <TextField 
            name = 'message' 
            type = "text" 
            label = 'Your message'
            size = 'small'
            inputRef = {refMessageInput}
        />

        <Button 
            variant = "contained"
            endIcon = {<SendIcon />}
            size = 'medium'
            type = 'submit'
        >
            Send
        </Button>
    </Box>
  )
}
