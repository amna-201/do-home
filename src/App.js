import React, { useState, useEffect } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const changeTodoText = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title"> Start now and don't stop!</h1>
\      </div>
      <div className="content">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          changeTodoText={changeTodoText}
        />
      </div>
    </div>
  );
}

export default App;
