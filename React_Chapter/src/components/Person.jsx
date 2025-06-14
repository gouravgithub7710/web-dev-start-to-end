import React from 'react'
//&& operator example  ()?():() ternary operator example
const Person = ({name,age}) => {
 const check= () => {if(age>18){alert("You can drive")}else{ alert("You can not drive")}}
  return (
    <div style={{backgroundColor:"lightblue",padding:"20px",borderRadius:"10px",color:"blue", textAlign:"center", border:"2px solid yellow", width:"300px" }}>
    <h1>Name={name}</h1>
    <h1>age={age}</h1>

    <button style={{color:"blue" ,backgroundColor:"lightgreen",width:"200px", fontSize:"20px", borderRadius: "15px" }} onClick={check}>Check drive or not</button>

    </div>
  )
}

export default Person
