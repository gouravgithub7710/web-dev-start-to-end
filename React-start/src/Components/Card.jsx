import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
    // <div>
    //  <h1>User Name is: {props.user}</h1>
    // </div>

    <div className='text-white bg-blue-900 w-50 h-50 border-2  m-3 p-3 rounded-md'> 
    <h1 className='p-3'>Name: {props.user}</h1>
    <h1 className='p-3'>City: {props.city}</h1>
    <button className='p-3'>Add Friend</button>
    </div>
  )
}

export default Card
