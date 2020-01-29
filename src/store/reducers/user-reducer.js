import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/actionTypes"

const initialState = {
  name: null,
  email: null,
}

const reducer = (state, action) => {
  if (typeof state === "undefined") return initialState
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state, // clona o objeto por causa de uma eventual adição no state.
        name: action.payload.name,
        email: action.payload.email,
      }
    case USER_LOGGED_OUT:
      return {
        ...state,
        name: null,
        email: null,
      }
    default:
      return state
  }
}

export default reducer
