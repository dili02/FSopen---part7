import React from 'react'
import useBlog from '../../hooks/useBlog'
import Blog from '../Blog/Blog'

import './bloglist.css'

export default function BlogList () {
  const { blogs } = useBlog()

  return (
    <ul className='container grid col-1 bloglist'>
      {
        !blogs
          ? <p>No blogs</p>
          : blogs
            .sort((a, b) => b.likes - a.likes)
            .map(blog =>
              <Blog
                key={blog.id}
                blog={blog}
              />
            )
      }
    </ul>
  )
}
