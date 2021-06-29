import { Grid, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Input from 'form/Formik/CorrectInputComponents/Input/Input';
import * as Yup from 'yup';
import DatePicker from 'form/Formik/CorrectInputComponents/DatePicker/DatePicker';
import DateTimePicker from 'form/Formik/CorrectInputComponents/DateTimePicker/DateTimePicker';
import Switch from 'form/Formik/CorrectInputComponents/Switch/Switch';
import Checkbox from 'form/Formik/CorrectInputComponents/CheckboxComponent/Checkbox/Checkbox';
import './CustomFormikMaterilUI.scss';
import CheckboxGroup from 'form/Formik/CorrectInputComponents/CheckboxComponent/CheckboxGroup/CheckboxGroup';
import MultiSelect from 'form/Formik/CorrectInputComponents/MultiSelect/MultiSelect';
// import CheckboxGroup2 from 'form/Formik/CorrectInputComponents/CheckboxComponent/CheckboxGroupFieldChildren/CheckboxGroup';
import SingleSelect from 'form/Formik/CorrectInputComponents/SingleSelect/SingleSelect';
import SearchableSelect from 'form/Formik/CorrectInputComponents/SearchableSelect/SearchableSelect';
import RadioGroup from 'form/Formik/CorrectInputComponents/RadioGroupComponent/RadioGroup/RadioGroup';
import RadioButton from 'form/Formik/CorrectInputComponents/RadioGroupComponent/RadioButton/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const muiSchema = Yup.object().shape({
  first_name: Yup.string().required('This field is required'),
  date: Yup.date().nullable().required('This field is required'),
  date_time_picker: Yup.date().nullable().required('This field is required'),
  agreement: Yup.bool().oneOf([true], 'Must agree'),
  do_you_agree: Yup.bool().oneOf([true], 'Must agree'),
  group_checkbox: Yup.array().min(1, 'At least one checkbox is required'),
  gender: Yup.array().min(1, 'This field must have at least 1 item.'),
  radioGroup: Yup.string().required('This field is required'),
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
const INITIAL_FORM_DATA = {
  first_name: '',
  date: null,
  date_time_picker: new Date(),
  agreement: false,
  do_you_agree: false,
  group_checkbox: [],
  gender: [],
  select: '',
  age_range: '',
  agency: {},
  radioGroup: ''
};
const CustomFormikMaterialUI = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [options, setOptions] = useState([]);
  const editFormData = useSelector(state => state.generalReducer.formData);
  const isFormOpenForEditing = (editFormData && params.Id) ? true : false;
  useEffect(() => {
    if (params.Id)
    {
      dispatch({ type: 'FETCH_MUI_FORMIK_FORM_DATA' });
    }
  }, [params]);

  render = render + 1;
  return (
    <div className="CustomFormikMaterialUI" >
      <Formik
        enableReinitialize={isFormOpenForEditing ? true : false}
        validationSchema={muiSchema}
        initialValues={isFormOpenForEditing ? editFormData : INITIAL_FORM_DATA}
        onSubmit={(values) => {
          dispatch({ type: 'SUBMIT_MUI_FORMIK_FORM ', payload: values });
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
                        {({ field: { value, name }, form: { status, touched, errors, setFieldValue, setFieldTouched } }) => (
                          <CheckboxGroup
                            id={name}
                            value={value}
                            errors={errors}
                            touched={touched}
                            status={status}
                            setFieldValue={setFieldValue}
                            onBlur={setFieldTouched}
                            label="Pass null to hide checkbox label"
                            required
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
                    <Grid item xs={6}>
                      <p className="info">Radio Group</p>
                      <Field name="radioGroup">
                        {({ field: {  name }, form: { touched, errors, status } }) => (
                          <RadioGroup
                            id={name}
                            errors={errors}
                            touched={touched}
                            status={status}
                            label="Pass null to hide radio label"
                            required
                          >
                            <Field
                              component={RadioButton}
                              name="radioGroup"
                              id="radioOption1"
                              label="Choose this option"
                            />
                            <Field
                              component={RadioButton}
                              name="radioGroup"
                              id="radioOption2"
                              label="Or choose this one"
                            />
                          </RadioGroup>
                        )}
                      </Field>

                    </Grid>

                    <Grid item xs={12}>
                      <hr />
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

{/* 

Insted of render prop CheckboxGroup & RadioButtonGroup is also usable like this

<CheckboxGroup
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
</CheckboxGroup>; 

<RadioButtonGroup
  id="radioGroup"
  value={values.radioGroup}
  error={errors.radioGroup}
  touched={touched.radioGroup}
  label="Pass null to hide radio label"
  required
>
  <Field
    component={RadioButton}
    name="radioGroup"
    id="radioOption1"
    label="Choose this option"
  />
  <Field
    component={RadioButton}
    name="radioGroup"
    id="radioOption2"
    label="Or choose this one"
  />
</RadioButtonGroup>;

*/ }

