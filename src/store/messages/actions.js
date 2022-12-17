export const ADD_CHAT = 'ADD_CHAT'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_CHAT = 'DELETE_CHAT'

export const addChat = payload => ({type: ADD_CHAT, payload})
export const addMessage = (message, chat_id) => ({type: ADD_MESSAGE, payload: {message, chat_id}})
export const deleteChat = (payload) => ({type: DELETE_CHAT, payload})