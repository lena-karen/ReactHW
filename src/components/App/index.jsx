import '../../App.css';
import {useEffect, useState, useRef} from 'react'
import { Context } from '../../context';
import {messages} from '../data/messageList';
import { chats } from '../data/chatList';
import AddMessageForm from '../AddMessageForm';
import MessageContainer from '../MessageContainer';
import ChatListContainer from '../ChatListContainer';
import s from './index.module.css'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

function App() {
  const [messageList, setMessageList] = useState([])
  const [chatList, setChatList] = useState(chats)
  const refInput = useRef(null)
  let theme = createTheme({
    palette: {
      primary: blue,
    },
  })
  theme = responsiveFontSizes(theme)
 //useEffect(() => {
   // inputRef.current
   /* const res = JSON.parse(localStorage.getItem('messageList'))
    if (res) {*/
   //   setmessageList(res)
  //  }
  //}, [])

 useEffect(() => {
    refInput.current.focus();
   // localStorage.setItem('messageList', JSON.stringify(messageList))
    if (messageList.length && messageList[messageList.length - 1].author == 'user') {
      const index = messageList.length + 1;
      const newMessage = {
          id: index,
          text: "I'm BOT",
          author: 'BOT'
        }
     
      const timeOutId = setTimeout(() => {
        setMessageList([...messageList, newMessage])
      }, 1500)
     // clearTimeout(timeOutId)
     // console.log(messageList)
    }
  }, [messageList])
  return (
    <ThemeProvider theme = {theme}>
      <Context.Provider value = {{messageList, setMessageList, refInput, chatList}}>
        <AddMessageForm />
        <div className = {s.main_block}>
          <ChatListContainer />
          <MessageContainer />
        </div>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
