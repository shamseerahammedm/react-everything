import React, { useState, useEffect } from 'react';
// import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Field, Form, Formik, FormikProps } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import * as Yup from 'yup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup'; // radio group
import RadioGroup from './RadioGroup';
import AlarmIcon from '@material-ui/icons/Alarm';
import axios from 'axios';




import SingleSelect from './SingleSelect';
import Input from './Input';
import CheckBox from './CheckBox';
import SearchableSelect from './SearchableSelect';
import DateAndTime from './DateAndTime';
import Switch from './Switch';
import Button from './Button';
import Multiselect from './MultiSelect';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import FileInput from './FileInput';



const dummyRadioGroup = new Array(3).fill().map((selectItem, i) => {
    return { id: i + 1, value: `gender${i + 1}`, label: `Gender ${i + 1}` }
})



// This is for bringing form-group like margin bottom for all fields 
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(2),
        },
    },
}));


const mUiSchema = Yup.object().shape({
    gender: Yup
        .string()
        .required('Customer Criteria is required !'),
    fullName: Yup
        .string()
        .required('Full Name is required !'),
    country: Yup
        .number()
        .required('Country is required !'),
    gender: Yup
        .string()
        .required('Gender is required !'),
    termsAndConditions: Yup
        .bool()
        .oneOf([true], 'Please accept terms !'),
    filmsSearchableAsync: Yup
        .number()
        .required('Film is required !')
        .nullable(),  //
    filmsSearchable: Yup
        .number()
        .required('Film is required !')
        .nullable(),  // this will allow formik to set value as null, but wont allow form submission in null state because we have required()
    dateAndTime: Yup.date()
        .required('Date and time is required !')
        .nullable(),  // this will allow formik to set value as null, but wont allow form submission in null state because we have required()
    favorites: Yup.array().of(Yup.number()).required('Favorites is required !')
});







const MaterialUIFull = () => {
    // managing async option taking starts 
    const [fetchedOptions, setFetchedOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [valueForOptions, setValueForOptions] = useState({});
    const optionLabel = 'email';
    const fetchNewDetails = async () => {
        try
        {
            setIsLoading(true);
            const optionData = await axios.get('https://reqres.in/api/users?page=2');
            const options = optionData.data.data;
            if (options)
            {
                setFetchedOptions(options);
                setIsLoading(false);
            }
        }
        catch (err)
        {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchNewDetails()
    }, [])


    // managing async option taking ends 


    const [dummySelectData, setDummySelectData] = useState([]);
    useEffect(() => {
        // same data used for serchable select 
        const dummySelect = new Array(5).fill().map((selectItem, i) => {
            return { id: i + 1, option: `Country ${i + 1}` }
        })
        setDummySelectData(dummySelect)
    }, [])




    // This is for bringing form-group like margin bottom
    const classes = useStyles();

    return (
        <Container maxWidth="lg">

            <Formik
                initialValues={{
                    dateAndTime: new Date(), // make sure to set null if no date needs to be shown on initial load
                    termsAndConditions: false,
                    gender: '', // Make sure that this is string else radio wont be active when clicking
                    genderStandAlone: '', // Make sure that this is string else radio wont be active when clicking
                    country: 2,
                    fullName: 's',
                    filmsSearchable: 3,
                    filmsSearchableAsync: 9,
                    enableColdCall: true,
                    favorites: [{ id : 8 , first_name : 'Lindsay'}, { id : 9 , first_name : 'Tobias'}], // set as array of numbers and values will be selected automaticaly
                    startDate : new Date(),
                    startTime : new Date().getTime()
                }}
                validationSchema={mUiSchema}
                onSubmit={(values, actions) => {
                    console.log('++++++++++++  submitting +++++++++');
                    console.log(values);
                    console.log('++++++++++++  submitting +++++++++');
                    values.filmsSearchable = values.filmsSearchable.id; // will need to take value like this if using searchable select in all forms
                    console.log(values);
                }}>
                {({ values, setFieldValue, handleChange, errors }) => {

 
                    return (
                        <>

                            <Form className={classes.root}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        {/* check box */}
                                        {/* <Grid item xs={12}>
                                            <FormGroup>
                                                <Field component={CheckBox} name="alright" />
                                            </FormGroup>
                                        </Grid> */}


                                        {/* radio button group*/}
                                        <Grid item xs={12}>
                                            <Field
                                                component={RadioGroup}
                                                name="gender"
                                                label="Gender"
                                                labelData={dummyRadioGroup}

                                            />
                                        </Grid>

                                        {/* radio button group stand alone ::  Same component is used dont pass labelType prop if stand alone*/}
                                        <Grid item xs={12}>
                                            <Field
                                                component={RadioGroup}
                                                name="genderStandAlone"
                                                label="Gender Stand alone"
                                                labelData={dummyRadioGroup}
                                                labelType="nolabel" //no label with input will come, formgroup label will be there
                                                onChange={(e) => {
                                                    alert(e.target.value)
                                                }}
                                            />
                                        </Grid>


                                        {/* Checkbox */}
                                        <Grid item xs={12}>
                                            <Field
                                                component={CheckBox}
                                                name="termsAndConditions"
                                                label="Terms and conditions "
                                                labelData={dummyRadioGroup}
                                                labelType="nolabel"
                                                checkBoxType="single" // single checkbox will be rendered
                                                onChange={(e) => {
                                                    alert(e.target.checked)
                                                }}
                                            />
                                        </Grid>

                                        <hr />

                                        {/* Select  */}
                                        <Grid item xs={12} >
                                            <FormGroup>
                                                {
                                                    dummySelectData.length > 0 &&
                                                    <Field
                                                        component={SingleSelect}
                                                        name="country"
                                                        onChange={(e) => {
                                                            alert(e.target.value)
                                                        }}
                                                        placeHolder="Select Country"
                                                        options={dummySelectData && dummySelectData}
                                                        label="Country"  // will have to pass label also if you want to set required
                                                        required
                                                    />
                                                }
                                            </FormGroup>
                                        </Grid>




                                        {/* Multiselect */}
                                        <Grid item xs={12}>
                                            {
                                                (fetchedOptions.length > 0) &&
                                                <Field
                                                    component={Multiselect}
                                                    label="Favorites" // acts as placeholder
                                                    name="favorites"
                                                    onChange={(e, newValue) => {
                                                        console.log(newValue);
                                                    }}
                                                    options={fetchedOptions && fetchedOptions}
                                                    optionLabel="first_name" // depends on incoming data, here 'option' given because incoming data objects index name is 'option'
                                                />
                                            }

                                        </Grid>



                                        {/* Searchable select box autocomplete */}
                                        <Grid item xs={12}>
                                            {
                                                dummySelectData.length > 0 &&
                                                <Field
                                                    component={SearchableSelect}
                                                    name="filmsSearchable"
                                                    onChange={(e, newValue) => {
                                                        console.log(`Im custom of :: filmsSearchable :: value - ${newValue}`);
                                                        console.log(newValue);
                                                    }}
                                                    label="Search films"
                                                    options={dummySelectData}
                                                    optionLabel="option" // depends on incoming data, here 'option' given because incoming data objects index name is 'option'
                                                    required
                                                    async={false}  // set async off if you dont want to search as you type
                                                />
                                            }
                                        </Grid>



                                        {/* Searchable select box autocomplete */}
                                        {/* Note :: autocomplete async cheyunnath inu vendi melathe select same sadanm duplicate akiya athan ithu, %like% edukunna async success ayitilla kandu pidikkanam */}
                                        <Grid item xs={12}>
                                            {
                                                // fetchedOptions && fetchedOptions.length > 0 &&
                                                <Field
                                                    component={SearchableSelect}
                                                    name="filmsSearchableAsync"
                                                    onChange={(e, newValue) => {
                                                        console.log(`Im custom of :: filmsSearchable :: value - ${newValue}`);
                                                        console.log(newValue);
                                                    }}
                                                    onInputChange={(e, value, reason)=>{
                                                        fetchNewDetails(value);
                                                        console.log(value);
                                                    }}
                                                    loading={isLoading}
                                                    label="Search films like"
                                                    options={fetchedOptions}
                                                    optionLabel="first_name" // depends on incoming data, here 'option' given because incoming data objects index name is 'option'
                                                    required
                                                    creatable
                                                />
                                            }
                                        </Grid>



                                        {/* Normal search input  */}
                                        <Grid item xs={12}>
                                            <Field
                                                component={Input}
                                                name="fullName"
                                                onChange={(e) => {
                                                    alert(e.target.value)
                                                }}
                                                label="Full Name"
                                                type="text"
                                                required
                                            />
                                        </Grid>



                                          {/* Date only picker */}
            
                                          <Grid item xs={12}>
                                            <Field
                                                component={DatePicker}
                                                name="startDate"
                                                label="Start Date"
                                                variant="outlined"
                                                size = "small"
                                                required
                                                showTodayButton={true}
                                                disablePast={true}
                                                disableFuture={true}
                                                icon={false}
                                            />
                                        </Grid>


                                         {/* Time Picker  */}
            
                                         <Grid item xs={12}>
                                            <Field
                                                component={TimePicker}
                                                name="startTime"
                                                label="Start Time"
                                                variant="outlined"
                                                size = "small"
                                                required
                                                icon={false}
                                            />
                                        </Grid>





                                        {/* date and time component */}
                                        <Grid item xs={12}>
                                            <Field
                                                component={DateAndTime}
                                                name="dateAndTime"
                                                onChange={(value) => {
                                                    alert(value)
                                                }}
                                                label="Date and Time"
                                                required
                                                size="small"
                                                
                                            />
                                        </Grid>



                                        {/* Switch  */}
                                        <Grid item xs={12}>
                                            <Field
                                                component={Switch}
                                                name="enableColdCall"
                                                onChange={(value) => {
                                                    alert(value)
                                                }}
                                                label="Enable cold calling ?"
                                                labelPlacement="start" // Where to place the label
                                            />
                                        </Grid>




                                    </Grid>

                                    <Grid item xs={6}>
                                        <pre>{JSON.stringify(values, null, 2)}</pre>
                                    </Grid>




                                    {/* file dropzone */}
                                    <Grid item xs={12}>
                                       
                                    </Grid>
















                                    {/* button */}
                                    <Grid item xs={12}>
                                        <Button
                                            className="btn"
                                            variant="contained"
                                            type="submit"
                                            color="primary"
                                            buttonType="button" // whether to use link ( react router ) or normal button or iconButton, if link there will be 'to' prop
                                        // disableElevation
                                        // onClick={()=> alert(1)}
                                        // icon={AlarmIcon} //this is for icon buttons only if icon + text needed pass as children
                                        >
                                            Save
                                        </Button>
                                    </Grid>













                                </Grid>

                            </Form>

                        </>
                    )
                }}
            </Formik>

        </Container>
    )
}




export default MaterialUIFull;




