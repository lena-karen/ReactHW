import { weatherReducer } from './reducer'
import { getWeatherRequest, getWeatherSuccess, getWeatherFailure } from './actions'

describe('testing weather request reducer', () => {

    it('returns initial state', () => {
        const expectedState = {
            current_weather: 
            { 
                temperature: '', 
                windspeed: '', 
                winddirection: '', 
            },
            error: false,
            loading: false
        }

        const receivedState = weatherReducer(undefined, getWeatherRequest)
        expect(receivedState).toEqual(expectedState)
    })

    it('state snapshot', () => {
        const state = weatherReducer(undefined, '')
        expect(state).toMatchSnapshot()
    })

    it('return state after GET_SUCCESS action', () => {
        const state = weatherReducer(undefined, getWeatherSuccess)
        expect(state.error).toEqual(false)
        expect(state.loading).toEqual(false)
    })

    it('return state after GET_FAILURE action', () => {
        const state = weatherReducer(undefined, getWeatherFailure)
        expect(state.loading).toEqual(false)
    })

    it('snapshot after GET_SUCCESS action', () => {
        const state = weatherReducer(undefined, getWeatherSuccess)
        expect(state).toMatchSnapshot()
    })
})