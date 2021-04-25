import { FormControl, FormControlLabel, FormHelperText, Radio } from '@material-ui/core';
import React from 'react';
import { getError } from 'utils/formik';
import PropTypes from 'prop-types';

const RadioButton = ({
  field: { name, value, onBlur },
  form: { errors, touched, status, setFieldValue },
  id,
  label,
  labelPlacement = 'end',
  onChange: customOnChange = null,
  formControlClassName = '',
  className = '',
  showError = false,
}) => {

  const errorText = getError(name, { touched, status, errors });
  const isError = errorText ? true : false;
  return (
    <FormControl error={isError} className="customRadioFormControl">
      <FormControlLabel
        label={label}
        className={`customRadioFormControlLabel ${formControlClassName}`}
        labelPlacement={labelPlacement}
        control={
          <Radio
            id={id}
            checked={id === value}
            value={id}
            onChange={(e) => {
              setFieldValue(name, e.target.value);
              if (customOnChange)
              {
                customOnChange(e);
              }
            }}
            onBlur={onBlur}
            name={name}
            color="primary"
            className={`customRadio ${className}`}
          />
        }
      />
      {showError && touched[name] && isError && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

RadioButton.propTypes = { 
  id : PropTypes.string,
  label : PropTypes.string,
  labelPlacement : PropTypes.string,
  onChange: PropTypes.func,
  formControlClassName : PropTypes.string,
  className : PropTypes.string,
  showError: PropTypes.bool,
};

export default RadioButton;