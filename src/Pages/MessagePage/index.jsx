import React, {useContext, useEffect} from 'react'
import s from './index.module.css'
import { Context } from '../../context'
import AddMessageForm from '../../components/AddMessageForm'
import MessageContainer from '../../components/MessageContainer'
import { useParams, Navigate } from 'react-router-dom'
export default function MessagePage() {
  const {chatList, addMessage} = useContext(Context)
  const {currentId} = useParams()

  const currentChat = chatList.find(el => el.id == currentId)
 
  useEffect(() => {
   let msg;

   if (chatList.length) {
       msg = chatList.find(el => el.id == currentId).messages;
    
     if (msg.length && msg[msg.length - 1].author == 'user') {
       const index = msg.length + 1;
       const newMessage = {
           id: index,
           text: "I'm BOT",
           author: 'BOT'
         }
      
       const timeOutId = setTimeout(() => {

        addMessage(newMessage, currentId)
       }, 1500)
     }}}, [chatList])

     if (!chatList[currentId-1] && chatList) {
      return <Navigate to = '/chats' replace />
    }
  return (
    <div className = {s.container}>
        <p>You are in chat named {currentChat.name}</p> 
        <AddMessageForm />
        <MessageContainer chat = {currentChat} />
    </div>
  )
}
