import { createStore, compose, combineReducers} from 'redux'
import { profileReducer } from './profile/reducer'
import { chatsReducer } from './messages/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer
})
export const store = createStore(rootReducer, composeEnhancers())