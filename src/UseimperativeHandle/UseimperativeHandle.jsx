import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';


// import './EditClientForm.scss';
import Grid from '@material-ui/core/Grid';
import { Formik, Form, Field } from 'formik';


// import DateTimePicker from '../../DateTimePicker/DateTimePicker';

// import SearchableSelect from '../../SearchableSelect/SearchableSelect';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeSuccessMessage, removeErrorMessage, fetchCompaniesAsync, fetchReferrerNameAsync, fetchClientDetailsWithIdAsync, editClientAsync } from '../../../redux/referralManagement/referralManagement.actions';
// import moment from 'moment';
// import { useParams } from "react-router-dom";
// import Alert from '../../Alert/Alert';
// import PageLoader from '../../PageLoader/PageLoader';
// import { useSnackbar } from 'notistack';
// import { useHistory } from "react-router-dom";
// import DatePicker from '../../DatePicker/DatePicker';
// import SearchableSelectForAddandEditClients from '../SearchableSelectForAddandEditClients/SearchableSelectForAddandEditClients';
import * as Yup from 'yup';





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

const UseimperativeHandle = () => {
    const childRef = useRef();

    const [val, setVal] = useState(0);
    useEffect(() => {
        if (childRef.current)
        {
            const data = childRef.current.test('somthing');
            setVal(data);
        }
    }, [childRef.current])

    return (
        <div className="container">
            <button onClick={() => childRef.current.setCount(prevState => prevState + 1)}> Button in parent that uses function in child</button>
            <button onClick={() => childRef.current.test()}> alert button - {val}</button>
            <TestComponent ref={childRef} test="test" />
        </div>
    )
}

export default UseimperativeHandle;




const TestComponent = forwardRef((props, ref) => {
    console.log('ref',ref);
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => ({
        setCount: setCount,
        test: test
    }))

    const val = 1;
    const test = (val = null) => {
        return val;
    }

    return (
        <div>
            <button onClick={() => setCount(prevState => prevState + 1)}> Button in child that use function in child</button>
            <p>
                Test is the thing {count}
            </p>
            <p>
                Props : {props.test}
            </p>

            <Formik
                // innerRef={formikRef}
                enableReinitialize // if this is false values wont be set after settime out either use this or use showform 
                // initialValues={initialValues}
                validationSchema={addClientSchema}
                onSubmit={(values, { setErrors, setStatus, setFieldError, resetForm, setValues }) => {
                   
                }}
            >
                {({ values, errors, isSubmitting, setFieldValue, status, resetForm, setValues }) => {

                    // console.log("status", status);
                    console.log(errors);
                    return (
                        <Form noValidate="novalidate">
                            <section className="detailsOfClient">
                                <h3 className="editClientContentHeading">Enter details of the client</h3>

                                <button uppercase type="submit" bgColor="secondary" width="120px" >
                                            Update
                                                </button>
                                        <button uppercase type="button" bgColor="secondary" width="120px" onClick={() => {
                                            resetForm()
                                            // setValues({
                                            // 	first_name: '',
                                            // 	last_name: '',
                                            // 	phone_number: '' ,
                                            // 	email: '' ,
                                            // 	enable_cold_calling: false,
                                            // })
                                        }}>
                                            Reset
                                                </button>
                            </section>

                        </Form>
                    );
                }}
            </Formik>

        </div>
    )
})