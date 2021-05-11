import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useEvenOddAnalyser, useFormSubmit } from 'Hooks/CustomHook';

const CustomHook = () => {

  const { 
    counter, 
    incrementCounter,
    decrementCounter,
    isEven
  } = useEvenOddAnalyser();

  const { submitFormHandler } = useFormSubmit();

  return (
    <div>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
      <p>Counter - {counter}</p>
      <p>Counter is now : {isEven ? 'Even' : 'Odd'}</p>
      <Formik
        initialValues={{
          test : ''
        }}
        onSubmit={submitFormHandler}
      >
        {({ values }) => {
          return (
            <Form>
              <Field name="test" type="text"/>
              <button type="submit">Submit</button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CustomHook;

