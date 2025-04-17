import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feat/todos/todoSlice';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editTodoId, setEditTodoId] = useState(null); // Track the todo being edited
  const [editText, setEditText] = useState(''); // Track the new text for the todo

  const handleEdit = (todo) => {
    setEditTodoId(todo.id); // Set the ID of the todo being edited
    setEditText(todo.text); // Set the current text of the todo in the input field
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText })); // Dispatch the update action
      setEditTodoId(null); // Clear the edit state
      setEditText(''); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
              // Show input field if the todo is being edited
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo.id)}>Save</button>
                <button onClick={() => setEditTodoId(null)}>Cancel</button>
              </>
            ) : (
              // Show the todo text and buttons if not being edited
              <>
                <span>{todo.text}</span>
                <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>Delete</button>
                <button onClick={() => handleEdit(todo)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;