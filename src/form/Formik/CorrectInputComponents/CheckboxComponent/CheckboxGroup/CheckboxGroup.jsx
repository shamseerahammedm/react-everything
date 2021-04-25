import { FormControl, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import React from 'react';
import './CheckboxGroup.scss';
import { getError } from 'utils/formik';
import PropTypes from 'prop-types';

// Note :: id on CheckboxGroup should be name used on checkbox 
const CheckboxGroup = ({
  label = '',
  errors,
  touched,
  status,
  setFieldValue,
  onBlur,
  id,
  children,
  value,
  className= '',
  formGroupWrapperClassName = '',
  required = false,
}) => {

  const handleChange = (event) => {
    const target = event.currentTarget;
    let valueArray = [...value] || [];
    if (target.checked)
    {
      valueArray.push(target.id);
    }
    else
    {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }
    setFieldValue(id, valueArray);
  };
  const handleBlur = () => onBlur(id, true);
  const errorText = getError(id, { touched, status, errors });

  return (
    <div className={`customFormGroupWrapper ${formGroupWrapperClassName}`}>
      <FormControl required={required} error={!!errorText} component="fieldset" >
        { label && <FormLabel component="legend">{label}</FormLabel>}
        <FormGroup className={`customFormGroup ${className}`}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: handleChange,
                onBlur: handleBlur,
              }
            });
          })}
        </FormGroup>
        {!!errorText && <FormHelperText>{errorText}</FormHelperText>}
      </FormControl>
    </div>
  );
};

CheckboxGroup.propTypes = { 
  label : PropTypes.string,
  errors: PropTypes.object,
  touched: PropTypes.object,
  status: PropTypes.object,
  id : PropTypes.string,
  className : PropTypes.string,
  formGroupWrapperClassName : PropTypes.string,
  children: PropTypes.any,
  setFieldValue: PropTypes.func,
  required: PropTypes.bool,
};
export default CheckboxGroup;
