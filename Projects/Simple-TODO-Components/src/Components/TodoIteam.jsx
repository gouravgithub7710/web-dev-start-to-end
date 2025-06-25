import React from 'react';
const TodoIteam=({ task, isChecked, onCheckboxChange })=>{
return(
  <div className='Todo-Iteam'>
    <input type="checkbox" checked={isChecked}
        onChange={onCheckboxChange} />
    <p>{task}</p>
    <p>...</p>
  </div>
)
}
export default TodoIteam;