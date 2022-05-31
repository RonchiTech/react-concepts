import React, { useState, useCallback } from 'react';
import Header from '../../components/Header/Header.component';
import Count from '../../components/Count/Count.component';
import Button from '../../components/Button/Button.component';
const ParentContainer = () => {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(34000);

  const onIncreaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const onIncreaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <React.Fragment>
      <Header />
      <Count text="Age" value={age} />
      <Button onClickHandler={onIncreaseAge}>Increase Age</Button>
      <Count text="Salary" value={salary} />
      <Button onClickHandler={onIncreaseSalary}>Increase Salary</Button>
    </React.Fragment>
  );
};

export default ParentContainer;
