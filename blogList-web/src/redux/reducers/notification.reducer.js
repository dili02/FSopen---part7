import { NOTIFICATION_SET, NOTIFICATION_CLEAR } from '../actions/types'

const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case NOTIFICATION_SET:
    // clearTimeout(state.delay)
    return action.message

  case NOTIFICATION_CLEAR:
    return null

  default:
    return state
  }
}

export default notificationReducer
