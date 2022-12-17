import '../../App.css'

import { useRef } from 'react'
import { Context } from '../../context'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import { Routes, Route } from 'react-router-dom'

import Nav from '../Nav'
import HomePage from '../../Pages/HomePage'
import ChatsPage from '../../Pages/ChatsPage'
import ProfilePage from '../../Pages/ProfilePage'
import MessagePage from '../../Pages/MessagePage'

function App() {
 
  const refChatInput = useRef(null)

  let theme = createTheme({
    palette: {
      primary: blue,
    },
  })
  theme = responsiveFontSizes(theme)

  return (
      <ThemeProvider theme = {theme}>
        <Context.Provider value = {{refChatInput}}>
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

export default App
