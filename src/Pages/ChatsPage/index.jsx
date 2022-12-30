import React, {useContext, useEffect, useState} from 'react'

import ChatListContainer from '../../components/ChatListContainer'
import s from './index.module.css'
import AddChatForm from '../../components/AddChatForm'

import { Outlet } from 'react-router-dom'
import { Context } from '../../context'

export default function ChatsPage({chatList}) {
  const {refChatInput} = useContext(Context)
  useEffect(() => {refChatInput.current.focus();}, [])

  return (
    <div className = {s.container}>
      <AddChatForm />
      <ChatListContainer chatList = {chatList} />
      <Outlet />
    </div>
  )
}
