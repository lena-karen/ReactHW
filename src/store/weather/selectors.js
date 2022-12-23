export const selectWeather = (state) => state.weather.current_weather
export const selectLoading = (state) => state.weather.loading
export const selectError = (state) => state.weather.error