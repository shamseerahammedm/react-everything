import React from 'react';
import Dashboard from '../dashboard/dashboard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../material-ui-full/Input';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Container } from '@material-ui/core'
import GridContainer from '../GridContainer/GridContainer';
import SearchableSelect from '../material-ui-full/SearchableSelect';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));




// same data used for serchable select 
const dummySelect = new Array(5).fill().map((selectItem, i) => {
    return { id: i + 1, option: `Country ${i + 1}` }
})
const dummyRadioGroup = new Array(3).fill().map((selectItem, i) => {
    return { id: i + 1, value: `gender${i + 1}`, label: `Gender ${i + 1}` }
})

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
    filmsSearchable: Yup
        .object()
        .required('Film is required !')
        .nullable()  // this will allow formik to set value as null, but wont allow form submission in null state because we have required()

});




const MaterialUiTheme = () => {
    const classes = useStyles();
    return (
        <Dashboard>
            <div className={classes.root}>
                <Paper>
                    
                    <Formik
                        initialValues={{
                            dateAndTime: null, // make sure to set null if no date needs to be shown on initial load
                            termsAndConditions: false,
                            gender: '', // Make sure that this is string else radio wont be active when clicking
                            genderStandAlone: '', // Make sure that this is string else radio wont be active when clicking
                            country: '',
                            fullName: '',
                            filmsSearchable: dummySelect[4],
                            enableColdCall: true
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
                                <GridContainer type="form">
                                    <label htmlFor=""><strong>Test</strong></label>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
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
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={SearchableSelect}
                                                name="filmsSearchable" 
                                                onChange={(e, newValue) => {
                                                    console.log(`Im custom of :: filmsSearchable :: value - ${newValue}`);
                                                    console.log(newValue);
                                                }}
                                                label="Search films"
                                                options={dummySelect}
                                                optionLabel="option" // depends on incoming data, here 'option' given because incoming data objects index name is 'option'
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={Input}
                                                name="fullName"
                                                onChange={(e) => {
                                                    alert(e.target.value)
                                                }}
                                                label="Full Name"
                                                type="text"
                                                required
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={Input}
                                                name="fullName"
                                                onChange={(e) => {
                                                    alert(e.target.value)
                                                }}
                                                label="Full Name"
                                                type="text"
                                                required
                                                size="small"
                                            />
                                        </Grid>
                                    </Grid>
                                </GridContainer>
                            );
                        }}
                    </Formik>
                </Paper>

            </div>
        </Dashboard>
    )
}

export default MaterialUiTheme;
