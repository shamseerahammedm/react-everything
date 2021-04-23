import { FormControlLabel, Checkbox as MuiCheckbox, FormHelperText } from '@material-ui/core';
import React from 'react';
import { getError } from 'utils/formik';

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, status },
  id,
  label,
  className = '',
  formControlClassName = '',
  onChange : customOnChange,
  labelPlacement = ''
}) => {
  const errorText = getError(name, { touched, status, errors });
  const isError = errorText ? true : false;
  return (
    <>
      <FormControlLabel
        label={label}
        className={`customCheckboxFormControl ${formControlClassName}`}
        labelPlacement={labelPlacement}
        control={
          <MuiCheckbox
            id={id}
            checked={value}
            value={value}
            onChange={(e)=>{
              onChange(e);
              if(customOnChange)
              {
                customOnChange(e);
              }
            }}
            onBlur={onBlur}
            name={name}
            color="primary"
            className={`customCheckBox ${className}`}
          />
        }
      />
      {touched[name] && isError && <FormHelperText>{errorText}</FormHelperText>}
    </>
  );
};

export default Checkbox;
