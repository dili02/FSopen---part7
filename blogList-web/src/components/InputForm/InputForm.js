import React from 'react'

import './inputform.css'

function InputForm ({ value, handleChange, placeholder, type }) {
  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      className='inputform'
    />
  )
}

export default InputForm
