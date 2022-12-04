import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../../context';
export default function AddMessageForm() {

    const {messageList, setmessageList} = useContext(Context);

    const submit = (event) => {
        event.preventDefault();
        const [message, author] = event.target;
        const index = messageList.length + 1;
        setmessageList([...messageList, 
            {
                id: index, 
                text: message.value, 
                author: author.value
            }])
    }
  return (
    <form className = {s.container} onSubmit = {submit}>
        <input name = 'message' type="text" placeholder='Your message'/>
        <input name = 'author' type="text" placeholder='Your name'/>
        <button>Send</button>
    </form>
  )
}
