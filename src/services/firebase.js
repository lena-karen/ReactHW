
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { getDatabase, ref } from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyBtCm1nWb80RX9QKBO6QrL1hLQFj51q30o",
  authDomain: "chats-10235.firebaseapp.com",
  databaseURL: "https://chats-10235-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chats-10235",
  storageBucket: "chats-10235.appspot.com",
  messagingSenderId: "402677504099",
  appId: "1:402677504099:web:df3c40c6f1054f84438056"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)
export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)
export const logOut = async () => await signOut(firebaseAuth)
const db = getDatabase(app)
export const userRef = ref(db, 'user')
export const chatsRef = ref(db, 'chats')
export const chatByIdRef = (chatId) => ref(db, `chats/${chatId}`)
export const messagesRef = (chatId) => ref(db, `chats/${chatId}/messages`)

