import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setToken } from '../services/blogs.service'

import { userLoginAction, userLogoutAction, userLoggedAction } from '../redux/actions/auth.actions'
import { setNotification } from '../redux/actions/notification.actions'

export default function useAuth () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    getUserInLocalStorage()
  }, [])

  const getUserInLocalStorage = async () => {
    const isUserInLocalStorage = localStorage.getItem('loggedBlogAppUser')

    if (isUserInLocalStorage) {
      const user = JSON.parse(isUserInLocalStorage)
      setToken(user.token)
      await dispatch(userLoggedAction(user))
    }
  }

  const loginUser = async ({ username, password }) => {
    try {
      await dispatch(userLoginAction(username, password))

      history.push('/')
    } catch (error) {
      await dispatch(setNotification(
        error.response.data.error,
        3000
      ))
    }
  }

  const logout = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch(userLogoutAction())
  }

  const isUserLogged = () => !!user

  return {
    user,
    loginUser,
    getUserInLocalStorage,
    logout,
    isUserLogged
  }
}
