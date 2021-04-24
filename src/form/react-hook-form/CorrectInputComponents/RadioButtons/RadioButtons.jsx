import { FormControl, FormHelperText, FormLabel, RadioGroup } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtons.scss';
import { getError } from 'utils/formik';

// Note :: if radio button are styled as buttons using className "buttonRadios", also generate "activeBtn" & "normalBtn" classes on FormControlLabel to style them. 
const RadioButtons = ({
  field: { name, ...otherFieldProps },
  form: { touched, errors, status },
  options,
  children,
  label,
  ...props
}) => {
  const errorText = getError(name, { touched, status, errors });
  return (
    <FormControl component="fieldset" error={!!errorText} className="customRadioGroupWrapper">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup {...otherFieldProps} {...props} name={name} >
        {children}
        {errorText && <FormHelperText variant="filled">{errorText}</FormHelperText>}
      </RadioGroup>
    </FormControl>
  );
};

RadioButtons.propTypes = {
  children: PropTypes.any,
};

export default RadioButtons;
