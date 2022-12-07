import React, {useContext, useRef} from 'react'
import s from './index.module.css'
import { Context } from '../../context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function AddMessageForm() {

    const {messageList, setMessageList, refInput} = useContext(Context);
    const submit = (event) => {
        event.preventDefault();
        const [message] = event.target;
        const index = messageList.length + 1;
        setMessageList([...messageList, 
            {
                id: index, 
                text: message.value, 
                author: 'user'
            }])
        message.value = ''
    }
  return (
    <Box 
        component = 'form' 
        sx = {
            {
                display: 'flex',
                '& .MuiTextField-root': {m: 4, width: '45ch'},
                '& .MuiButton-root': {m:4, width: '25ch'}
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
            inputRef = {refInput}
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
