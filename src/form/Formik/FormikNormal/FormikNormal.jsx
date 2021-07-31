import { Field, Form, Formik } from 'formik';
import React from 'react';
import Input from './NormalComponents/Input';

const FormikNormal = () => {
  return (
    <div>
      <Formik
        initialValues={{
          first_name : ''
        }}
        onSubmit={(values) => {}}
      >
        {({ values, touched, errors }) => {
          return (
            <Form>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="">Normal input</label>
                    <Field
                      component={Input}
                      name="first_name"
                    />
                  </div>
                  {/* Details starts */}
                  <div className="col-sm-6">
                    values
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    touched
                    <pre>{JSON.stringify(touched, null, 2)}</pre>
                    errors
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                  </div>
                </div>
              
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikNormal;
