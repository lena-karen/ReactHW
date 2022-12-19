import React from 'react'
import s from './index.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
export default function ChatForm({submit, refChatInput}) {
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
