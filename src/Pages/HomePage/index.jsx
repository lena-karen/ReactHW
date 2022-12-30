import React from 'react'
import s from './index.module.css'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
export default function HomePage() {
  return (
    <div>
        <h1>Welcome to our chats!</h1>
        <NavLink to = '/login' >
            <Button
                variant = "contained"
                size = 'large'
            >
                Sign In
            </Button>
        </NavLink>
        <NavLink to = '/signup' >
            <Button
                variant = "contained"
                size = 'large'
            >
                Sign Up
            </Button>
        </NavLink>
    </div>
  )
}
