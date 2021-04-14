import React, {useState, useEffect } from 'react'
import * as yup from 'yup';
import { FormWrapper } from './form-wrapper';
import { Form, Formik, Field } from 'formik';
import CSSTransition from 'react-transition-group/CSSTransition';











const Step1 = ({ prevSection, step, saveForm, formData, showHideHandler, isShown }) => {





    const [isMounted , setIsMounted ] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[])



    return (
        <Formik
            initialValues={{
                firstname: formData.firstname ? formData.firstname : '123',
                lastname: formData.lastname ? formData.lastname : '123'
            }}
            onSubmit={(values, actions) => {
                saveForm(values)
            }}
            validationSchema={
                yup.object().shape({
                    firstname: yup.string().required(),
                    lastname: yup.string().required(),
                })
            }
            render={({ values, errors, touched }) => (
                <CSSTransition
                    in={isMounted}
                    classNames="form-wrapper"
                    timeout={700}
                >
                    <FormWrapper isShown={isShown} step={step} showHideHandler={showHideHandler}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <Field name="firstname" className="form-control" />
                                {errors.firstname && touched.firstname && <span className="text-danger">{errors.firstname}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Last Name</label>
                                <Field name="lastname" className="form-control" />
                                {errors.lastname && touched.lastname && <span className="text-danger">{errors.lastname}</span>}
                            </div>
                            <button className="btn btn-info" type="submit">Save and continue</button>
                            <button onClick={prevSection} disabled={step === 1 ? true : false} className="btn btn-danger">Back</button>
                        </Form>
                    </FormWrapper>
                </CSSTransition>

            )}
        />
    )
}

export default Step1
