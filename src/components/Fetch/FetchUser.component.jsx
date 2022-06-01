import React from 'react';
import useFetch from '../../concepts/CustomHook/useFetch';

const URL = 'https://jsonplaceholder.typicode.com/users';

function FetchUser() {
  const [data, onClickHandler] = useFetch(URL);
  console.log('data', data);
  return (
    <div>
      <button onClick={onClickHandler}>Show Alert!</button>
      {data.map((user) => {
        return <h2 key={user.id}>{user.name}</h2>;
      })}
    </div>
  );
}

export default FetchUser;
