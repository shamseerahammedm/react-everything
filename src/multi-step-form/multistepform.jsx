import React from 'react'
import Multistep from 'react-multistep';

const MultiStepForm = () => {
    const steps = [
        { name: 'StepOne', component: <div>asdasd</div> },
        { name: 'StepTwo', component: <div>asdasd</div> },
        { name: 'StepThree', component: <div>asdasd</div> },
        { name: 'StepFour', component: <div>asdasd</div> }
    ];
    return (

        <Multistep showNavigation={true} steps={steps} />
    )
}

export default MultiStepForm
