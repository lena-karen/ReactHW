import { createStore, compose, combineReducers, applyMiddleware} from 'redux'
import { profileReducer } from './profile/reducer'
import { chatsReducer } from './messages/reducer'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['profile']
}
const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)