import React, {useContext} from 'react'

import { Context } from '../../context';
import { useDispatch, useSelector} from 'react-redux'
import { addChat } from '../../store/messages/actions';
import { getChatList } from '../../store/messages/selectors';

import ChatForm from '../ChatForm';


export default function AddChatForm() {

    const dispatch = useDispatch();
    const chatList = useSelector(getChatList)

    const {refChatInput} = useContext(Context);
    const submit = (event) => {
        event.preventDefault();
        const [chat_name] = event.target;

        dispatch(addChat({
            id: chatList.length + 1, 
            name: chat_name.value, 
            messages: [{
                id: 1,
                text: 'Hello',
                author: 'BOT'
            }]
        }))
        chat_name.value = ''
    }

  return (
    <ChatForm 
        submit = {submit} 
        refChatInput = {refChatInput}
    />
  )
}
