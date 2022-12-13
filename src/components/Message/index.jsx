import React from 'react'

import s from './index.module.css'
export default function Message({author, text}) {
  return (
    <div className = {s.container}>
        <p><span>{author}:</span> {text}</p> 
    </div>
  )
}
