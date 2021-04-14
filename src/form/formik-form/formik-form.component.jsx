import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';


const FormikTag = () => {



    const [ initialValues, setinitialValues] = useState({ 
        name: '',
        lastname : '' 
    });



    // simulating api call to reset values 
    useEffect(()=>{
        new Promise((res,rej)=>{
            setTimeout(()=>{
                res(setinitialValues({ 
                    name: 'something else',
                    lastname : '' 
                }))
            },2000)
        })
    },[])




    const submitFormHandler = (values) => {
        new Promise((res,rej)=>{
            setTimeout(()=>{
                res(
                    setinitialValues({ 
                        name: 'something else',
                        lastname : '' 
                    })
                )
            },2000)
        })
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setErrors }) => {
                submitFormHandler(values);
            }}
            validationSchema={
                yup.object().shape({
                    name: yup.string().required('Name is required'),

                })
            }
            enableReinitialize
        >
            {({ errors, resetForm }) => {
                // console.log(props);
                return (
                    <div className="container">
                        <Form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Field
                                        type="text"
                                        name="name"
                                    />
                                    {errors.name && <div id="feedback">{errors.name}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Field
                                        type="text"
                                        name="lastname"
                                        
                                    />
                                    {errors.lastname && <div id="feedback">{errors.lastname}</div>}
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={()=>{
                                setinitialValues({ 
                                    name: '',
                                    lastname : '' 
                                })
                                // resetForm({ 
                                //     name: '',
                                //     lastname : '' 
                                // })
                                
                            }}>Reset</button>
                        </Form>
                    </div>
                );
            }
            }
        </Formik>
    )
}


export default FormikTag;