const initialState = {
    name: 'Default Name',
    showName: true
}
export const profileReducer = (state = initialState, action) => {
    const {type} = action
    switch (type) {
        case 'TOGGLE_NAME':
            return {
                ...state,
                showName: !state.showName,
            }
        default:
            return state
    }
}