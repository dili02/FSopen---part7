import React from 'react'
import { Link } from 'react-router-dom'

import './blog.css'

const Blog = ({ blog }) => {
  return (
    <Link className='blog' to={`/blog/${blog.id}`}>{blog.title}</Link>
  )
}

export default Blog
