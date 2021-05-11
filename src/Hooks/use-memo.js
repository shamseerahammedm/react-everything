import React, { useState, useCallback, useMemo } from 'react';

const UseMemo = () => {

  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  // counterOne is same this wont rerender it will use cache value 
  const isEven = () => {
    let i = 0;
    while (i < 2000000000) i++;
    console.log('wow');
    if (counterOne % 2 === 0) {
      return true;
    }
    else {
      return false;
    }
  };

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  return (
    <div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={incrementOne}> Count One - {counterOne}</button>
        <span> {isEven() ? 'Even' : 'Odd'}</span>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={incrementTwo}> Count One - {counterTwo}</button>
      </div>
    </div>
  );
};

export default UseMemo;
