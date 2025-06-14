import React from 'react'
//&& operator example  ()?():() ternary operator example
const Person = ({name,age}) => {
 const check= () => {if(age>18){alert("You can drive")}else{ alert("You can not drive")}}
  return (
    <div>
    <h1>Name={name}</h1>
    <h1>age={age}</h1>

    <button onClick={check}>Check drive or not</button>

    </div>
  )
}

export default Person
