import '../../App.css';
import {useEffect, useState} from 'react'
import { Context } from '../../context';
import {messages} from '../data/messageList';
import AddMessageForm from '../AddMessageForm';
import MessageContainer from '../MessageContainer';

function App() {
  const [messageList, setmessageList] = useState([])
 useEffect(() => {
    const res = JSON.parse(localStorage.getItem('messageList'))
    if (res) {
      setmessageList(res)
    }
  }, [])
 useEffect(() => {
    localStorage.setItem('messageList', JSON.stringify(messageList))
    if (messageList.length) {
      setTimeout(() => {
        alert(`Hello, ${messageList[messageList.length-1].author}`)
      }, 2000)
    }
  }, [messageList])
  return (
    <Context.Provider value = {{messageList, setmessageList}}>
      <AddMessageForm />
      <MessageContainer />


    </Context.Provider>
  );
}

export default App;
