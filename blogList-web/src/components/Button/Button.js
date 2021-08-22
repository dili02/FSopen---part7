import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './button.css'

const Button = ({ label, color, handleClick, square }) => {
  return (
    <button
      onClick={handleClick}
      className={classNames('button', {
        [`${color}`]: color,
        square: square
      })}>
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['', 'color-1', 'color-2', 'color-remove', 'color-link']),
  square: PropTypes.bool
}

Button.defaultProps = {
  color: ''
}

export default Button
