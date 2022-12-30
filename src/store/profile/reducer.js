import { TOGGLE_NAME, IS_AUTH } from "./types"
const initialState = {
    name: 'Default Name',
    showName: true,
    isAuth: false
}
export const profileReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case TOGGLE_NAME:
            return {
                ...state,
                showName: !state.showName,
            }

        case IS_AUTH:
            return {
                ...state,
                isAuth: payload
            }

        default:
            return state
            
    }
}