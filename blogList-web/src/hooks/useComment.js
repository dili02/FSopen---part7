import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setNotification } from '../redux/actions/notification.actions'
import { createNewCommentAction } from '../redux/actions/blog.actions'

export const useComments = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const addComment = async comment => {
    try {
      await dispatch(createNewCommentAction(id, comment))
      dispatch(setNotification(
        'Comment created successfully :)',
        3000
      ))
    } catch (error) {
      dispatch(setNotification(
        error.response.data.error,
        3000
      ))
    }
  }

  return {
    addComment
  }
}

export default useComments
