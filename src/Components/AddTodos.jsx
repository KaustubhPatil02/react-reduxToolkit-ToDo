import React, { useState } from 'react';
// import './AddTodos.css'; // Import a CSS file for styling
import "../styles/addtodo.css"
import {addTodo} from "../feat/todos/todoSlice"
import {useDispatch} from "react-redux"
import Todos from './Todos';

const AddTodos = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch()

  

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      // we will use dispatch that will use reducers to make chnages in store
      dispatch(addTodo(todo))
      setTodo(''); // Clear the input field
      // console.log('New Todo:', todo); // Replace this with your logic to add the todo
    }
  };

  return (
    <div className="add-todos-container">
      
      <h2>Add a Todo</h2>
      <form onSubmit={addTodoHandler} className="todo-form">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="todo-button">Add</button>
      </form>
    </div>
  );
};

export default AddTodos;