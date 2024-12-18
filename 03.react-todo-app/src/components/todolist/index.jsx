import React, { useState } from 'react'

const TodoList = () => {
const [tasks, setTasks] = useState( [
{
    id: 1,
    text: 'lorem ipsum',
    uniName: 'azmiu'
},
{
    id: 2,
    text: 'lorem ipsum dolor',
    uniName: 'azmiu'
}

]);

const [text, setText] = useState("");
function addTask(text) {
    const newTask = {
        id: Date.now(),
        text
    };
    setTasks([...tasks, newTask]);
    setText("");

}







  return (
    <div>
      <div className="todo-list">
        {tasks.map(task => (

        )
    
      </div>
    </div>
  )
}

export default TodoList
