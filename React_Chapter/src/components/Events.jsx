import React from 'react'

const Events = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div>
    <h1>Event Handling Example</h1>
      <button className='button' onClick={handleClick}>Click Me</button>
      <button className='button' onMouseOver={handleClick}>Mouse hover</button>
    </div>
  )
}

export default Events
