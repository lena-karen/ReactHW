import React from 'react'
import s from './index.module.css'
export default function Message({author, text}) {
  return (
    <div className = {s.container}>
        <p>Text: {text}</p>
        <p>Author: {author}</p>
    </div>
  )
}
