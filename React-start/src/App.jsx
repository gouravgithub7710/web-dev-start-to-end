// function app()
// {
//   const a = 10;
//   const name ="Gourav";
//   const age = 21;
// let username = "John_user";

//const { useState } = require("react");

//   const changeusername =()=>
//   {
//     console.log(username);
    
//      username="John_new_user";
     
//      console.log(username);
     
//   }
//   return <div>
//     <h1>My React App-- {a}</h1>
//     <p>This is a simple React application,made by--{name}</p>
//     <p>It is built using Vite and React.</p>


//     <p>Hello ji-- name is {name}, and age is {age}</p>

//     <h1>User name is: {username}</h1>
//     <button onClick={changeusername}>changeuser</button>
//   </div>
// }

// export default app;


//-------use state example-------------------------------------------------

// import React, { useState } from 'react';

// const App=()=>{
//   const [a, seta] = useState(10);

//   const [b, setb] = useState("Gourav")

//   const changeA=()=>{
//     console.log(a);
//     seta(20);
//     console.log(a); 
//   }
//   const changeB=()=>{
//     console.log(b);
//     setb("Gourav Goswami");
//     console.log(b); 
//   }
//   return (
//     <div>
//     <h1>Value of a is:{a}</h1>
//     <h1>Value of b is:{b}</h1>
//     <button onClick={changeA}>Change A</button>
//     <button onClick={changeB}>Change B</button>
//     </div>
//   );

 //
// }
// export default App; 


//next example---------

// import React, { useState } from 'react';
// const App=()=>{
//  const [Num, setNum] = useState(0);

//  const Increment=()=>{
//   setNum(Num+1);
//  }
//   const Decrement=()=>{
//   if(Num>0)
//   {
//     setNum(Num-1);
//   }
//   else{
//     alert("Number is already zero");
//   }
//   }
//   const Reset=()=>{
//     setNum(0);
//   }
//   return(
//     <div>
//   <h1>
//     Num is:{Num}
//   </h1>
//   <button onClick={Increment}>Increment</button>
//   <button onClick={Decrement}>Decrement</button>
//   <button onClick={Reset}>Reset</button>
//     </div>
//   );
// }
// export default App;


//apply tailwind css--------------------------------------------

// import React, { useState } from 'react';

// const App=()=>{
// return(
//   <div className='text-5xl text-pink-300 bg-blue-900 border-2 border-dotted '>APP</div>
// );
// }
// export default App;


//---form example---------------------------------------------------
//  import React, { useState } from 'react';
// const App=()=>{

//   const [UserName, setUserName] = useState('')

//   const submitHandler=(e)=>{
//    e.preventDefault();
//    console.log(UserName);
//     setUserName('');

//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{submitHandler(e)}}>
//         <input value={UserName} onChange={(e)=>{
//           setUserName(e.target.value);
//         }} 
        
//         className='m-3 p-2 rounded-md'  type="text" placeholder='Enter your Name'/>
//         <button className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
  
//       </form>
//     </div>
//   );
// }
// export default App;

//fragments:-empty tags  in react js --------------------
// import React from 'react';
// const App=()=>{
// return(
//   <>
//     <h1>
//       Hello, Gourav
//     </h1>
//     <h1>
//       Hello, Gourav Goswami
//     </h1>
//   </>
// );
// }
// export default App; 


//props in react js --------------------------

// import React from 'react';
// import Nevbar from './Components/Nevbar';
// import Footer from './Components/Footer';
// import Card from './Components/Card';

// const App=()=>{

//   const user =[
//   {
//     "name": "Aarav Mehta",
//     "age": 28,
//     "city": "Mumbai",
//     "profession": "Software Engineer",
//     "photo": "https://randomuser.me/api/portraits/men/75.jpg"
//   },
//   {
//     "name": "Riya Sharma",
//     "age": 24,
//     "city": "Delhi",
//     "profession": "Graphic Designer",
//     "photo": "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     "name": "Kunal Verma",
//     "age": 32,
//     "city": "Bangalore",
//     "profession": "Data Analyst",
//     "photo": "https://randomuser.me/api/portraits/men/47.jpg"
//   },
//   {
//     "name": "Neha Kapoor",
//     "age": 27,
//     "city": "Pune",
//     "profession": "Digital Marketer",
//     "photo": "https://randomuser.me/api/portraits/women/58.jpg"
//   },
//   {
//     "name": "Ishaan Joshi",
//     "age": 30,
//     "city": "Hyderabad",
//     "profession": "Product Manager",
//     "photo": "https://randomuser.me/api/portraits/men/62.jpg"
//   }
// ]  
//   return(
// <>
// <Nevbar/>
// {/* <Card user='Gourav' />
// <Card user='Gourvi' /> */}
// <div className='p-5 flex justify-center'> 

// {user.map(function(e){
//   return <Card  name={e.name} age={e.age} city={e.city} profession={e.profession} photo={e.photo} />
// })}

// </div>
// <Footer/>
//     </>
//   );
// }
// export default App;


//API-data fetching example--------------------------------

//import React from 'react'
// import React, { useState } from 'react'
// import axios from 'axios';

// const App = () => {

//   const [data, setData] = useState([]);

//   const getData = async ()=>{
//    const response = await axios.get('https://picsum.photos/v2/list')

//   setData(response.data);
   
//   }
//   return (
//     <div className='p-10'>
//       <button onClick={getData} className='bg-indigo-800 rounded-md m-2 font-semibold text-2xl active:scale-95 px-6 py-3'>Get Data</button>
//       <div className='p-5 mt-5 bg-gray-950'>
//       {data.map(function(e,idx){
//         return(
//           <div key={idx} className='bg-gray-50 text-black flex items-center justify-center w-full px-7 py-6 rounded mb-5'>

//             <img src={e.download_url}/>
//           </div>
//         )
//       })}
//        </div>
//     </div>
//   )
// }

// export default App





// //--UseEffect using in API-data fetching example--------------------------------
// import axios from 'axios';
// import React, { useEffect,useState} from 'react'

// const App = () => {

//     const [data, setData] = useState([]);

//   const getData = async ()=>{
//    const response = await axios.get('https://picsum.photos/v2/list')

//   setData(response.data);
   
//   }

//   useEffect(() => {
//     getData()
//   }, [])
  

//   return (
//     <div className='p-10'>
//       {/* <button onClick={getData} className='bg-indigo-800 rounded-md m-2 font-semibold text-2xl active:scale-95 px-6 py-3'>Get Data</button> */}
//       <div className='p-5 mt-5 bg-gray-950'>
//       {data.map(function(e,idx){
//         return(
//           <div key={idx} className='bg-gray-50 text-black flex items-center justify-center w-full px-7 py-6 rounded mb-5'>

//             <img src={e.download_url}/>
//           </div>
//         )
//       })}
//        </div>
//     </div>
//   )
// }

// export default App


//React-toastify-----use for notification-------------------


//React router dom -------------------------------------------------

// import React from 'react'
// import { Routes, Route } from 'react-router-dom';
// import About from './pages/About';
// import Product from './pages/Product';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Nev from './Components/Nev';

// const App = () => {
//   return (
//     <div>
//     <Nev/>
//       <Routes>
//         <Route path='/About' element={<About/>}/>
//         <Route path='/Product' element={<Product/>}/>
//         <Route path='/' element={<Home/>}/> 
//         <Route path='/Contact' element={<Contact/>}/>
//       </Routes>
  
//     </div>
//   )
// }

// export default App



//context api example--------------------------------------------------




