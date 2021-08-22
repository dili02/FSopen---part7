import { BLOG_GET_ALL, BLOG_ADDLIKE, BLOG_DELETE, BLOG_NEW, BLOG_ADD_COMMENT } from './types'
import { getAllBlogsService, addLikeService, delteBlogService, createNewBlogService } from '../../services/blogs.service'
import { createNewCommnetService } from '../../services/comment.service'

export const getAllBlogsAction = () => {
  return async dispatch => {
    const blogs = await getAllBlogsService()
    dispatch({
      type: BLOG_GET_ALL,
      data: blogs
    })
  }
}

export const addLikeBlogAction = blog => {
  return async dispatch => {
    const blogToUpdate = {
      ...blog,
      likes: blog.likes + 1
    }
    const updatedBlog = await addLikeService(blogToUpdate)
    const { id } = updatedBlog
    dispatch({
      type: BLOG_ADDLIKE,
      data: id
    })
  }
}

export const createNewBlogAction = blog => {
  return async dispatch => {
    const newBlog = await createNewBlogService(blog)
    dispatch({
      type: BLOG_NEW,
      data: newBlog
    })
  }
}

export const deleteBlogAction = id => {
  return async dispatch => {
    await delteBlogService(id)
    dispatch({
      type: BLOG_DELETE,
      data: id
    })
  }
}

export const createNewCommentAction = (id, comment) => {
  return async dispatch => {
    const blogId = id
    let newComment = await createNewCommnetService(id, comment)
    newComment = {
      ...newComment,
      blogId
    }
    dispatch({
      type: BLOG_ADD_COMMENT,
      data: newComment
    })
  }
}
