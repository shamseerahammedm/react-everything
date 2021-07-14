import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Input from '../CorrectInputComponents/Input/Input';
import * as Yup from 'yup';
import DatePicker from '../CorrectInputComponents/DatePicker/DatePicker';
import Switch from '../CorrectInputComponents/Switch/Switch';
import MultiSelect from '../CorrectInputComponents/MultiSelect/MultiSelect';
import SingleSelect from '../CorrectInputComponents/SingleSelect/SingleSelect';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const muiSchema = Yup.object().shape({
  first_name: Yup.string().required('This field is required'),
  date: Yup.date().nullable().required('This field is required'),
  agreement: Yup.bool().oneOf([true], 'Must agree'),
  gender: Yup.array().min(1, 'This field must have at least 1 item.'),
  age_range: Yup.string()
    .required('This field is required.')
    .max(100, 'Maximum characters upto 100.'),
});

let render = 0;
const INITIAL_FORM_DATA = {
  first_name: 'some name',
  date: new Date(),
  agreement: true,
  age_range: 1,
  gender: [{
    'label': 'Male',
    'value': 1
  }],
  fruits : [],
  calories : ''
};

const submitter = () => {
  return new Promise ((res, rej) => {
    setTimeout(() =>{
      res({
        message : 'Fake validation message.',
        data : [
          {
            key: 'first_name',
            message : 'First name back end error'
          },
          {
            key: 'date',
            message : 'Date back end error'
          },
          {
            key: 'agreement',
            message : 'Agreement back end error'
          },
          {
            key: 'age_range',
            message : 'Age back end error'
          },
          {
            key: 'gender',
            message : 'Gender back end error'
          },

        ]
      });
    }, 500);
  });
};

const HookFormBackEndValidation = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.Id)
    {
      dispatch({ type: 'FETCH_MUI_FORMIK_FORM_DATA' });
    }
  }, [dispatch, params]);

  // Section Starts :: Hook form -- 
  const {
    control,
    handleSubmit,
    watch,
    setError
  } = useForm({
    defaultValues: INITIAL_FORM_DATA,
    resolver: yupResolver(muiSchema),
    mode : 'onBlur' 
  });

  const onSubmit = async (values) => {
    const data = await submitter();
    data.data.forEach(errorItem => {
      // show errors using this function
      setError(errorItem.key, {
        message : errorItem.message
      });
    });
  };

  // const watchAllFields = watch();
  const watchAllFields = {};
  const fruits = watch('fruits');

  return (
    <div className="CustomFormikMaterialUI" >

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p>React hook form Back end validation - Render Count : {render}</p>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p className="info">Input</p>
                <Input
                  name="first_name"
                  label="First Name"
                  control={control}
                  defaultValue={{}}
                // required
                />
              </Grid>
              <Grid item xs={6}>
                <p className="info">Date picker</p>
                <DatePicker
                  name="date"
                  disablePast={false}
                  disableFuture={true}
                  required
                  clearable
                  placeholder="Start Date"
                  control={control}
                // icon={<CalendarIcon />}
                />
              </Grid>
              <Grid item xs={6}>
                <p className="info">Switch</p>
                <Switch
                  name="agreement"
                  label="Agreement"
                  control={control}
                />
              </Grid>
              <Grid item xs={6}>
                <p className="info">Select</p>
                <SingleSelect
                  name="age_range"
                  placeHolder="Select Filter"
                  options={dashboardFilterOptions}
                  optionLabel="label"
                  control={control}
                />
              </Grid>
              <Grid item xs={6}>
                <p className="info">Multi Select</p>
                <MultiSelect
                  label="Gender"
                  name="gender"
                  options={genderOptions}
                  optionLabel="label"
                  className="outlinedInput"
                  valueLabel="value"
                  showLoaderIcon
                  control={control}
                // required
                // popupIcon={<AngleDownIcon />}
                />
              </Grid>

              <Grid item xs={12}>
                <p>Dependand fields</p>
                <hr />
              </Grid>
              <Grid item xs={6}>
                <p className="info">Multi Select ( pick apple )</p>
                <MultiSelect
                  label="Fruits"
                  name="fruits"
                  options={fruites}
                  optionLabel="label"
                  className="outlinedInput"
                  valueLabel="value"
                  showLoaderIcon
                  control={control}
                />
              </Grid>
              {
                fruits.find(item => item.label === 'Apple')
                  &&
                  <Grid item xs={6}>
                    <p className="info">Show only if apple is picked</p>
                    <Input
                      name="calories"
                      label="Calories"
                      control={control}
                      defaultValue={{}}
                    />
                  </Grid>
              }
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
            <Typography color="secondary">Values rr</Typography>
            All fields
            <pre>{JSON.stringify(watchAllFields, null, 2)}</pre>
            fruits ( only watching fruits)
            <pre>{JSON.stringify(fruits, null, 2)}</pre>
            {/* <Typography color="secondary">Touched</Typography>
                <pre>{JSON.stringify(touched, null, 2)}</pre> */}
            {/* <Typography color="secondary">Errors</Typography> */}
            {/* {printErrors(errors)} */}
          </Grid>
        </Grid>
      </form>
   
    </div>
  );
};

export default HookFormBackEndValidation;

const fruites = [
  { label: 'Grapes', value: 1 },
  { label: 'Apple', value: 2 },
  { label: 'Mango', value: 3 },
  { label: 'Orange', value: 4 },
];

const genderOptions = [
  { label: 'Male', value: 1 },
  { label: 'Female', value: 2 },
  { label: 'Prefer not to say', value: 3 },
];

const dashboardFilterOptions = [
  { label: 'All Time', value: 1 },
  { label: 'Today', value: 2 },
  { label: 'This Week', value: 3 },
  { label: 'This Month', value: 4 },
];
