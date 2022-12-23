export const DOWNLOAD_WEATHER = 'DOWNLOAD_WEATHER'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAILURE = 'GET_FAILURE'

export const getWeatherRequest = () => ({type: DOWNLOAD_WEATHER})
export const getWeatherSuccess = (payload) => ({type: GET_SUCCESS, payload})
export const getWeatherFailure = (err) => ({type: GET_FAILURE, payload: err})

export const downloadWeather = () => (dispatch) => {
    dispatch(getWeatherRequest())

    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,rain&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin&start_date=2022-12-22&end_date=2022-12-26')
        .then(res => res.json())
        .then(json => 
            dispatch(getWeatherSuccess(json.current_weather)))
        .catch(err => dispatch(getWeatherFailure(true))) 
}