import React from 'react'
import useBlog from '../../hooks/useBlog'
import useAuth from '../../hooks/useAuth'
import { useRouteMatch } from 'react-router-dom'

import Button from '../Button/Button'
import CommentList from '../CommentList/CommentList'

import './blogdetail.css'

export default function BlogDetail () {
  const { addLikeBlog, deleteBlog, blogs } = useBlog()
  const { isUserLogged } = useAuth()

  const match = useRouteMatch('/blog/:id')
  const blog = match
    ? blogs?.find((blog) => blog.id === match.params.id)
    : null

  if (!blog) return null

  return (
    <div className='container blogdetail'>
      <h4>
        { blog.title }
      </h4>

      <div className='blogdetail-url'>
        <a href={blog.url} target='_blank' rel='noreferrer'>
          {blog.url}
        </a>
      </div>

      <div className='blogdetail-added'>
        added by: { blog.user.username }
      </div>

      <div className='blogdetail-like'>
        <p id="likes">{blog.likes} likes
          <Button
            id='like-btn'
            className='button'
            color='color-1'
            square={true}
            label='like'
            handleClick={() => addLikeBlog(blog)}
          />
        </p>
      </div>

      {
        isUserLogged() && <div className='blogdetail-remove'>
          <Button
            id='delete-btn'
            className='button'
            color='color-remove'
            label='DELETE'
            handleClick={() => deleteBlog(blog)}
          />
        </div>
      }

      <CommentList listComments={blog.comments} />
    </div>
  )
}
