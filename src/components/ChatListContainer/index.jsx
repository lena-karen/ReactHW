import React, {useEffect, useContext, useState} from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import s from './index.module.css'

import { Context } from '../../context'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteChat } from '../../store/messages/actions'
import { getChatList } from '../../store/messages/selectors'
import { remove, val, onValue } from 'firebase/database'
import { chatByIdRef, chatsRef } from '../../services/firebase'
export default function ChatListContainer({chatList}) {

  const {refChatInput} = useContext(Context) 
 // const [chats, setChats] = useState(chatList)
  useEffect(() => {refChatInput.current.focus();}, [])

  const onDelete = (id) => {
    
    remove(chatByIdRef(id))

  }
 
  //const chatList = useSelector(getChatList)
 // const dispatch = useDispatch()

  return (
    <div className = {s.container}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <h2>List of existed chats</h2>
        <List >
           {
              chatList.map((el, idx) => (
                  <div className = {s.list} key={idx}>
                    
                    <Link  className = {s.list_item} to = {`/chats/${el.id}`} > 
                      {el.name}
                    </Link>
                    <Link 
                      onClick = {() => onDelete(el.id)}
                      to = '/chats' className = {s.close}>
                    x
                    </Link>
                  </div>
                )
              )
           }
        </List>
      </Box>
      
    </div>
  )
}
