import React from 'react'

const Card = (props) => {
  
  return (
    // <div>
    //  <h1>User Name is: {props.user}</h1>
    // </div>

    <div className='mr-7 text-white bg-blue-900 w-50 h-90 border-2  m-3 p-3 rounded-md'> 
    <img className='h-32 w-32 rounded-full m-auto' src={props.photo}></img>
    <h1 className='p-3 text-amber-500'>Name: {props.name}</h1>
    <h1 className='p-3'>Age: {props.age}</h1>
    <h1 className='p-3'>City: {props.city}</h1>
     <h1 className='p-3'>profession: {props.profession}</h1>
    <button className='p-2 mt-3 ml-6 text-black bg-fuchsia-700 rounded-md '>Add Friend</button>
    </div>
  )
}

export default Card
