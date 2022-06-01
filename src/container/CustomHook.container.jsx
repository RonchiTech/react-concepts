import React from 'react';
import FetchTodo from '../components/Fetch/FetchTodo.component';
import FetchUser from '../components/Fetch/FetchUser.component';
function CustomHook() {
  return (
    <React.Fragment>
      {/* <FetchTodo /> */}
      <FetchUser />
    </React.Fragment>
  );
}

export default CustomHook;
