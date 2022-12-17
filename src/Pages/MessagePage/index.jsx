import React, {useContext, useEffect} from 'react'

import s from './index.module.css'
import { Context } from '../../context'
import AddMessageForm from '../../components/AddMessageForm'
import MessageContainer from '../../components/MessageContainer'

import { useParams, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from '../../store/messages/actions'
import { getChatList } from '../../store/messages/selectors'

export default function MessagePage() {  
  
  const chatList = useSelector(getChatList)
  const dispatch = useDispatch()

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
          dispatch(addMessage(newMessage, currentId))
        }, 1500)
        
      }
    }
  }, [chatList])

    if (!chatList[currentId-1] && chatList) {
      return <Navigate to = '/chats' replace />
    }

  return (
    <div className = {s.container}>
      {
        currentChat &&
        <div>
          <p>You are in chat named {currentChat.name}</p> 
          <AddMessageForm />
          <MessageContainer  />
        </div>
      }

    </div>
  )
}
