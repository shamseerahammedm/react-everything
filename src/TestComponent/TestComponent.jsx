import React, { useRef } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  username: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required')
});

const dummyAPI = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        message: 'Some error',
        data: {
          username: 'User name already exists',
          email: 'Email is already taken',
          firstName: 'First name is not permissable'
        }
      });
    }, 1500);
  });
};

const SignupForm = () => {
  const formikRef = useRef();
  const submitHandler = async (values) => {
    if (formikRef.current)
    {
      const data = await dummyAPI();
      const { setStatus, setSubmitting } = formikRef.current;
      setSubmitting(true);

      const errorData = data.data;
      console.log('errorData', errorData);
      setStatus(errorData);
      setSubmitting(false);
    }
  };
  return (
    <Formik
      innerRef={formikRef}
      validationSchema={schema}
      validateOnBlur={false}
      initialValues={{
        username: 'test',
        lastName: 'testing',
        firstName: 'te$ter',
        email: 'test@test.com'
      }}
      onSubmit={submitHandler}
    >
      {({
        errors,
        touched,
        getFieldProps,
        handleChange,
        isSubmitting,
        status
      }) => {
        return (
          <Form>
            <p>Back end validation</p>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="firstName">Username</label>
              <input id="username" type="text" {...getFieldProps('username')} />
              {touched.username && errors.username ? (
                <div style={{ color: 'red' }}>{errors.username}</div>
              ) : null}
              {status && status.username ? (
                <div style={{ color: 'red' }}>{status.username}</div>
              ) : null}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="lastName">First Name</label>
              <input
                id="lastName"
                type="text"
                onChange={handleChange}
                {...getFieldProps('firstName')}
              />
              {errors.firstName ? (
                <div style={{ color: 'red' }}>{errors.firstName}</div>
              ) : null}

              {status && status.firstName ? (
                <div style={{ color: 'red' }}>{status.firstName}</div>
              ) : null}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" {...getFieldProps('lastName')} />
              {touched.lastName && errors.lastName ? (
                <div style={{ color: 'red' }}>{errors.lastName}</div>
              ) : null}

              {status && status.lastName ? (
                <div style={{ color: 'red' }}>{status.lastName}</div>
              ) : null}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" {...getFieldProps('email')} />
              {touched.email && errors.email ? (
                <div style={{ color: 'red' }}>{errors.email}</div>
              ) : null}

              {status && status.email ? (
                <div style={{ color: 'red' }}>{status.email}</div>
              ) : null}
              
            </div>

            <button type="submit" disabled={isSubmitting}>
              Add Details
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
