import { FormControl, FormHelperText, FormLabel } from '@material-ui/core';
import React from 'react';
import { getError } from 'utils/formik';
import PropTypes from 'prop-types';

const RadioGroup = ({
  errors,
  touched,
  status,
  id,
  label,
  className,
  children,
  required= false
}) => {
  const errorText = getError(id, { touched, status, errors });
  return (
    <FormControl  required={required} component="fieldset" error={!!errorText} className={`customRadioGroup ${className}`}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      {children}
      {!!errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

RadioGroup.propTypes = { 
  errors: PropTypes.object,
  touched: PropTypes.object,
  status: PropTypes.object,
  id : PropTypes.string,
  label : PropTypes.string,
  className : PropTypes.string,
  children: PropTypes.any,
  required: PropTypes.bool,
};

export default RadioGroup;