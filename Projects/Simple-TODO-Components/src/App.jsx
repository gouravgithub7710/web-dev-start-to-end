import React from 'react'
import Header from './Components/Header'
import TodoIteam from './Components/TodoIteam'
import Button from './Components/Button'
const App = () => {
  return (
    <div className='Todo-Container'>
      <Header/>
      <TodoIteam/>
      <TodoIteam/>
      <TodoIteam/>
      <TodoIteam/>
      <Button/>
    </div>
  )
}

export default App
