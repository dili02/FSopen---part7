import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../redux/actions/notification.actions'
import { getUsersService } from '../services/user.service'

export const useUser = () => {
  const dispatch = useDispatch()

  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    try {
      const usersFetch = await getUsersService()
      setUsers(usersFetch)
    } catch (error) {
      await dispatch(setNotification(
        error.response.data.error,
        3000
      ))
    }
  }

  return {
    users,
    getAllUsers
  }
}

export default useUser
