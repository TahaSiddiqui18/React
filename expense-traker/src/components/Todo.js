// Todo.js
import React, { useState } from 'react';
import './Todo.css';  // Import the CSS file

const Todo = () => {
    const [todos, setTodos] = useState(['TAHA_SIDDIQUI', 'SAMEED_SIDDIQUI', 'HAMZA_SIDDIQUI']);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo-container">
             <div className="add-todo-container">
                <input
                    type="text"
                    placeholder='Enter Student Name'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="add-todo-input"
                />
                <button onClick={addTodo} className="add-todo-btn">
                    Add Name
                </button>
            </div>
            <h1 align="center"><em>Bano Qabil Students</em></h1>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        {todo}
                        <button onClick={() => deleteTodo(index)} className="delete-btn">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
     </div>
    );
};

export default Todo;
