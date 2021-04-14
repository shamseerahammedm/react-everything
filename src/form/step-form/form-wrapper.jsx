import React, { useState, useCallback } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './form-wrapper.styles.scss';




export const FormWrapper = ({ children, step, showHideHandler, isShown }) => {
    return (
        
            <div className="form-wrapper border m-5 p-3">
                <p>Current Step : {step}</p>
                {children}
            </div>
       
    )
}