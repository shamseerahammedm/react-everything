import { Grid, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Input from '../CorrectInputComponents/Input/Input';
import * as Yup from 'yup';
import DatePicker from '../CorrectInputComponents/DatePicker/DatePicker';
import DateTimePicker from '../CorrectInputComponents/DateTimePicker/DateTimePicker';
import Switch from '../CorrectInputComponents/Switch/Switch';
import Checkbox from '../CorrectInputComponents/CheckboxComponent/Checkbox/Checkbox';
import './CustomFormikMaterilUI.scss';
import CheckboxGroup from '../CorrectInputComponents/CheckboxComponent/CheckboxGroup/CheckboxGroup';
import CheckboxGroup2 from '../CorrectInputComponents/CheckboxComponent/CheckboxGroupFieldChildren/CheckboxGroup';

const muiSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  date: Yup.date().nullable().required('Date is required'),
  date_time_picker: Yup.date().nullable().required('Date time picker is required'),
  agreement: Yup.bool().oneOf([true], 'Must agree'),
  do_you_agree: Yup.bool().oneOf([true], 'Must agree'),
  group_checkbox: Yup.array().min(1, 'At least one checkbox is required'),
});

let render = 0;
const CustomFormikMaterialUI = () => {
  render = render + 1;
  return (
    <div className="CustomFormikMaterialUI" >
      <Formik
        validationSchema={muiSchema}
        initialValues={{
          first_name: '',
          date: null,
          date_time_picker: new Date(),
          agreement: false,
          do_you_agree: false,
          group_checkbox: [],
        }}
        onSubmit={(values) => {
          console.log('$$$$$------ values ------$$$$', values);
        }}
      >
        {({ touched, errors, values, setFieldValue, setFieldTouched, ...otherProps }) => {
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
                    <Grid item xs={6}>
                      <p className="info">Checkbox group</p>
                      <Field
                        name="group_checkbox"
                      >
                        {({ field: { value, name }, form: { touched, errors, setFieldValue, setFieldTouched } }) => (
                          <CheckboxGroup
                            id={name}
                            value={value}
                            error={touched[name] && errors[name]}
                            touched={touched[name]}
                            setFieldValue={setFieldValue}
                            onBlur={setFieldTouched}
                            name={name}
                          >
                            {
                              dummyCheckBoxOptions.map(item => (
                                <Field
                                  component={Checkbox}
                                  name={name}
                                  id={item.id}
                                  label={item.label}
                                  key={item.id}
                                />
                              ))
                            }
                          </CheckboxGroup>
                        )}
                      </Field>

                    </Grid>
                    <Grid item xs={12}>
                      <button type="submit">
                        Submit
                      </button>
                    </Grid>
                  </Grid>

                </Grid>
                <Grid item xs={6}>
                  <Typography color="secondary">Values</Typography>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                  <Typography color="secondary">Touched</Typography>
                  <pre>{JSON.stringify(touched, null, 2)}</pre>
                  <Typography color="secondary">Errors</Typography>
                  <pre>{JSON.stringify(errors, null, 2)}</pre>
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

const dummyCheckBoxOptions = [
  { id: 'first_nick_name', label: 'First / Nick Name' },
  { id: 'last_name', label: 'Last Name' },
  { id: 'state', label: 'State' },
  { id: 'city', label: 'City' },
];

{/* <CheckboxGroup
  id="group_checkbox"
  value={values.group_checkbox}
  error={errors.group_checkbox}
  touched={touched.group_checkbox}
  setFieldValue={setFieldValue}
  onBlur={setFieldTouched}
  name="group_checkbox"
>
  {
    dummyCheckBoxOptions.map(item => (
      <Field
        component={Checkbox}
        name="group_checkbox"
        id={item.id}
        label={item.label}
        key={item.id}
      />
    ))
  }
</CheckboxGroup>; */}