import React from 'react'
import * as yup from 'yup';
import {FormWrapper} from './form-wrapper';
import { Form, Formik, Field } from 'formik';



const Step3 = ({prevSection, step, submitForm, formData}) => {
    return (
        <Formik
            initialValues={{
                password: formData.password ? formData.password : '',
                confirmpassword: formData.confirmpassword ? formData.confirmpassword : '',
            }}
            onSubmit={(values, actions) => {
                submitForm(values)
            }}
            validationSchema={
                yup.object().shape({
                    password: yup.string().required('Password is required'),
                    confirmpassword: yup.string().required('Confirm Password is required'),
                })
            }
            render={({ values, errors }) => (
                <FormWrapper step={step}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <Field name="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Confirm Password</label>
                            <Field name="confirmpassword" className="form-control" />
                        </div>
                        <button className="btn btn-info" type="submit">Save</button>
                        <button onClick={prevSection} className="btn btn-danger">Back</button>
                    </Form>
                </FormWrapper>
            )}
        />
    )
}

export default Step3
