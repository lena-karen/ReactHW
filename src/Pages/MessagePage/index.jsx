import React, {useCallback, useContext, useEffect} from 'react'

import s from './index.module.css'
import { Context } from '../../context'
import AddMessageForm from '../../components/AddMessageForm'
import MessageContainer from '../../components/MessageContainer'
import { messagesRef } from '../../services/firebase'
import { update } from 'firebase/database'
import { useParams, Navigate } from 'react-router-dom'

export default function MessagePage({chatList}) {  
  
  // const chatList = useSelector(getChatList)
  //const dispatch = useDispatch()

  const {currentId} = useParams()

  const currentChat = chatList.find(el => el.id == currentId)
 
  useEffect(() => {
    let msg;

    if (chatList.length) {
      msg = chatList.find(el => el.id == currentId).messages;
    
      if (msg.length && msg[msg.length - 1].author == 'user') {
        const index = msg.length + 1;

        const newMessage = {
          [index]: {
            id: index,
            text: "I'm BOT",
            author: 'BOT'            
          }

        }
        
        const timeOutId = setTimeout(() => {
          update(messagesRef(currentId), newMessage)
        }, 1500)
        
      }
    }
  }, [chatList])

 
  if (!chatList) {
    return <Navigate to = '/chats' replace />
  }

  return (
    <div className = {s.container}>
      {
        currentChat &&
        <div>
          <p>You are in chat named {currentChat.name}</p> 
          <AddMessageForm chatList = {chatList} />
          <MessageContainer  chatList = {chatList}/>
        </div>
      }

    </div>
  )
}
