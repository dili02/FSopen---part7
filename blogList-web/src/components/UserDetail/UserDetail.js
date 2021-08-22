import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import useUser from '../../hooks/useUser'

import './userdetail.css'

const UserDetail = () => {
  const { users } = useUser()

  const match = useRouteMatch('/user/:id')

  const user = match
    ? users.find((user) => user.id === match.params.id)
    : null

  if (!user) return null

  return (
    <div>
      <div className='container'>
        <h2>{user.username}</h2>

        <h4>added blogs</h4>

        <ul className='grid col-1 userdetaillist'>
          {
            user.blogs.map(blog => <li className='bloguserdetail' key={blog.id}>{blog.title}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default UserDetail
