import React from 'react'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks/useField'

const CreateNew = (props) => {

    const content = useField('text')
    const author = useField('text')
    const info = useField('text')

    const history = useHistory()

    const handleSubmit = (e) => {
      e.preventDefault()

      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })

      history.push('/')
    }

    const resetInput = () => {
      content.resetValue()
      author.resetValue()
      info.resetValue()
    }

  return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' {...content} />
          </div>
          <div>
            author
            <input name='author' {...author} />
          </div>
          <div>
            url for more info
            <input name='info' {...info} />
          </div>
          <button type="submit">create</button>
          <button type="reset" onClick={resetInput}>reset</button>
        </form>
      </div>
  )
}

export default CreateNew
