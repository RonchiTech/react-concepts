import React from 'react';

const Count = ({ text, value }) => {
  console.log('Logging Count at', text);
  return <div>Count is: {value}</div>;
};

export default React.memo(Count);
