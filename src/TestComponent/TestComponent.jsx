import React, { useState } from 'react';

const array = new Array(400).fill();

const TestComponent = () => {

  const [ isShown, setIsShown ] =  useState(false);
  const [ something, setSomething ] = useState(false);

  return (
    <div>
      <button onClick={()=>setSomething(prevState => !prevState)}>Something </button>
      <button onClick={()=>setIsShown(prevState => !prevState)}>Show </button>
      {
        isShown
        &&
        array.map((item, i) => <ChildOne key={i} text={`Item ${i+1}`}/>)
      }
    </div>
  );
};

export default TestComponent;

const ChildOne = React.memo(({ text }) => {
  console.log('child');
  return (<p>{text}</p>);
});
