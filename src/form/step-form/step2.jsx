import React, {useState, useEffect } from 'react'
import * as yup from 'yup';
import { FormWrapper } from './form-wrapper';
import { Form, Formik, Field } from 'formik';
import CSSTransition from 'react-transition-group/CSSTransition';




const Step2 = ({ prevSection, step, saveForm, formData }) => {


    const [isMounted , setIsMounted ] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[])



    return (
        <Formik
            initialValues={{
                email: formData.email ? formData.email : 'asdf',
                username: formData.username ? formData.username : 'asdf',
            }}
            onSubmit={(values, actions) => {
                saveForm(values)
            }}
            validationSchema={
                yup.object().shape({
                    email: yup.string().required('Email is required'),
                    username: yup.string().required('Username is required'),
                })
            }
            render={({ values, errors, touched }) => (
                
                <CSSTransition
                    in={isMounted}
                    appear={true}
                    unmountOnExit
                    classNames="form-wrapper"
                    timeout={700}
                >
                    <FormWrapper step={step}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <Field name="email" className="form-control" />
                                {errors.email && touched.email && <span className="text-danger">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="">UserName</label>
                                <Field name="username" className="form-control" />
                                {errors.username && touched.username && <span className="text-danger">{errors.username}</span>}
                            </div>
                            <button className="btn btn-info" type="submit">Save and continue</button>
                            <button onClick={prevSection} className="btn btn-danger">Back</button>
                        </Form>
                    </FormWrapper>
                </CSSTransition>
            )}
        />
    )
}

export default Step2
