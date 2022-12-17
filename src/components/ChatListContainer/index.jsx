import React, {useEffect, useContext} from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import s from './index.module.css'

import { Context } from '../../context'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteChat } from '../../store/messages/actions'
import { getChatList } from '../../store/messages/selectors'

export default function ChatListContainer() {

  const {refChatInput} = useContext(Context)
  useEffect(() => {refChatInput.current.focus();}, [])

  const chatList = useSelector(getChatList)
  const dispatch = useDispatch()

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
                      onClick = {() => dispatch(deleteChat(el.id))}
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
