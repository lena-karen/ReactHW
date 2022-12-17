import React, {useState, useContext} from 'react'

import { Context } from '../../context';
import { useParams } from 'react-router-dom';
import { addMessage } from '../../store/messages/actions';
import { useSelector, useDispatch } from 'react-redux'
import { getChatList } from '../../store/messages/selectors';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function AddMessageForm() {

    const {refMessageInput} = useContext(Context);
    const chatList = useSelector(getChatList)
    const dispatch = useDispatch()
    const {currentId} = useParams();

    const [msgText, setMsgText] = useState('')
    const submit = (event) => {
        event.preventDefault();
        const [message] = event.target;
        const chat = chatList.find(el => el.id == currentId);

        const index = chat.messages.length + 1;

        const newMessage = {
            id: index, 
            text: msgText, 
            author: 'user'
        }
        dispatch(addMessage(newMessage, currentId))
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
            onChange = {event => setMsgText(event.target.value)}
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
