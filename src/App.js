import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, SetTodos] = useState(["Wake up", "Eat breakfast", "Go to work"]);
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");


  const handleAdd = () => {
    if (value) {
      SetTodos([...todos, value]);
      setValue("");
    }
  };


  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    SetTodos(newTodos);
  };


  const handleUpdate = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, editValue);
    SetTodos(newTodos);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="app-container">
      <h1 className="header">Todo List</h1>

      {/* Add Todo Section */}
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          placeholder="Add a new todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>Add Todo</button>
      </div>

      {/* Todo List Section */}
      <ul className="todo-list">
        {todos.map((val, i) => (
          <li className="todo-item" key={i}>
            {editIndex === i ? (

              <div className="edit-container">
                <input
                  className="todo-input"
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder="Edit todo"
                />
                <button className="update-btn" onClick={() => handleUpdate(i)}>Update</button>
              </div>
            ) : (

              <div className="todo-content">
                {val}
                <div className="todo-actions">
                  <button className="edit-btn" onClick={() => { setEditIndex(i); setEditValue(val); }}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(i)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
