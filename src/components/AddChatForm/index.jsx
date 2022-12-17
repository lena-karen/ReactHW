import React, {useContext} from 'react'

import { Context } from '../../context';
import { useDispatch, useSelector} from 'react-redux'
import { addChat } from '../../store/messages/actions';
import { getChatList } from '../../store/messages/selectors';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function AddChatForm() {

    const dispatch = useDispatch();
    const chatList = useSelector(getChatList)

    const {refChatInput} = useContext(Context);
    const submit = (event) => {
        event.preventDefault();
        const [chat_name] = event.target;

        dispatch(addChat({
            id: chatList.length + 1, 
            name: chat_name.value, 
            messages: [{
                id: 1,
                text: 'Hello',
                author: 'BOT'
            }]
        }))
        chat_name.value = ''
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
            name = 'chat_name' 
            type = "text" 
            label = 'Enter new chat name'
            size = 'small'
            inputRef = {refChatInput}
        />

        <Button 
            variant = "contained"
            endIcon = {<SendIcon />}
            size = 'small'
            type = 'submit'
        >
            Create new chat
        </Button>
    </Box>
  )
}
