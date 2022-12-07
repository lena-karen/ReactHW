import React, {useContext} from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import s from './index.module.css'
import { Context } from '../../context'
import ListItemText from '@mui/material/ListItemText'
export default function ChatListContainer() {
  const {chatList} = useContext(Context)

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List >
        {  
          chatList.map((el, idx) => {
            return (
              <ListItem key={idx}> 
                <ListItemText primary = {el.name} />
              </ListItem>
            )
          })

        } 
      </List>
    </Box>
  )
}
