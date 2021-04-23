import { Grid, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Input from '../CorrectInputComponents/Input/Input';
import * as Yup from 'yup';
import DatePicker from '../CorrectInputComponents/DatePicker/DatePicker';
import DateTimePicker from '../CorrectInputComponents/DateTimePicker/DateTimePicker';
import Switch from '../CorrectInputComponents/Switch/Switch';
import Checkbox from '../CorrectInputComponents/CheckboxComponent/Checkbox/Checkbox';
import './CustomFormikMaterilUI.scss';
import CheckboxGroup from '../CorrectInputComponents/CheckboxComponent/CheckboxGroup/CheckboxGroup';
import MultiSelect from '../CorrectInputComponents/MultiSelect/MultiSelect';
import CheckboxGroup2 from '../CorrectInputComponents/CheckboxComponent/CheckboxGroupFieldChildren/CheckboxGroup';
import SingleSelect from '../CorrectInputComponents/SingleSelect/SingleSelect';
import SearchableSelect from '../CorrectInputComponents/SearchableSelect/SearchableSelect';

const muiSchema = Yup.object().shape({
  first_name: Yup.string().required('This field is required'),
  date: Yup.date().nullable().required('This field is required'),
  date_time_picker: Yup.date().nullable().required('This field is required'),
  agreement: Yup.bool().oneOf([true], 'Must agree'),
  do_you_agree: Yup.bool().oneOf([true], 'Must agree'),
  group_checkbox: Yup.array().min(1, 'At least one checkbox is required'),
  gender: Yup.array().min(1,'This field must have at least 1 item.'),
  age_range: Yup.string()
    .required('This field is required.')
    .max(100, 'Maximum characters upto 100.'),
  agency: Yup.object().nullable().required('This field is required'),
});

const optionsGenerator = async () => {
  const options = await fetch('https://reqres.in/api/unknown');
  const optionsJson = await options.json();
  return optionsJson.data;
};

let render = 0;
const CustomFormikMaterialUI = () => {
  const [ options , setOptions ] = useState([]);
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
          gender: [],
          select : '',
          age_range : '',
          agency : []
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
                        // required
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
                      <p className="info">Select</p>
                      <Field
                        component={SingleSelect}
                        name="age_range"
                        placeHolder="Select Filter"
                        options={dashboardFilterOptions}
                        optionLabel="label"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <p className="info">Multi Select</p>
                      <Field
                        component={MultiSelect}
                        name="gender"
                        options={genderOptions}
                        optionLabel="label"
                        placeholder="Select Gender"
                        className="outlinedInput"
                        valueLabel="value"
                        showLoaderIcon
                        // required
                        // popupIcon={<AngleDownIcon />}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <p className="info">Autocomplete</p>
                      <Field
                        component={SearchableSelect}
                        name="agency"
                        label="Agency"
                        options={options}
                        onInputChange={async (e, value, reason) => {
                          const optionsData = await optionsGenerator();
                          setOptions(optionsData);
                        }}
                        // loading={isLoading}
                        optionLabel="name"
                        creatable
                        clearOnBlur
                        noOptionsText="Type here to search"
                        // required
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
                      <hr/>
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

const genderOptions = [
  { label: 'Male', value: 1 },
  { label: 'Female', value: 2 },
  { label: 'Transgender', value: 3 },
];

const dashboardFilterOptions = [
  { label: 'All Time', value: 1 },
  { label: 'Today', value: 2 },
  { label: 'This Week', value: 3 },
  { label: 'This Month', value: 4 },
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