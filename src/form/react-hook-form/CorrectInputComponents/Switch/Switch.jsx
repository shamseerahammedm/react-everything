import React from 'react';
import { FormHelperText, Switch as MuiSwitch } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import PropTypes from 'prop-types';
import './Switch.scss';
import { getError } from 'utils/formik';

const Switch = ({
  field: { name, value },
  form: { touched, errors, status, setFieldValue, setFieldTouched },
  onChange = () => null,
  label = '',
  color = 'primary',
  size = 'medium',
  labelPlacement = 'end',
  className = ''
}) => {
  const errorText = getError(name, { touched, status, errors });
  const isError = errorText ? true : false;
  return (
    <FormControl className="switchWrapper" component="fieldset" error={isError}>
      <FormGroup aria-label="position">
        <FormControlLabel
          control={
            <MuiSwitch
              className={`customSwitch ${className}`}
              checked={value}
              color={color}
              size={size}
              onChange={(e) => {
                setFieldTouched(name, true);
                setFieldValue(name, e.target.checked);
                // Running the custom on change function if passed
                if (onChange)
                {
                  onChange(e);
                }
              }}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
        />
      </FormGroup>
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  labelPlacement: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Switch;
