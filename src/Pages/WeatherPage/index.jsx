import React, {useEffect} from 'react'

import { Button, CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { downloadWeather } from '../../store/weather/actions'
import { selectWeather, selectError, selectLoading } from '../../store/weather/selectors'
import s from './index.module.css'

export default function WeatherPage() {
  const dispatch = useDispatch()
  const weather = useSelector(selectWeather)
  const error = useSelector(selectError)
  const loading = useSelector(selectLoading)

  const requestWeather = () => dispatch(downloadWeather()) 
  useEffect(() => requestWeather(), [])

  const getContext = () => {
    if (loading) {
      return <CircularProgress />
    }
    if (error) {
      return (
        <Button 
          variant = "contained"
          size = 'large'
          onClick = {requestWeather}
        >Error! Try again
        </Button>
      )
    }
    return (
      <div>
        <p>The temperature is <span>{weather.temperature}C</span></p>
        <p>The windspeed is <span>{weather.windspeed} km/h</span></p>
        <p>The wind direction is <span>{weather.winddirection}</span></p>
    </div>
    )
  }
  return (
    <div className = {s.weather_page}>
      
      <h2>Today's weather in Berlin is </h2>     
      {
        getContext()
      }
    </div>
  )
}
