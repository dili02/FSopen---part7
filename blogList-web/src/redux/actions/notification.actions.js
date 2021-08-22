import { NOTIFICATION_SET, NOTIFICATION_CLEAR } from './types'

export const setNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch({
      type: NOTIFICATION_SET,
      message,
      delay: setTimeout(() => {
        dispatch(clearNotification(null))
      }, delay)
    })
  }
}

export const clearNotification = () => {
  return {
    type: NOTIFICATION_CLEAR,
    message: null
  }
}
