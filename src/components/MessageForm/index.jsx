import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function MessageForm({submit, setMsgText, refMessageInput}) {
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
