import React, {useContext} from 'react'
import Message from '../Message'
import { Context } from '../../context'
import s from './index.module.css'
export default function MessageContainer() {
    const {messageList} = useContext(Context);
  return (
    <div className = {s.container}>
    {
        messageList.map(el => <Message {...el} key = {el.id}/>)
    }
    </div>
  )
}
