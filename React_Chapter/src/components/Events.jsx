import React from 'react'

const Events = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  const addition=(a) => {
     alert(a + 10);
  }
  return (
    <div>
    <h1>Event Handling Example</h1>
      <button className='button' onClick={handleClick}>Click Me B1</button>
      <button className='button' onMouseOver={handleClick}>Mouse hover B2</button>
      <button className='button' onClick={()=>addition(100)}>Addition B3</button>
    </div>
    
  )
}

export default Events
