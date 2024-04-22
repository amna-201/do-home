import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Your Task"
        autoComplete="off"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
