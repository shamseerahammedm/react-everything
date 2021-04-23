import { FormControlLabel, Checkbox as MuiCheckbox, FormHelperText, FormControl } from '@material-ui/core';
import React from 'react';
import { getError } from 'utils/utils';
import PropTypes from 'prop-types';

const Checkbox = ({
  field: { name, value, onChange },
  form: { errors, touched, status, setFieldTouched },
  id,
  label = '',
  className = '',
  formControlClassName = '',
  onChange: customOnChange,
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
            id={id || name}
            checked={value}
            value={value}
            onChange={(e) => {
              setFieldTouched(name, true);
              onChange(e);
              if (customOnChange)
              {
                customOnChange(e);
              }
            }}
            name={name}
            color="primary"
            className={`customCheckBox ${className}`}
          />
        }
      />
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
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
