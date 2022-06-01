import React from 'react';
import useFetch from '../../concepts/CustomHook/useFetch';
const URL = 'https://jsonplaceholder.typicode.com/todos';
function FetchTodo() {
  const [todos] = useFetch(URL);
  return (
    <div>
      {todos.map((todo) => (
        <h4 key={todo.id}>{todo.title}</h4>
      ))}
    </div>
  );
}

export default FetchTodo;
