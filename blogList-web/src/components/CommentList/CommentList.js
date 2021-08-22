import React from 'react'

import './commentlist.css'

import CommentForm from '../CommentForm/CommentForm'

const CommentsList = ({ listComments }) => {
  return (
    <section className='col-1'>
      <h3>Comments</h3>

      <CommentForm />

      {
        listComments.length === 0 && <p className='no-comments'>No comments</p>
      }

      <div className='grid col-1'>
        {
          listComments.map(comment => <div className='comment' key={comment.id}>{comment.content}</div>)
        }
      </div>

    </section>
  )
}

export default CommentsList
