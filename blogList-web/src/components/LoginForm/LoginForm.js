import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../redux/actions/notification.actions'
import './loginform.css'

import InputForm from '../InputForm/InputForm'
import Button from '../Button/Button'

const LoginForm = () => {
  const { loginUser } = useAuth()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      loginUser({
        username,
        password
      })
      setUsername('')
      setPassword('')
    } catch (error) {
      await dispatch(setNotification(
        error.response.data.error,
        3000
      ))
    }
  }

  const handleUsernameChange = e => setUsername(e.target.value)

  const handlePasswordChange = e => setPassword(e.target.value)

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='grid col-1'>
        <h2>Login into application</h2>
        <InputForm
          type='text'
          value={username}
          handleChange={handleUsernameChange}
          placeholder='username ...'
        />
        <InputForm
          type='password'
          value={password}
          handleChange={handlePasswordChange}
          placeholder='password ...'
        />
        <Button
          label='LOGIN'
          color='color-1'
        />
      </form>
    </div>
  )
}

export default LoginForm
