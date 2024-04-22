import React from 'react';

function TodoList({ todos, completeTodo, deleteTodo, changeTodoText }) {
  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <h2 className="list-title">  should do it....</h2>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => completeTodo(index)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => changeTodoText(index, prompt('Enter new text:'))}>Change</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="completed-list">
        <h2 className="list-title"> Completed</h2>
        <ul>
          {completedTodos.map((todo, index) => (
            <li key={index}>
              <span style={{ textDecoration: 'line-through' }}>{todo.text}</span>
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => changeTodoText(index, prompt('Enter new text:'))}>Change</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
