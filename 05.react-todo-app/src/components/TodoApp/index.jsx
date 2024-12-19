import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./index.css";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }
  function handleAdd() {
    const newList = list.concat(text);
    setList(newList);
    setText("");
  }
  return (
    <>
      <InputGroup className="mb-3 todo-input">
        <Form.Control
          placeholder="Enter a new todo..."
          aria-label="Todo input"
          aria-describedby="basic-addon1"
          id="input"
          onChange={handleChange}
        />
        <Button
          variant="primary"
          className="todo-button"
          value={text}
          onClick={handleAdd}
        >
          Add Todo
        </Button>
      </InputGroup>

      <div className="btns">
        <Button variant="primary">All</Button>
        <Button variant="success">Completed Todos</Button>
        <Button variant="warning">Pending Todos</Button>
        <Button variant="danger">Clear All</Button>
      </div>

      <ListGroup>
        <InputGroup className="mb-3 todo-item">
          <InputGroup.Checkbox aria-label="Checkbox for completing todo" />

          {list &&
            list.map((l, index) => (
              <ListGroup.Item
                className="todo-list-item"
                variant="success"
                key={index}
              >
                {l}
              </ListGroup.Item>
            ))}
          <hr />
          <div className="todo-icons">
            <FaEdit className="edit-icon" />
            <FaTrashAlt className="delete-icon" />
          </div>
        </InputGroup>
      </ListGroup>
    </>
  );
};

export default TodoApp;
