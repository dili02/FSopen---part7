import React from 'react'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'

import './userlist.css'

const UserList = () => {
  const { users } = useUser()

  return (
    <section className='container userlist'>
      {
        !users && <p>No users</p>
      }

      <table>
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>
                  <Link className='tablelink' to={`/user/${user.id}`}>
                    {user.username}
                  </Link>
                </td>
                <td>
                  {user.blogs.length}
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </section>
  )
}

export default UserList
