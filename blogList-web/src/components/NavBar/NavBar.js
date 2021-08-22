import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import Button from '../Button/Button'
import './navbar.css'

export default function NavBar () {
  const { isUserLogged, logout, user } = useAuth()

  return (
    <>
      <nav>
        <NavLink exact to='/' activeClassName='active' className='navbar-link'>
            BLOGS
        </NavLink>
        <NavLink exact to='/users' activeClassName='active' className='navbar-link'>
        USERS
        </NavLink>
        {
          isUserLogged()
            ? <Button
              label='LOGOUT'
              color='color-link'
              handleClick={logout}
            />
            : <NavLink exact to='/login' activeClassName='active' className='navbar-link'>
                LOGIN
            </NavLink>
        }
      </nav>
      {
        user && <p className='logged-user'>{user.name} is logged</p>
      }
    </>
  )
}
