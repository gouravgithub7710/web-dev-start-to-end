import React from 'react'
import { Link } from 'react-router-dom'

const Nev = () => {
  return (

   

    <div className='bg-gray-800 text-white py-7 px-10 flex justify-between items-center'>
      <h2 className='text-2xl'>Web</h2>
      <input type="text" placeholder='Search...' className='mr-50% px-3 py-1 bg-cyan-400 rounded-md text-black' />
      <div className='flex items-center gap-5'>

      {/* //use link tag for not reloading the page */}

     <Link className='text-xl underline' to='/'>Home</Link>
     <Link className='text-xl underline' to='/about'>About</Link>
    <Link className='text-xl underline' to='/contact'>Contact</Link>
    <Link className='text-xl underline' to='/product'>Product</Link>




      </div>
    </div>
  )
}

export default Nev
