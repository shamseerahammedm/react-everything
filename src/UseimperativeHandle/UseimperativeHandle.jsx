import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';

// Parent Component
const UseimperativeHandle = () => {
  const childRef = useRef();

  const [val, setVal] = useState(0);
  useEffect(() => {
    if (childRef.current)
    {
      const data = childRef.current.test('somthing');
      setVal(data);
    }
  }, [childRef.current]);

  return (
    <div className="container">
      <button onClick={() => childRef.current.setCount(prevState => prevState + 1)}> Button in parent that uses function in child</button>
      <button onClick={() => childRef.current.test(1234)}> Run child function </button>
      <ChildComponent ref={childRef} test="test" />
    </div>
  );
};

export default UseimperativeHandle;

// Child component
const ChildComponent = forwardRef((props, ref) => {
  console.log('ref', ref);
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    setCount: setCount,
    test: test
  }));

  const test = (val = null) => {
    console.log(`Child function running - ${val}`);
  };

  return (
    <div>
      <button onClick={() => setCount(prevState => prevState + 1)}> Button in child that use function in child</button>
      <p>
        Test is the thing {count}
      </p>
      <p>
        Props : {props.test}
      </p>

    </div>
  );
});