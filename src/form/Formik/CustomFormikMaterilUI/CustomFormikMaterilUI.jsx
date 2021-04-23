import { Grid } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Input from '../CorrectInputComponents/Input/Input';
import * as Yup from 'yup';
import DatePicker from '../CorrectInputComponents/DatePicker/DatePicker';
import DateTimePicker from '../CorrectInputComponents/DateTimePicker/DateTimePicker';
import Switch from '../CorrectInputComponents/Switch/Switch';
import Checkbox from '../CorrectInputComponents/CheckboxComponent/Checkbox/Checkbox';
import './CustomFormikMaterilUI.scss';

let render = 0;
const CustomFormikMaterialUI = () => {
  render = render + 1;
  return (
    <div className="CustomFormikMaterialUI" >
      <Formik
        validationSchema={Yup.object().shape({
          first_name: Yup.string().required('First name is required'),
          date: Yup.date().nullable().required('Date is required'),
          date_time_picker: Yup.date().nullable().required('Date time picker is required'),
          agreement: Yup.bool().oneOf([true], 'Must agree'),
          do_you_agree: Yup.bool().oneOf([true], 'Must agree')
        })}
        initialValues={{
          first_name: '',
          date: null,
          date_time_picker: new Date(),
          agreement: false,
          do_you_agree : false
        }}
        onSubmit={(values) => {
          console.log('$$$$$------ values ------$$$$', values);
        }}
      >
        {({ touched, errors, values, ...otherProps }) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>Formik with material ui integrated - Render Count : {render}</p>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <p className="info">Input</p>
                      <Field
                        component={Input}
                        name="first_name"
                        label="First Name"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <p className="info">Date picker</p>
                      <Field
                        component={DatePicker}
                        name="date"
                        disablePast={false}
                        disableFuture={true}
                        required
                        clearable
                        placeholder="Start Date"
                      // icon={<CalendarIcon />}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <p className="info">Date time picker</p>
                      <Field
                        component={DateTimePicker}
                        name="date_time_picker"
                        disablePast={false}
                        disableFuture={true}
                        required
                        clearable
                        placeholder="Date time"
                      // icon={<CalendarIcon />}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <p className="info">Switch</p>
                      <Field
                        component={Switch}
                        name="agreement"
                        label="Agreement"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <p className="info">Checkbox Single</p>
                      <Field
                        component={Checkbox}
                        name="do_you_agree"
                        label="Do you agree ?"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <button type="submit">
                        Submit
                      </button>
                    </Grid>
                  </Grid>

                </Grid>
                <Grid item xs={6}>
                  <p>Values</p>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                  <p>Touched</p>
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

export default CustomFormikMaterialUI;
