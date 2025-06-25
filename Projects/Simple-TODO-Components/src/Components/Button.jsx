import React from 'react'

const Button = ({ onClick }) => {
  return (
    <div >
      <button className='button' onClick={onClick}  >Add Todo</button>
    </div>
  )
}

export default Button
