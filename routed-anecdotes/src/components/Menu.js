import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {

    const style = {
        paddingRight: 5
      }

      return (
        <nav>
          <NavLink exact to='/' style={style}>
            anecdotes
          </NavLink>
          <NavLink exact to='/create' style={style}>
            create new
          </NavLink>
          <NavLink exact to='/about' style={style}>
            about
          </NavLink>
        </nav>
      )
}

export default Menu
