import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { signUp } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../../store/profile/selectors';
export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
  //  const dispatch = useDispatch()

    const passwordChange = event => {
        setPassword(event.target.value)
    }
    const emailChange = event => {
        setEmail(event.target.value)
    }

    const submit = async event => {
        event.preventDefault()
        setError('')

        try {
            await signUp(email, password)
            navigate('/login')
        }
        catch (error) {
            setError(error.message)
            setEmail('')
            setPassword('')
        }
    }
  return (
    <>
        <Box 
            component = 'form' 
            sx = {
                {
                    display: 'flex',
                    alignItems: 'center',
                    '& .MuiTextField-root': {m: 4, width: '45ch', height: '5ch'},
                    '& .MuiButton-root': {m:4, width: '25ch', height: '5ch'}
                }
            }
            autoComplete = "off"
            onSubmit = {submit}
        >
            
            <TextField 
                name = 'email' 
                type = "email" 
                label = 'Your email'
                size = 'small'
                onChange = {emailChange}
            />
            <TextField 
                name = 'password' 
                type = "text" 
                label = 'Your password'
                size = 'small'
                onChange = {passwordChange}
            />

            
            <Button 
                variant = "contained"
                endIcon = {<SendIcon />}
                size = 'medium'
                type = 'submit'
            >
                Register
                </Button>

                <p>Already have an account? <Link to = '/login'> Sign in </Link> </p>
    
        </Box>
        {error && <p>{error}</p>}
    </>
  )
}
