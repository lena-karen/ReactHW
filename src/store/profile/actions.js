import { TOGGLE_NAME, IS_AUTH } from "./types"

export const toggleName = payload => ( {type: TOGGLE_NAME, payload})
export const toAuth = payload => ( {type: IS_AUTH, payload})