import { USER_IN_LOCALSTORAGE, USER_LOGIN, USER_LOGOUT } from '../actions/types'

const initialState = null

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return action.data

  case USER_LOGOUT:
    return action.data

  case USER_IN_LOCALSTORAGE:
    return action.data

  default:
    return state
  }
}

export default userReducer
