import '../../App.css'
import {useEffect, useState, useRef} from 'react'
import { Context } from '../../context'


import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import {Routes, Route} from 'react-router-dom'
import Nav from '../Nav'
import HomePage from '../../Pages/HomePage'
import ChatsPage from '../../Pages/ChatsPage'
import ProfilePage from '../../Pages/ProfilePage'
import MessagePage from '../../Pages/MessagePage'

function App() {
 
  const [chatList, setChatList] = useState([])
  const [messageList, setMessageList] = useState([])
  const refChatInput = useRef(null)

  let theme = createTheme({
    palette: {
      primary: blue,
    },
  })
  theme = responsiveFontSizes(theme)

  const addChat = (chat) => setChatList([...chatList, {id: chat.id, name: chat.name, messages: chat.messages}])
 

  useEffect(() => {
    const chatList = JSON.parse(localStorage.getItem('chatList'))
    if (chatList) setChatList(chatList)
  },[])

  useEffect(() => {
    localStorage.setItem('chatList', JSON.stringify(chatList))
  }, [chatList])
  //let currentId;
  //if (chatList.length) {
   // currentId = chatList[chatList.length-1].id;
  //}

  const addMessage = (message, id) => {
    const activeChat = chatList.find(el => el.id == id)
    activeChat.messages.push(message)
  

    setChatList(chatList.map(el => {
     if (el.id == id){
        return activeChat
     } else return el;
    }))
  }
  
  return (
    <ThemeProvider theme = {theme}>
      <Context.Provider value = {{messageList, setMessageList, refChatInput, 
        chatList, setChatList, addChat, addMessage}}>
        <Nav />
        <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/profile' element = {<ProfilePage/>}/>
          <Route path = '/chats' element = {<ChatsPage/>}>
            <Route path = ':currentId' element = {<MessagePage />} />
            {/* <Route path = 'nochat' element = {<NoChat />}/> */}
          </Route>
          <Route path = '*' element = {<p>Page not found</p>}/>
        </Routes>

      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
