import React, {useContext, useState, useEffect} from 'react'

import { Context } from '../../context';
import { useDispatch, useSelector} from 'react-redux'
import { addChat } from '../../store/messages/actions';
import { getChatList } from '../../store/messages/selectors';
import { push, set, remove, onValue, update } from 'firebase/database'
import { chatsRef, messagesRef } from '../../services/firebase';

import ChatForm from '../ChatForm';


export default function AddChatForm() {

   // const dispatch = useDispatch();
   // const chatList = useSelector(getChatList)

    const {refChatInput} = useContext(Context);

    const submit = (event) => {
        event.preventDefault();
        const [chat_name] = event.target;
       
        const id = Date.now()

        update(chatsRef, {
            [id]: {
                id: id,
                name: chat_name.value,
                messages: []
            }
        })

        set(messagesRef(id), {
            [1]: {
              text: 'Hello', 
              author: 'BOT',
              id: 1
            } 
  
        })

        chat_name.value = ''
    }

  return (
    <ChatForm 
        submit = {submit} 
        refChatInput = {refChatInput}
    />
  )
}
