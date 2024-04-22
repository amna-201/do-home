import React from 'react';

function CompletedTodoList({ completedTodos }) {
    return (
        <ul>
            {completedTodos.map((todo, index) => (
                <li key={index}>
                    <span style={{ textDecoration: 'line-through' }}>{todo.text}</span>
                </li>
            ))}
        </ul>
    );
}

export default CompletedTodoList;
