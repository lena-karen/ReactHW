import React from 'react'
import PropTypes from 'prop-types'
import s from './index.module.css'
export default function Message({author, text}) {
  return (
    <div className = {s.container}>
        <p><span>{author}:</span> {text}</p> 
    </div>
  )
}
