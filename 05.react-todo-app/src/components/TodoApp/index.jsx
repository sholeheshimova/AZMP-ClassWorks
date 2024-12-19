import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./index.css";

const TodoApp = () => {
  const [list, setList] = useState([]); 
  const [text, setText] = useState(""); 
  const [filter, setFilter] = useState("all"); 

 
  function handleChange(event) {
    setText(event.target.value);
  }


  function handleAdd() {
    if (text.trim() === "") return; 
    const newTodo = { text, completed: false }; 
    setList([...list, newTodo]); 
    setText(""); 
  }

  
  const filteredList =
    filter === "all" ? list : filter === "completed" ? list.filter((todo) => todo.completed) : list.filter((todo) => !todo.completed);

  
  function handleClearAll() {
    setList([]);
  }

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <InputGroup className="mb-3 todo-input">
        <Form.Control
          placeholder="Enter a new todo..."
          aria-label="Todo input"
          value={text} 
          onChange={handleChange} 
        />
        <Button
          variant="primary"
          className="todo-button"
          onClick={handleAdd} 
        >
          Add Todo
        </Button>
      </InputGroup>

     
      <div className="btns mb-3">
        <Button variant="primary" onClick={() => setFilter("all")}>All Todos </Button>
        <Button variant="success" onClick={() => setFilter("completed")}>Completed Todos</Button>
        <Button variant="warning" onClick={() => setFilter("pending")}>Pending Todos</Button>
        <Button variant="danger" onClick={handleClearAll}>Clear All</Button>
      </div>

      
      <ListGroup className="mt-3">
        {filteredList.length > 0 ? (
          filteredList.map((todo, index) => (
            <ListGroup.Item
              key={index}
              className="todo-list-item"
              variant= "success"
            >
              <div className="todo-content">
                <InputGroup.Checkbox
                  checked={todo.completed}
                  onChange={() => {
                    
                    const newList = [...list];
                    newList[index].completed = !newList[index].completed;
                    setList(newList);
                  }}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              </div>

              <div className="todo-icons">
                <FaEdit className="edit-icon" />
                <FaTrashAlt
                  className="delete-icon"
                  onClick={() => {
                   
                    const newList = list.filter((_, i) => i !== index);
                    setList(newList);
                  }}
                />
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <p className="no-todos">No todos available!</p>
        )}
      </ListGroup>
    </div>
  );
};

export default TodoApp;
