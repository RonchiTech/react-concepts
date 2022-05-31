import React from 'react';

const Button = ({ onClickHandler, children }) => {
  console.log('Logging Button at', children);
  return <button onClick={onClickHandler}>{children}</button>;
};

export default React.memo(Button);
