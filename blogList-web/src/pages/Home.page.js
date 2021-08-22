import React from 'react'

import useAuth from '../hooks/useAuth'

import BlogForm from '../components/BlogForm/BlogForm'
import BlogList from '../components/BlogList'

export default function HomePage () {
  const { isUserLogged } = useAuth()

  return (
    <>
      <h2>Blogs Page</h2>

      {
        isUserLogged() && <BlogForm />
      }

      <BlogList />
    </>
  )
}
