import React, {useState, useContext} from 'react'

import { Context } from '../../context';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getChatList } from '../../store/messages/selectors';
import { addMessageWithThunk } from '../../store/messages/actions'

import MessageForm from '../MessageForm';


export default function AddMessageForm() {

    const {refMessageInput} = useContext(Context);
    const chatList = useSelector(getChatList)
    const dispatch = useDispatch()
    const {currentId} = useParams();

    const [msgText, setMsgText] = useState('')
    const submit = (event) => {
        event.preventDefault();
        const [message] = event.target;
        const chat = chatList.find(el => el.id == currentId);

        const index = chat.messages.length + 1;

        const newMessage = {
            id: index, 
            text: msgText, 
            author: 'user'
        }
        dispatch(addMessageWithThunk(newMessage, currentId))
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
