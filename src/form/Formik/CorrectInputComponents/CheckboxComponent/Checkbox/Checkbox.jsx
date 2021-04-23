import { FormControlLabel, Checkbox as MuiCheckbox, FormHelperText, FormControl } from '@material-ui/core';
import React from 'react';
import { getError } from 'utils/formik';
import PropTypes from 'prop-types';

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, status },
  id,
  label,
  className = '',
  formControlClassName = '',
  onChange : customOnChange,
  labelPlacement = 'end'
}) => {
  const errorText = getError(name, { touched, status, errors });
  const isError = errorText ? true : false;
  return (
    <FormControl error={isError} className="checkboxWrapper">
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
    </FormControl>
  );
};
Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelPlacement: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  formControlClassName: PropTypes.string,
};
export default Checkbox;
