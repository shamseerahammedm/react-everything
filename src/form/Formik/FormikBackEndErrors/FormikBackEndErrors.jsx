import React, { useEffect, useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';
import Input from '../CorrectInputComponents/Input/Input';

const addClientSchema = Yup.object().shape({
  // first_name: Yup.string()
  //     .required('First name is required')
  //     .max(100, 'Maximum characters upto 100.')
  //     .matches(/^[A-Za-z ]*$/, 'First name should not contain special characters or numbers'),
  // last_name: Yup.string()
  //     .required('Last name is required')
  //     .max(100, 'Maximum characters upto 100.')
  //     .matches(/^[A-Za-z ]*$/, 'Last name should not contain special characters or numbers'),

  phone_number: Yup.string()
    .required('Mobile number is required!')
    .matches(/^[0-9\+\ ]+$/, {
      message: 'Mobile number must contain only numeric characters',
      excludeEmptyString: true
    })
    .max(13, 'Maximum characters upto 13.')
    .min(10, 'Must have minimum 10 characters.'),
  email: Yup.string()
    .required('Email is required!')
    .email('Please enter a valid email')
    .max(100, 'Maximum characters upto 100.'),
  enable_cold_calling: Yup.bool(),

});

const EditClientForm = () => {
  const formikRef = useRef();
  const [initialValues, setinitialValues] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    enable_cold_calling: false,
  });

  const [formErrors, setFormErrors] = useState(null);

  // simulating api call to reset values 
  useEffect(() => {
    new Promise((res, rej) => {
      setTimeout(() => {
        res(setinitialValues({
          first_name: 'shamseer',
          last_name: 'lastname',
          phone_number: '8089847096',
          email: 'mail4shamseer@gmail.com',
          enable_cold_calling: true,
        }));
      }, 2000);
    });
  }, []);

  const submitFormHandler = (values, resetForm, setValues) => {

    console.log('values', values);
    new Promise((res, rej) => {
      setTimeout(() => {
        const resolve = () => {
          setFormErrors({
            apiErrors: {
              first_name: 'This field may not be blank.',
              last_name: 'This field may not be blank.'
            }
          });

          // when not using sags or api calls
          // resetForm({ ...values, status : { apiErrors : {
          // 	first_name: "This field may not be blank.",
          // 	last_name:"This field may not be blank."
          // } } })
          // setValues(values)
        };
        res([resolve()]);
      }, 2000);
    });
  };

  /* 
      setValues must be called after  resetForm, if order chaged it wont work
  */
  useEffect(() => {
    if (formikRef && formErrors)
    {

      const { resetForm, values, setValues } = formikRef.current;
      resetForm({
        ...values,
        status: {
          apiErrors: {
            first_name: 'This field may not be blank.',
            last_name: 'This field may not be blank.'
          }
        }
      });
      setValues(values);
    }
  }, [formikRef, formErrors]);

  return (
    <div className="container">
      <Formik
        innerRef={formikRef}
        enableReinitialize // if this is false values wont be set after settime out either use this or use showform 
        initialValues={initialValues}
        validationSchema={addClientSchema}
        onSubmit={(values, { setErrors, setStatus, setFieldError, resetForm, setValues }) => {
          submitFormHandler(values, resetForm, setValues);
        }}
      >
        {({ values, errors, isSubmitting, setFieldValue, status, resetForm, setValues }) => {

          // console.log("status", status);
          console.log(errors);
          return (
            <Form noValidate="novalidate">
              <section className="detailsOfClient">
                <h3 className="editClientContentHeading">Enter details of the client</h3>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={Input}
                      name="first_name"
                      label="First Name"
                      required
                    />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={Input}
                      name="last_name"
                      label="Last Name"
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      component={Input}
                      name="phone_number"
                      label="Mobile Number"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={Input}
                      name="email"
                      label="Email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <button>Update</button>
                    <button>Submit</button>
                  </Grid>
                </Grid>
              </section>

            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditClientForm;

