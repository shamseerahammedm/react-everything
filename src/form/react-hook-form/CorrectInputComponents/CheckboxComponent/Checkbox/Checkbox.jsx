import { FormControlLabel, Checkbox as MuiCheckbox, FormHelperText, FormControl } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const Checkbox = ({
  id,
  label,
  className = '',
  formControlClassName = '',
  onChange: customOnChange = null,
  labelPlacement = 'end',

  // hook form specific
  isCheckBoxGroup,
  groupHandleChange,
  groupHandleBlur,
  groupValue,
  groupError,
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

  const errorToUse = isCheckBoxGroup ? groupError : error;
  const valueToUse = isCheckBoxGroup ? groupValue : value;

  // console.log('groupValue', groupValue);
  // console.log('groupHandleChange', groupHandleChange);
  // console.log('groupValue', groupValue);
  // console.log('error', error);

  return (
    <FormControl error={!!errorToUse} className="checkboxWrapper">
      <FormControlLabel
        label={label}
        className={`customCheckboxFormControl ${formControlClassName}`}
        labelPlacement={labelPlacement}
        control={
          <MuiCheckbox
            id={id}
            checked={valueToUse}
            value={valueToUse}
            onChange={(e) => {
              if (isCheckBoxGroup)
              {
                groupHandleChange(e);
              }
              else
              {
                onChange(e);
              }

              if (customOnChange)
              {
                customOnChange(e);
              }
            }}
            onBlur={onBlur}
            name={name}
            color="primary"
            className={`customCheckBox ${className}`}
            ref={ref}
          />
        }
      />
      { !!errorToUse && <FormHelperText>{errorToUse.message}</FormHelperText>}
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
