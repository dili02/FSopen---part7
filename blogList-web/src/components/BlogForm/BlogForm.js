import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import useBlog from '../../hooks/useBlog'
import { setNotification } from '../../redux/actions/notification.actions'

import InputForm from '../InputForm/InputForm'
import Button from '../Button/Button'

const BlogForm = () => {
  const dispatch = useDispatch()
  const { newBlog } = useBlog()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleBlogTitleChange = (e) => setTitle(e.target.value)

  const handleBlogAuthorChange = (e) => setAuthor(e.target.value)

  const handleBlogUrlChange = (e) => setUrl(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !author || !url) {
      return dispatch(setNotification(
        'Missing Fields :(',
        3000
      ))
    }

    const blogObject = {
      title,
      author,
      url
    }

    try {
      newBlog(blogObject)
      dispatch(setNotification(
        `Blog ${title} created :)`,
        3000
      ))
    } catch (error) {
      dispatch(setNotification(
        'UPSS an error occurred and the blog could not be created :(',
        3000
      ))
    }

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>
        Create a New Blog
      </h2>

      <form className='grid col-1' onSubmit={handleSubmit}>
        <InputForm
          type='text'
          value={title}
          handleChange={handleBlogTitleChange}
          placeholder='title ...'
        />
        <InputForm
          type='text'
          value={author}
          handleChange={handleBlogAuthorChange}
          placeholder='author ...'
        />
        <InputForm
          type='text'
          value={url}
          handleChange={handleBlogUrlChange}
          placeholder='url ...'
        />

        <Button
          type='submit'
          color='color-1'
          label='CREATE'
        />
      </form>
    </div>
  )
}

export default BlogForm
