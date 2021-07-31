import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

const TestComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          first : '',
          second : ''
        }}
        onSubmit={(values) => { }}
      >
        {({ values, setValues }) => {
          return (
            <Form>
              {
                values.first
              }
              {
                values.second
              }
              <button
                onClick={()=>{
                  setValues({
                    first : 'asdf',
                    second : 'asdf'
                  });
                }}
              > set</button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TestComponent;
