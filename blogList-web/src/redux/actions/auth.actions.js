import { USER_LOGIN, USER_LOGOUT, USER_IN_LOCALSTORAGE } from './types'
import { loginService } from '../../services/auth.service'

export const userLoginAction = (username, password) => {
  return async dispatch => {
    const user = await loginService({
      username,
      password
    })

    window.localStorage.setItem(
      'loggedBlogAppUser',
      JSON.stringify(user)
    )

    dispatch({
      type: USER_LOGIN,
      data: user
    })
  }
}

export const userLogoutAction = () => {
  return dispatch => {
    const user = null
    dispatch({
      type: USER_LOGOUT,
      data: user
    })
  }
}

export const userLoggedAction = (user) => {
  return async dispatch => {
    dispatch({
      type: USER_IN_LOCALSTORAGE,
      data: user
    })
  }
}
