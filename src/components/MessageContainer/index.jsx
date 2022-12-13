import React from 'react'
import Message from '../Message'
import s from './index.module.css'
export default function MessageContainer({chat}) {

  return (
    <div className = {s.container}>
    {
        chat.messages.map(el => <Message {...el} key = {el.id}/>)
    }
    </div>
  )
}
