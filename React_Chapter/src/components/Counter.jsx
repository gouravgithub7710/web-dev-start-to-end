import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [Count, setCount] = useState(0)
  const Increment =() => {
    setCount(Count+1);
  }

  const Decrement = () => {
   setCount(Count-1);
  }

  const Reset = () => {
   setCount(0);
  }
  return (
    <div style={{border:'2px solid red',borderRadius: '8px',width:'320px',padding:'10px'}}>
      <h1 style={{marginLeft:'70px',backgroundColor:'blue',padding:'10px',width:'150px',border:'2px solid black', borderRadius: '8px',textAlign: 'center'}}>Counter:{Count}</h1>
      <button className='button'onClick={Increment}>Increment</button>
      <button className='button' onClick={Decrement}>Decrement</button>
      <button className='button' onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter
