import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../redux/actions/notification.actions'
import useComment from '../../hooks/useComment'

import InputForm from '../InputForm/InputForm'
import Button from '../Button/Button'

const CommentForm = () => {
  const dispatch = useDispatch()
  const { addComment } = useComment()

  const [content, setContent] = useState('')

  const handleContentChange = e => setContent(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    if (!content) {
      return dispatch(setNotification(
        'Missing Fields :(',
        3000
      ))
    }

    const newComment = {
      content
    }

    addComment(
      newComment
    )

    setContent('')
  }

  return (
    <form className='grid col-2 sm-col-1' onSubmit={handleSubmit}>
      <InputForm
        value={content}
        handleChange={handleContentChange}
        type='text'
        placeholder='add comment'
      />
      <Button
        type='submit'
        label='ADD'
        color='color-1'
      />
    </form>
  )
}

export default CommentForm
