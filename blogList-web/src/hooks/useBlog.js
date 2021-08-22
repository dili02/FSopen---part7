import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogsAction, addLikeBlogAction, deleteBlogAction, createNewBlogAction } from '../redux/actions/blog.actions'
import { setNotification } from '../redux/actions/notification.actions'
import { useHistory } from 'react-router-dom'

export default function useBlog () {
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    getAllBlogs()
  }, [])

  const getAllBlogs = async () => {
    try {
      await dispatch(getAllBlogsAction())
    } catch (error) {
      dispatch(setNotification(
        error.response.data.error,
        3000
      ))
    }
  }

  const addLikeBlog = async blog => {
    try {
      await dispatch(addLikeBlogAction(blog))
      dispatch(setNotification(
        'like added successfully',
        3000
      ))
    } catch (error) {
      dispatch(setNotification(
        error.response.data.error,
        3000
      ))
    }
  }

  const deleteBlog = async id => {
    try {
      await dispatch(deleteBlogAction(id))
      dispatch(setNotification(
        'blog deleted successfully',
        3000
      ))
      history.push('/')
    } catch (error) {
      dispatch(setNotification(
        error.response.data.error,
        3000
      ))
    }
  }

  const newBlog = async blog => {
    try {
      await dispatch(createNewBlogAction(blog))
    } catch (error) {
      dispatch(setNotification(
        error.response.data.error,
        3000
      ))
    }
  }

  return {
    blogs,
    getAllBlogs,
    addLikeBlog,
    deleteBlog,
    newBlog
  }
}
