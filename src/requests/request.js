export const getWeather = (/*callbackData, callbackErr, callbackLoad*/) => {
   // callbackErr(false)
   // callbackLoad(true)

    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,rain&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin&start_date=2022-12-22&end_date=2022-12-26')
    .then(res => res.json())
    .then(json => /*callbackData(json.current_weather))*/json.current_weather)
    .catch(err => /*callbackErr(true)*/ true)
    .finally(() => /*callbackLoad(false)*/false)
   // console.log()
}