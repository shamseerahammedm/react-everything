import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Input from '../CorrectInputComponents/Input/Input';
import * as Yup from 'yup';
import DatePicker from '../CorrectInputComponents/DatePicker/DatePicker';
import DateTimePicker from '../CorrectInputComponents/DateTimePicker/DateTimePicker';
import Switch from '../CorrectInputComponents/Switch/Switch';
import Checkbox from '../CorrectInputComponents/CheckboxComponent/Checkbox/Checkbox';
// import './CustomFormikMaterilUI.scss';
import CheckboxGroup from '../CorrectInputComponents/CheckboxComponent/CheckboxGroup/CheckboxGroup';
import MultiSelect from '../CorrectInputComponents/MultiSelect/MultiSelect';
// import CheckboxGroup2 from '../CorrectInputComponents/CheckboxComponent/CheckboxGroupFieldChildren/CheckboxGroup';
import SingleSelect from '../CorrectInputComponents/SingleSelect/SingleSelect';
import SearchableSelect from '../CorrectInputComponents/SearchableSelect/SearchableSelect';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty } from 'lodash';

const optionsGenerator = async () => {
  const options = await fetch('https://reqres.in/api/unknown');
  const optionsJson = await options.json();
  return optionsJson.data;
};

let render = 0;
const INITIAL_FORM_DATA = {
  first_name: 'test',
  date: new Date(),
  date_time_picker: new Date(),
  agreement: false,
  do_you_agree: false,
  group_checkbox: [],
  gender: [],
  select: '',
  age_range: '',
  agency: {},
  radioGroup: '',
  agreement_title : ''
};

const printErrors = async (errors) => {
  console.log('errors', errors);
  // const errorsData = await JSON.stringify(errors, null, 2);
  // return <pre>{  JSON.stringify(errorsData, null, 2)}</pre>;
};

const CustomHookFormMaterilUI = forwardRef((props, ref) => {
  const {
    isCommercialLoan = false,
    isGreenCardLoan = false,
    isNewLoanApplication = true,
    isEnhancementApplication = false
  } = props;

  const [options, setOptions] = useState([]);
  
  const schema = Yup.object().shape({
    first_name: Yup.string().required('This field is required'),
    date: Yup.date().nullable().required('This field is required'),
    date_time_picker: Yup.date().nullable().required('This field is required'),
    do_you_agree: Yup.bool().oneOf([true], 'Must agree'),
    // group_checkbox: Yup.array().min(1, 'At least one checkbox is required'),
    gender: Yup.array().min(1, 'This field must have at least 1 item.'),
    // radioGroup: Yup.string().required('This field is required'),
    age_range: Yup.string()
      .required('This field is required.')
      .max(100, 'Maximum characters upto 100.'),
    agency: Yup.object().test('Check Object Empty', 'This field is required', function (value) {
      if (isEmpty(value))
      {
        return false;
      }
      return true;
    }),
    agreement: Yup.bool().oneOf([true], 'Must agree'),
    agreement_title : Yup.string()
      .test('props_level_validation', (value, {  createError, path, parent, ...others }) => {
        // false means validation message will come ( it is required )
        if(!parent.agreement )
        {
          return createError({ message : 'Props level error : Agreement must be true' , path });
        }
        if(parent.agreement && parent.first_name !== '123' && isCommercialLoan)
        {
          return createError({ message : 'Props level error : In Commercial loan, firstname must be -> 123' , path });
        }
        if(parent.agreement && parent.first_name !== '1236' && isGreenCardLoan)
        {
          return createError({ message : 'Props level error : In Green card loan, firstname must be -> 1236' , path });
        }
        return true;
      })
  });

  const {
    control,
    handleSubmit,
    formState,
    getValues,
    watch,
    setValue
  } = useForm({
    defaultValues: INITIAL_FORM_DATA,
    resolver: yupResolver(schema),
    mode : 'all' 
  });

  const onSubmit = (values) => console.log('$$$$$------ values ------$$$$', values);
  // const watchAllFields = {}; 
  // const watchAllFields = watch(); 
  const watchAllFields = watch(['agreement','age_range']);
  const agreement = watch('agreement');

  console.log('formState', formState);
  console.log('formState', formState.errors);
  render = render + 1;

  useImperativeHandle(ref, () => ({
    formState: formState,
    handleSubmit: handleSubmit
  }));

  return (
    <div className="CustomFormikMaterialUI" >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p>React hook form with material ui integrated - Render Count : {render}</p>
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
                <p className="info">Date time picker</p>
                <DateTimePicker
                  name="date_time_picker"
                  disablePast={false}
                  disableFuture={true}
                  clearable
                  placeholder="Date time"
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
              <Grid item xs={6}>
                <p className="info">Autocomplete</p>
                <SearchableSelect
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
                  control={control}
                // defaultValue={{}}
                />
              </Grid>
              <Grid item xs={6}>
                <p className="info">Checkbox Single</p>
                <Checkbox
                  name="do_you_agree"
                  label="Do you agree ?"
                  control={control}
                />
              </Grid>
              <Grid item xs={12}>
                <hr />
                Conditionals
              </Grid>
              {/* Yup conditional validation */}
              <Grid item xs={12}>
                <Typography variant="h6" >Agreement Title ( Rules )</Typography>
                <Box><Typography variant="caption">Switch must be true</Typography></Box>
                <Box ><Typography variant="caption">Even if switch is true, First name must be no</Typography></Box>
                <Box sx={{ marginBottom : '5px' }}><Typography variant="caption">Even if switch is true, First name must be no</Typography></Box>
                
                <Input
                  name="agreement_title"
                  label="Agreement Title"
                  control={control}
                  defaultValue={{}}
                  // required
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
            <Typography color="secondary">Values rr</Typography>
            <pre>{JSON.stringify(watchAllFields, null, 2)}</pre>
            <pre>{JSON.stringify(props, null, 2)}</pre>
            {/* <Typography color="secondary">Touched</Typography>
                <pre>{JSON.stringify(touched, null, 2)}</pre> */}
            {/* <Typography color="secondary">Errors</Typography> */}
            {/* {printErrors(errors)} */}
          </Grid>
        </Grid>
      </form>
    
    </div>
  );
});

const Data = () => {
  const formRef1 = useRef();
  const formRef2 = useRef();
  const formRef3 = useRef();
  const formRef4 = useRef();

  const submitForm = (a,b,c,d) => {
    console.log('a',a);
    console.log('b',b);
    console.log('c',c);
    console.log('d',d);
  };

  useEffect(()=>{
    if(!formRef1?.current || !formRef2?.current || !formRef3?.current || !formRef4?.current) return;
    const { formState : formState1 } = formRef1.current;
    const { formState : formState2 } = formRef1.current;
    const { formState : formState3 } = formRef1.current;
    const { formState : formState4 } = formRef1.current;

    console.log('formState1',formState1);
    console.log('formState2',formState2);
    console.log('formState3',formState3);
    console.log('formState4',formState4);

  },[formRef1]);
  return (
    <>
      <CustomHookFormMaterilUI
        ref={formRef1}
        isCommercialLoan={false}
        isGreenCardLoan={true}
        isNewLoanApplication={true}
        isEnhancementApplication={false}
      />
      <CustomHookFormMaterilUI
        ref={formRef2}
        isCommercialLoan={false}
        isGreenCardLoan={true}
        isNewLoanApplication={true}
        isEnhancementApplication={false}
      />
      <CustomHookFormMaterilUI
        ref={formRef3}
        isCommercialLoan={false}
        isGreenCardLoan={true}
        isNewLoanApplication={true}
        isEnhancementApplication={false}
        class={'asdsd' + 123}
      />
      <CustomHookFormMaterilUI
        ref={formRef4}
        isCommercialLoan={false}
        isGreenCardLoan={true}
        isNewLoanApplication={true}
        isEnhancementApplication={false}
      />
      <button 
        type="button"
        onClick={()=>{
          formRef1.current.handleSubmit(submitForm)();
          formRef2.current.handleSubmit(submitForm)();
          formRef3.current.handleSubmit(submitForm)();
          formRef4.current.handleSubmit(submitForm)();
          console.log('formRef',formRef4);
        }}>
          Outer submit
      </button>
    </>
  );
};

export default Data;

const dummyCheckBoxOptions = [
  { id: 'first_nick_name', label: 'First / Nick Name' },
  { id: 'last_name', label: 'Last Name' },
  { id: 'state', label: 'State' },
  { id: 'city', label: 'City' },
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
