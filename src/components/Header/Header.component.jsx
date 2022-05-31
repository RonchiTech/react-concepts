import React from 'react';

const Header = () => {
  console.log('Logging at Header');
  return <h2>How to useCallback</h2>;
};

export default React.memo(Header);
