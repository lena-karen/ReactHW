
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from "./actions"

const initialState = []

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return [
                ...state,
                action.payload
            ]

        case ADD_MESSAGE:
            console.log('state',state)
            const activeChat = state.find(el => el.id == action.payload.chat_id)
            activeChat.messages.push(action.payload.message)

            const newChatList = state.map(el => {
               if (el.id == action.payload.chat_id){
                   return activeChat
                } else return el;
               })
            return newChatList
        
        case DELETE_CHAT:
            return state.filter(el => el.id != action.payload)
  
        default:
            return state
    }
}