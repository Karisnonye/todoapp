import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-8 border-2 rounded-lg border-{purple}">
      <h1 className="text-2xl font-bold mb-2 font-tiny">Task Manager</h1>      
      <div className="flex mb-4">
        <input
          type="text"
          className="p-2 border border-gray-300 w-full mr-2"
          placeholder="What do you want to do?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-gray-100 text-purple-800 p-2 mr-2 rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`${index % 2 === 0 ? 'bg-purple-500' : 'bg-purple-800'} "flex items-center justify-between p-2 border-b border-gray-300 rounded-lg mb-2 hover:rounded"`}
          >
            <span>{todo}</span>
            <button
              className="float-right"
              onClick={() => removeTodo(index)}
            >
              <FontAwesomeIcon icon={faTrashCan} style={{color: "#3b0764"}}/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
