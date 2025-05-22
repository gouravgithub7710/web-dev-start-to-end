import React from 'react'

const Nevbar = () => {
  return (
   <>
     <nav className=' flex bg-emerald-950 py-5 px-10 items-center text-white p-3 justify-center '> 
      <h1 className='text-2xl'>Gourav</h1>

      <div className='flex gap-10 items-center ml-auto '>
        <h1 className='text-xl'>About</h1>
        <h1 className='text-xl'>Contact</h1>
        <h1 className='text-xl'>Services</h1>
        <h1 className='text-xl'>Your Account</h1>
      </div>
    </nav>
   </>
  )
}

export default Nevbar
