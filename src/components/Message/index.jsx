import React from 'react'
import s from './index.module.css'
export default function Message({text}) {
  return (
    <div className = {s.container}>{text}</div>
  )
}
