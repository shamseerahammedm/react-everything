import React, { useState } from 'react';
import axios from 'axios';

const TestComponent = () => {
  const [ toggle, setToggle ] = useState(false);
  const submitHandler = event => {
    event.preventDefault();
    const yourState = { somevalue : 11111, sotherValue : 22222 };
    axios('http://localhost:8080/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: yourState
    }).then(res => {
      console.log(res);
    })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={() => setToggle(prevState => !prevState)}> Click - {<pre>{JSON.stringify(toggle, null, 2)}</pre>} </button>
      <TestComponent1 toggle={toggle}/>
      <button onClick={(e)=>submitHandler(e)}>submitHandler</button>
    </div>
  );
};

export default TestComponent;

const TestComponent1 = ({
  toggle
}) => {
  const [ number, setNumber ] = useState(1);
  return (
    <div>
      {number}
      {
        toggle
        &&
      <button onClick={() => setNumber(prevState => prevState + 1)}> Click </button>
      }
    </div>
  );
};
