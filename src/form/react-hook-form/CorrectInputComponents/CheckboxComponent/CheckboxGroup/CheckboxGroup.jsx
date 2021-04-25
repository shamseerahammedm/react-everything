import { FormControl, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';
import React from 'react';
import './CheckboxGroup.scss';
import { getError } from 'utils/formik';
import { useController } from 'react-hook-form';

// Note :: id on CheckboxGroup should be name used on checkbox 
const CheckboxGroup = ({
  label,
  children,
  className= '',
  formGroupWrapperClassName = '',
  required = false,

  // hook form specific
  name, control, defaultValue, rules = {},setValue
}) => {

  const {
    field: { ref, value, onBlur, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: {},
    rules: rules
  });

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
    setValue(name, valueArray);
  };
  const handleBlur = () => onBlur(true);

  return (
    <div className={`customFormGroupWrapper ${formGroupWrapperClassName}`}>
      <FormControl required={required} error={!!error} component="fieldset" >
        { label && <FormLabel component="legend">{label}</FormLabel>}
        <FormGroup className={`customFormGroup ${className}`}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              isCheckBoxGroup : true,
              groupHandleChange : handleChange,
              groupHandleBlur : handleBlur,
              groupValue : value.includes(child.props.id),
              groupError : error
            });
          })}
        </FormGroup>
        {!!error && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default CheckboxGroup;
