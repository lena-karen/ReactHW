import React, {useState, useContext} from 'react'

import { Context } from '../../context';
import { useParams } from 'react-router-dom';

import { push, set, update } from 'firebase/database'
import { messagesRef, chatsRef, chatByIdRef } from '../../services/firebase';
import MessageForm from '../MessageForm';


export default function AddMessageForm({chatList}) {

    const {refMessageInput} = useContext(Context);
   // const chatList = useSelector(getChatList)
   // const dispatch = useDispatch()
    const {currentId} = useParams();

    const [msgText, setMsgText] = useState('')

    const submit = (event) => {
        event.preventDefault();
        const [message] = event.target;
        const chat = chatList.find(el => el.id == currentId);

        const index = chat.messages.length + 1;


        const newMessage = {
          [index]: {
            text: msgText, 
            author: 'user',
            id: index
          } }

      update(messagesRef(currentId), newMessage)

    //   setTimeout(() => {
    //     const index = chat.messages.length + 1;
    //     const newBotMessage = {
    //       [index]: {
    //         text: "I'm BOT", 
    //         author: 'BOT',
    //         id: index
    //       } }
    //     update(messagesRef(currentId), newBotMessage)
    // }, 1500)


        message.value = ''
    }
  return (
    <MessageForm 
        submit = {submit} 
        setMsgText = {setMsgText} 
        refMessageInput = {refMessageInput} 
    />
  )
}
