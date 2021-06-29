
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Input from '../CorrectInputComponents/Input/Input';
import * as Yup from 'yup';
import Button from 'material/CorrectedMaterilUIComponents/Button/Button';
import { Grid, Typography } from '@material-ui/core';
import SearchableSelect from 'form/Formik/CorrectInputComponents/SearchableSelect/SearchableSelect';

export const formSchema = Yup.object().shape({
  first_name: Yup.string()
    .required('First name is required.')
    .max(100, 'Maximum characters upto 100.')
    .matches(/^[A-Za-z ]*$/, 'First name should not contain special characters or numbers'),
  last_name: Yup.string()
    .required('First name is required.')
    .max(100, 'Maximum characters upto 100.')
    .matches(/^[A-Za-z ]*$/, 'First name should not contain special characters or numbers'),
  agency: Yup.object().nullable().required('This field is required'),
});

const FormikForm = () => {
  return (
    <div className="container" style={{ padding: '50px' }}>
      <Formik
        validationSchema={formSchema}
        validateOnBlur={false}
        initialValues={{
          first_name: '',
          last_name: '',
          agency: []
        }}
        onSubmit={(values) => {
          console.log('values', values);
        }}
        initialErrors={{
          first_name: 'asd',
          last_name: 'asd',
          agency: 'initial error'
        }}
        initialTouched={{
          first_name: true,
          last_name: true,
          agency: false
        }}
      >
        {({ errors, values, touched }) => {
          return (
            <Form>
              <Grid container >
                <Grid item container xs={6} spacing={2}>
                  <Grid item xs={12}>
                    <p>Formik - initialTouched, initialErrors </p>
                  </Grid>
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
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      component={SearchableSelect}
                      name="agency"
                      label="Agency"
                      options={[]}
                      optionLabel="name"
                      creatable
                      clearOnBlur
                      noOptionsText="Type here to search"
                    />
                  </Grid>
                  <Grid item xs={12} spacing={2}>
                    <Button type="submit">
                    Submit
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="secondary">Values</Typography>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                  <Typography color="secondary">Errors</Typography>
                  <pre>{JSON.stringify(errors, null, 2)}</pre>
                  <Typography color="secondary">touched</Typography>
                  <pre>{JSON.stringify(touched, null, 2)}</pre>
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

