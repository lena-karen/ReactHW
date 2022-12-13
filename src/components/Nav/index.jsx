import Button from '@mui/material/Button';
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './index.module.css'
export default function Nav() {
  return (
    <nav className = {s.container} >
        <NavLink to = '/' >
            <Button  
                variant = "contained"
                size = 'large'
            >
                Home
            </Button>
            
        </NavLink>

        <NavLink to = '/profile' >
            <Button 
                variant = "contained"
                size = 'large'
            >
                Profile
            </Button>           
        </NavLink>

        <NavLink to = '/chats' >
            <Button
                variant = "contained"
                size = 'large'
            >
                Chats
            </Button>
        </NavLink>
    </nav>
  )
}
