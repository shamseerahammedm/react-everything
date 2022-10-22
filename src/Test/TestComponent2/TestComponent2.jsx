import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

let render = 0;
const TestComponent2 = () => {
  render = render + 1;

  const [ state, setState ] = useState(0);
  return (
    <div>
      <Formik
        initialValues={{
          something : ''
        }}
        onSubmit={(values) => {}}
      >
        {({ values }) => {
          return (
            <Form>
              <Field
                name="something"
              />
              <Field
                name="something"
              >
                {(props)=>{
                  console.log('props',props);
                  return <input type="text" onChange={(e)=>{
                    props.form.setFieldValue('something2',e.target.value );
                  }}/>;
                }}
              </Field>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              render :: <pre>{JSON.stringify(render, null, 2)}</pre>
              <button onClick={()=>setState(prev => prev + 1)}>render</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TestComponent2;
