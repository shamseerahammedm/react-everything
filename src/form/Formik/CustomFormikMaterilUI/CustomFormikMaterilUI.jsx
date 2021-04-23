import { Button, Grid } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Input from '../CorrectInputComponents/Input/Input';
import * as Yup from 'yup';

const CustomFormikMaterialUI = () => {
  return (
    <div style={{ padding : '50px'}}>
      <Formik
        validationSchema={Yup.object().shape({
          first_name: Yup.string().required(),
          phone_number: Yup.string().required(),
          singleCheckbox: Yup.bool().oneOf([true], 'Must agree to something')
        })}
        validateOnBlur={false}
        initialValues={{
          first_name: '',
          phone_number: '',
          date: null,
          singleCheckbox: false
        }}
        onSubmit={(values) => {
          console.log('values', values);
        }}
      >
        {({ errors, values, ...otherProps }) => {
          console.log('otherProps', otherProps);
          return (
            <Form>
              <p>Formik with material ui integrated</p>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    component={Input}
                    name="first_name"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
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

export default CustomFormikMaterialUI;
