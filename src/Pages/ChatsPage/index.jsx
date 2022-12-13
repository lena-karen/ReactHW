import React, {useContext, useEffect} from 'react'
import { Context } from '../../context'
import ChatListContainer from '../../components/ChatListContainer'
import s from './index.module.css'
import AddChatForm from '../../components/AddChatForm'
import { Outlet } from 'react-router-dom'

export default function ChatsPage() {

  const {refChatInput} = useContext(Context)
  useEffect(() => {refChatInput.current.focus();}, [])
  return (
    <div className = {s.container}>
      <AddChatForm />
      <ChatListContainer />
      <Outlet />
    </div>
  )
}
