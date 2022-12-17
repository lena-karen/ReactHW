import React, { useCallback, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { store } from '../../store'
import { toggleName } from '../../store/profile/actions'
import s from './index.module.css'

export default function ProfilePage() {
  const {name, showName} = useSelector((store) => store.profile)
  const [visible, setVisible] = useState('')
  const dispath = useDispatch()

  const setShowName = useCallback(() => {
    dispath(toggleName(visible))
  }, [dispath])

  return (
    <div className = {s.container}>
      <input 
        type = "checkbox" 
        checked = {showName}
        value = {visible}
        onChange = {setShowName}
      />
      <span>Show name</span>
      {showName && <h2>{name}</h2>}
    </div>
  )
}
