import React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import TodoIteam from './Components/TodoIteam'
import Button from './Components/Button'
const App = () => {
   const [tasks, setTasks] = useState([
    { id: 1, task: "Eat", isChecked: false },
    { id: 2, task: "Read", isChecked: false },
    { id: 3, task: "Play", isChecked: false },
    { id: 4, task: "Sleep", isChecked: false }
  ]);

  const [completedTasks, setCompletedTasks] = useState([]);

    const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );
    setTasks(updatedTasks);
  };

   const handleAddCompleted = () => {
    const selected = tasks.filter(task => task.isChecked);
    setCompletedTasks(selected);
  };
  return (
    <div className='Todo-Container'>
      <Header title="TODO LIST"/>
      

          <div className='Todo-Iteam-Container'>
      {tasks.map((task) => (
        <TodoIteam
          key={task.id}
          task={task.task}
          isChecked={task.isChecked}
          onCheckboxChange={() => handleCheckboxChange(task.id)}
        />
      ))}
   
      </div>
      <Button  onClick={handleAddCompleted} />

      {completedTasks.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((task) => (
              <li key={task.id}>✅ {task.task}</li>
            ))}
          </ul>
        </div>
      )}


    </div>
  )
}

export default App



