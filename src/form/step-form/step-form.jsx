import React, { Component } from 'react'
import * as yup from 'yup';
import { Form, Formik, Field } from 'formik';
import CSSTransition from 'react-transition-group/CSSTransition';
import './step-form.styles.scss';



import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';



const FormWrapper = ({ children, step }) => (
    <div className="border m-5 p-3">
        <p>Current Step : {step}</p>
        {children}
    </div>
)





class StepForm extends Component {

    state = {
        step: 1,
        formData: {},
        isShown: false,
        mounted : false
    }

    showHideHandler = () => {
        this.setState(prevState => ({
            isShown: !prevState.isShown
        }))
    }


    prevSection = (e) => {
        e.preventDefault();
        const { step } = this.state;
        if (step !== 1) {
            this.setState((prevState) => ({
                step: step - 1
            }))
        }
    }


    nextSection = () => {
        const { step } = this.state;
        this.setState((prevState) => ({
            step: prevState.step + 1
        }))
    }

    saveForm = (values) => {
        this.setState((prevState) => ({
            formData: { ...prevState.formData, ...values }
        }), () => {
            this.nextSection()
        })
    }


    submitForm = (values) => {
        this.setState((prevState) => ({
            formData: { ...prevState.formData, ...values }
        }), () => {
            console.log(this.state);
            alert("submit")
        })
    }

    componentDidMount()
    {
        this.setState({
            mounted : true
        })
    }



    render() {
        const { step, formData, isShown, mounted } = this.state;
        switch (step) {
            case 1:
                return (
                   
                        <Step1
                            showHideHandler={this.showHideHandler}
                            isShown={isShown}
                            prevSection={this.prevSection} step={step}
                            saveForm={this.saveForm} formData={formData} />

                )
            case 2:
                return (
                    <CSSTransition
                        in={mounted}
                        appear={true}
                        unmountOnExit
                        classNames="form-wrapper"
                        timeout={1000}
                    >
                        <Step2 showHideHandler={this.showHideHandler} isShown={isShown} prevSection={this.prevSection} step={step} saveForm={this.saveForm} formData={formData} />
                    </CSSTransition>
                   
                )
            case 3:
                return (
                    <Step3 showHideHandler={this.showHideHandler} isShown={isShown} prevSection={this.prevSection} step={step} submitForm={this.submitForm} formData={formData} />
                )
        }
    }
}

export default StepForm
