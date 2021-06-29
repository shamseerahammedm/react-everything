import { Grid } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Input from '../CorrectInputComponents/Input/Input';
import * as Yup from 'yup';
import Button from 'material/CorrectedMaterilUIComponents/Button/Button';

export const formSchema = Yup.object().shape({
  first_name: Yup.string()
    .required('First name is required.')
    .max(100, 'Maximum characters upto 100.')
    .matches(/^[A-Za-z ]*$/, 'First name should not contain special characters or numbers'),
});

function validateLastName(value) {
  let error;
  if (value === '') {
    error = 'Nice try!';
  }
  return error;
}

const FormikForm = () => {
  return (
    <div className="container" style={{ padding : '50px'}}>
     
      <Formik
        validationSchema={formSchema}
        validateOnBlur={false}
        initialValues={{
          first_name: '',
          last_name: '',
          date: null,
          company: []
        }}
        onSubmit={(values) => {
          console.log('values', values);
        }}
      >
        {({ validateField, validateForm, errors, touched, ...otherProps }) => {
          return (
            <Form>
              <p>Test Form asdasdasd</p>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    component={Input}
                    name="first_name"
                    label="First Name"
                    
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={Input}
                    name="last_name"
                    label="Last Name"
                    validate={validateLastName}
                  />
                </Grid>
                <Grid item xs={12} spacing={2}>
                  <button type="button" onClick={() => validateField('last_name')}> Validate Particular field</button>
                  <Button 
                    type="button"
                    onClick={() => validateForm().then((errors) => console.log(errors))}
                  >
                    Validate form
                  </Button>
                  <Button type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    
    </div>
  );
};

export default FormikForm;

