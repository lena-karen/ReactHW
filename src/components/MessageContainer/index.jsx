import React from 'react'
import Message from '../Message'
import s from './index.module.css'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getChatList } from '../../store/messages/selectors'

export default function MessageContainer() {
  const chatList = useSelector(getChatList)
  const {currentId} = useParams()
  
  const chat = chatList.find(el => el.id == currentId)

  return (
    <div className = {s.container}>
    {
        chat.messages.map(el => <Message {...el} key = {el.id}/>)
    }
    </div>
  )
}
