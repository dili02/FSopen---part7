import { BLOG_GET_ALL, BLOG_NEW, BLOG_ADDLIKE, BLOG_DELETE, BLOG_ADD_COMMENT } from '../actions/types'

const initialState = null

const blogRedurcer = (state = initialState, action) => {
  switch (action.type) {
  case BLOG_GET_ALL: {
    return action.data
  }

  case BLOG_NEW: {
    return [...state, action.data]
  }

  case BLOG_ADDLIKE: {
    const id = action.data
    const blogToUpdate = state.find(blog => blog.id === id)
    const updatedBlog = {
      ...blogToUpdate,
      likes: blogToUpdate.likes + 1
    }
    return state.map(blog =>
      blog.id !== id ? blog : updatedBlog
    )
  }

  case BLOG_DELETE: {
    const id = action.data
    return state.filter((blog) => blog.id !== id)
  }

  case BLOG_ADD_COMMENT: {
    const { id, blogId, content } = action.data
    const blog = state.find(blog => blog.id === blogId)
    const newComment = {
      id,
      content
    }
    const blogToUpdate = {
      ...blog,
      comments: [
        ...blog.comments,
        newComment
      ]
    }
    return state.map(blog =>
      blog.id !== blogId ? blog : blogToUpdate
    )
  }

  default:
    return state
  }
}

export default blogRedurcer
