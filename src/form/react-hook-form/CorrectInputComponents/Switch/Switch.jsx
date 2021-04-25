import React from 'react';
import { FormHelperText, Switch as MuiSwitch } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import PropTypes from 'prop-types';
import './Switch.scss';
import { getError } from 'utils/formik';
import { useController } from 'react-hook-form';

const Switch = ({
  onChange : customOnChange =  null,
  label = '',
  color = 'primary',
  size = 'medium',
  labelPlacement = 'end',
  className = '',

  // hook form specific
  name, control, defaultValue, rules = {}
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

  return (
    <FormControl className="switchWrapper" component="fieldset" error={!!error}>
      <FormGroup aria-label="position">
        <FormControlLabel
          control={
            <MuiSwitch
              className={`customSwitch ${className}`}
              checked={value}
              color={color}
              size={size}
              onChange={(e) => {
                onChange(e);
                // Running the custom on change function if passed
                if (customOnChange)
                {
                  customOnChange(e);
                }
              }}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
        />
      </FormGroup>
      {!!error && <FormHelperText>{error.message}</FormHelperText>}
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
