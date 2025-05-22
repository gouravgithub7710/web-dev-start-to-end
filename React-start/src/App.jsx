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


//components in react js --------------------------

import React from 'react';
import Nevbar from './Components/Nevbar';
import Footer from './Components/Footer';

const App=()=>{ 
  return(
<>
<Nevbar/>

<Footer/>
    </>
  );
}
export default App;





