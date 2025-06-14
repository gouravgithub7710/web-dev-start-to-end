
//Count Increment and Reset Example
// import React from 'react'

// const App = () => {

//   const [count, setCount] = React.useState(0)
//   const Increment=() => {
//     setCount(count + 1)
//   }
//   const Reset = () => {
//     setCount(0)
//   }

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }

// export default App


//use onsubmit to handle form submission

// import React from 'react'

// const App = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//     console.log(e.target[0].value); // Accessing the first input value (email)
//     console.log(e.target[1].value); // Accessing the second input value (password)
    
//   }

//   return (
//     <div>
//       <h1>Fill the form</h1>
//       <form onSubmit={handleSubmit}>

//         <input type="email" placeholder="Enter your email"/>
//         <input type="password" placeholder="Enter your password"/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//use onclick to handle button click
// import React from 'react'     

// const App = () => {
//   const handleClick = () => {    
//     console.log("Button clicked");
//   }
//   return (

//     <div>
//       <h1>Click the button</h1>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )    
// }
// export default App

//rafe for react components
//const implement up side of the return statement
//<></> empty open and close tags 
import React from 'react'
import Person from './Person'
import { Test } from './components/Test'
const App = () => {
  return (
  <>
    {/* <Person/> */}
    <Test/>
  </>  
    
  )
}

export default App


