import { DOWNLOAD_WEATHER, 
         GET_SUCCESS, 
         GET_FAILURE } from "./actions"

const initialState = {
    current_weather: 
        { 
            temperature: '', 
            windspeed: '', 
            winddirection: '', 
        },
    error: false,
    loading: false
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOWNLOAD_WEATHER: 
            return {
                ...state,
                loading: true
            }

        case GET_SUCCESS:
            return {
                ...state,
                current_weather: action.payload,
                loading: false,
                error: false
            }

        case GET_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}