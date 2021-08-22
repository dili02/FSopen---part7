import React from 'react'
import { useSelector } from 'react-redux'

import './notification.css'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if (!notification) return null

  return (
    <>
      {
        notification &&
          <div className='notification'>
            {notification}
          </div>
      }
    </>
  )
}

export default Notification
