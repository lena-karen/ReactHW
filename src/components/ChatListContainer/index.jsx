import React, {useContext} from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import s from './index.module.css'
import { Context } from '../../context'
import { Link } from 'react-router-dom'

export default function ChatListContainer() {
  const {chatList} = useContext(Context)

  return (
    <div className = {s.container}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <h2>List of existed chats</h2>
        <List >
          {  
            chatList.map((el, idx) => {
              return (
               <Link key={idx} className = {s.list_item} to = {`/chats/${el.id}`} > 
                  {el.name}
                </Link>
              )
            })
          } 
        </List>
      </Box>
      
    </div>
  )
}
