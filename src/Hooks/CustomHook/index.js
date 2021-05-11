import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useEvenOddAnalyser = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [isEven, setEven] = useState(false);

  const incrementCounter = () => setCounter(prevState => prevState + 1);
  const decrementCounter = () => setCounter(prevState => {
    if (prevState === 0)
    {
      return prevState;
    }
    return prevState - 1;
  });

  useEffect(() => {
    if (counter % 2 === 0)
    {
      setEven(true);
    }
    else
    {
      setEven(false);
    }
  }, [counter]);

  return {
    counter,
    incrementCounter,
    decrementCounter,
    isEven
  };
};

const useFormSubmit = () => {
  const dispatch = useDispatch();
  const submitFormHandler = (values) => dispatch({ type : 'SUBMIT_FORMIK_FROM_CUSTOM_HOOK', payload : values.test });

  return {
    submitFormHandler
  };
};

export {
  useEvenOddAnalyser,
  useFormSubmit
};