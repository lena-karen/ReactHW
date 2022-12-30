import { chatsRef, messagesRef } from '../../services/firebase'
import { set, push } from 'firebase/database'
export const ADD_CHAT = 'ADD_CHAT'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_CHAT = 'DELETE_CHAT'

export const addChat = payload => ({type: ADD_CHAT, payload})

// export const addChatFromFirebase = payload => async () => {
//     set(chatsRef, {
//         ...chatsDB, 
//         [id]: {
//         id: id, 
//         name: chat_name.value,
//         messages: [{
//                     id: 1,
//                     text: 'Hello',
//                     author: 'BOT'
//                 }]
//     }})
// }

export const addMessage = (message, chat_id) => ({type: ADD_MESSAGE, payload: {message, chat_id}})
    

export const addMessageWithThunk = (message, chat_id) => (dispatch, getState) => {
   
    dispatch(addMessage(message, chat_id))
    push(messagesRef(chat_id), message)
    if (message.author !== 'BOT') {
        const index = message.id + 1;
        const newMessage = {
            id: index,
            text: "I'm BOT",
            author: 'BOT'
        }

        setTimeout(() => {
            dispatch(addMessage(newMessage, chat_id))
            push(messagesRef(chat_id), newMessage)
        }, 1500)
    }
}


export const deleteChat = (payload) => ({type: DELETE_CHAT, payload})