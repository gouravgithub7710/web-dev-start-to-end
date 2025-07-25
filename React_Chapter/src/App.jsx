import './index.css'
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
//props for showing the data in the component

// import React from 'react'
// import Person from './Person'
// //import { Test } from './components/Test'
// // import Test from './components/Test'
// import Test from './components/test'
// import Product from './components/Product'
// const App = () => {
//   return (
//   <>
//     {/* <Person/> */}
//     {/* <Test/> */}
//     <Product name="I phone" price="75000" year="2022"/>
//     <Product name="Samsung Galaxy" price="65000" year="2023"/>
//     <Product name="One Plus" price="45000" year="2023"/>
//     <Product name="Google Pixel" price="55000" year="2023"/>
//     <Product name="Oppo" price="35000" year="2023"/>
//     <Product name="Vivo" price="30000" year="2023"/>
//     <Product name="Realme" price="25000" year="2023"/>
//   </>  
    
//   )
// }

// export default App




//&& operator example  ()?():() ternary operator example
// import React from 'react'
// import Person from './components/Person'

// const App = () => {
//   return (
//     <div>
//       <Person name="Gourav" age={22}/>
//     </div>
//   )
// }

// export default App



// fecth user data from mannual create API

// import React from 'react'
// import UserData from './components/UserData'

// const App = () => {
//   return (
//     <div>
//       <UserData/>
//     </div>
//   )
// }

// export default App



//Events in React example:
// form events, button click events, onsubmit events, onclick events

// import React from 'react'
// import Events from './components/Events'

// const App = () => {
//   return (
//     <div>
//       <Events />
//     </div>
//   )
// }

// export default App


// useState hook example
// import React from 'react'
// import Counter from './components/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   )
// }

// export default App



//Map example 

// import React from 'react'
// import Map_Product from './components/Map_Product'
// const App = () => {
//   return (
//     <div>
//       <Map_Product/>
//     </div>
//   )
// }

// export default App


//filter using for showing data 
// import React from 'react'
// import Map_Product from './components/Map_Product'
// import Filter_Product from './components/Filter_Product'

// const App = () => {
//   return (
//     <div>
//     <Map_Product/>
//       {/* <Filter_Product/> */}
//     </div>
//   )
// }

// export default App

//Api calling example using fetch


// import {useEffect,useState} from 'react'
// import { getPosts,getRandomUser} from './API'
// import PostCard from './components/PostCard'
// import RandomUserCard from './components/RandomUserCard'

// const App = () => {

//   const [data, setdata] = useState(null)
//   const [RandomUserData,setRandomUserData]=useState(null)
//   //--for example-1
//   useEffect(() => {
//   getPosts()
//   .then(posts=>setdata(posts))
//   }, [])
  
//   //for example-2
//   useEffect(() => {
//    getRandomUser()
//    .then(user => setRandomUserData(user.results[0])
//    )
//   }, [])
  
// const refresh=()=>{
//    getRandomUser()
//    .then(user => setRandomUserData(user.results[0]))
// }

//   return (
//     <div>
//    <div className='Random-user'>
//      {RandomUserData && <RandomUserCard data={RandomUserData}/>}
//     <button className='button' onClick={refresh}>Refresh User</button>
//    </div>
//       {data ? data.map((e)=><PostCard key={e.id} title={e.title} body={e.body}/>) : <p>No Data</p>}
//     </div>
//   )
// }

// export default App


// use effect hook example 

// import { useEffect,useState} from 'react'
// import React from 'react'

// const App = () => {
// const [Counter, setCounter] = useState(0)
//   useEffect(() => {
//     document.title=Counter
//   console.log('useeffect hook is running');
  
//   }, [Counter])
  
//   return (
//     <div>
//       use effect hook example
//       <h1>Counter: {Counter}</h1>
//       <button onClick={()=>setCounter(Counter+1)}>Increment</button>
//       <button onClick={()=>setCounter(Counter-1)}>Decrement</button>
//       <button onClick={()=>setCounter(0)}>Reset</button>
//     </div>
//   )
// }

// export default App



//fetch data from API using useEffect hook

// import React from 'react'
// import Fetch_Data_API from './components/Fetch_Data_API'

// const App=()=>{
//   return(
//     <>
//       <Fetch_Data_API/>
//     </>
//   )
// }

// export default App