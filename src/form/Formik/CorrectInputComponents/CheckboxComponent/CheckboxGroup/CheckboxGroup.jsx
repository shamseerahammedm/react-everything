import { FormControl, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import React from 'react';
import './CheckboxGroup.scss';

// Note :: id on CheckboxGroup should be name used on checkbox 
const CheckboxGroup = ({
  label,
  error,
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
  const isError = error ? true : false;
  return (
    <div className={`customFormGroupWrapper ${formGroupWrapperClassName}`}>
      <FormControl required={required} error={isError} component="fieldset" >
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
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default CheckboxGroup;
