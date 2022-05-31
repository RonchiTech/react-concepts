import React, { useState, useMemo } from 'react';

const Counter = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const increaseOne = () => setFirstValue(firstValue + 1);
  const increaseTwo = () => setSecondValue(secondValue + 1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return firstValue % 2 === 0;
  }, [firstValue]);

  return (
    <div>
      {isEven ? 'Even' : 'Odd'}
      <div>
        <h2>{firstValue}</h2>
        <button onClick={increaseOne}>Increase 1</button>
      </div>
      <div>
        <h2>{secondValue}</h2>
        <button onClick={increaseTwo}>Increase 2</button>
      </div>
    </div>
  );
};

export default Counter;
