import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../store/profile/selectors'

export const PrivateRoute = ({component})  => {
    const isAuth = useSelector(selectAuth)

    if (!isAuth) {
       return <Navigate to = '/login'/> 
    }  
    return component 
}
