import '../../App.css'

import { useRef, useState, useEffect } from 'react'
import { Context } from '../../context'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import { Routes, Route } from 'react-router-dom'

import Nav from '../Nav'
import HomePage from '../../Pages/HomePage'
import ChatsPage from '../../Pages/ChatsPage'
import ProfilePage from '../../Pages/ProfilePage'
import MessagePage from '../../Pages/MessagePage'
import WeatherPage from '../../Pages/WeatherPage'
import Login from '../Login'
import SignUp from '../SignUp'
import { PublicRoute } from '../PublicRoute'
import { PrivateRoute } from '../PrivateRoute'
import { firebaseAuth, chatsRef, messagesRef } from '../../services/firebase'
import { onValue } from 'firebase/database'
import { useDispatch, useSelector } from 'react-redux'
import { toAuth } from '../../store/profile/actions'
import { selectAuth } from '../../store/profile/selectors'
import { getChatList } from '../../store/messages/selectors';
function App() {
 
  const refChatInput = useRef(null)

  let theme = createTheme({
    palette: {
      primary: blue,
    },
  })
  theme = responsiveFontSizes(theme)
 // const chatList = useSelector(getChatList)
  const [chatsDB, setChatsDB] = useState({})
  const [chatList, setChatList] = useState([])
//  const [messagesDB, setMessagesDB] = useState({})
 // const [authed, setAuthed] = useState(false)
//  const dispatch = useDispatch()
//  const authenticated = useSelector(selectAuth)
  // useEffect(() => {
  //   const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
  //     if(user) {
  //       dispatch(toAuth(true))
  //     }
  //     else {
  //       dispatch(toAuth(false))
  //     }
  //   })
  //   return unsubscribe
  // }, [])


  useEffect(() => {
    onValue(chatsRef, (snapshot) => {
      const data = snapshot.val()

      if (data == null) {
        setChatList([])
      } else {
        const newChat = Object.entries(data).map(el => ({
          name: el[1].name,
          messages: el[1].messages,
          id: el[1].id
        }))   
        setChatList(newChat)     
      }
    })
 
  }, [])
  return (

      <ThemeProvider theme = {theme}>
        <Context.Provider value = {{refChatInput}}>
          <Nav />
          <Routes>
              <Route path = '/' element = {<HomePage/>}/>

              <Route path = '/login' 
                     element = {<PublicRoute component = {<Login />} />} />

              <Route path = '/signup' element = {<SignUp />} />

              <Route path = '/weather' element = {<WeatherPage/>} />

              <Route path = '/profile' element = {<ProfilePage/>}/>

              <Route path = '/chats' 
                     element = {<PrivateRoute 
                                  component = { <ChatsPage chatsDB = {chatsDB} chatList = {chatList} /> } 
                                />}
              >
                <Route path = ':currentId' element = {<MessagePage chatList = {chatList} />} />
              </Route>


            <Route path = '*' element = {<p>Page not found</p>}/>
          </Routes>

        </Context.Provider>
      </ThemeProvider>
  );
}

export default App
