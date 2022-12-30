import React from 'react'
import { Route, Redirect, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../store/profile/selectors'

export const PublicRoute = ({component})  => {
    return component 
}
