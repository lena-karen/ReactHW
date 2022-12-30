import Button from '@mui/material/Button';
import React from 'react'
import s from './index.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { logOut } from '../../services/firebase';
import { selectAuth } from '../../store/profile/selectors';
import { toAuth } from '../../store/profile/actions';
export default function Nav() {
const isAuth = useSelector(selectAuth)
const navigate = useNavigate()
const dispatch = useDispatch()
const handleLogout = async () => {
    await logOut()
    dispatch(toAuth(false))
    console.log('/login', isAuth)
}
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
        {
            !isAuth && (
                <>
                    <NavLink to = '/login' >
                        <Button
                            variant = "contained"
                            size = 'large'
                        >
                            Login
                        </Button>
                    </NavLink>
                    <NavLink to = '/signup' >
                        <Button
                            variant = "contained"
                            size = 'large'
                        >
                            Registration
                        </Button>
                    </NavLink>
                </>
            )
        }
        
        {
            isAuth && (
                
                    <NavLink to = '/login' >
                        <Button
                            variant = "contained"
                            size = 'large'
                            onClick = {handleLogout}
                        >
                            Log out
                        </Button>
                    </NavLink>

            )
        }
    </nav>
  )
}
