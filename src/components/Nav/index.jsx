import Button from '@mui/material/Button';
import React from 'react'
import s from './index.module.css'

import { NavLink } from 'react-router-dom'

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

        <NavLink to = '/weather' >
            <Button
                variant = "contained"
                size = 'large'
            >
                Weather
            </Button>
        </NavLink>
    </nav>
  )
}
