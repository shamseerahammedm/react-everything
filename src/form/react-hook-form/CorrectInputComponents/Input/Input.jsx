import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './Input.scss';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getError } from 'utils/formik';
import { useController } from 'react-hook-form';
// import correctIcon from 'assets/icons/correct.svg';
// import wrongIcon from 'assets/icons/wrong.svg';

const Input = ({
  // field: { name, value, ...otherFieldProps },
  // form: { touched, errors, status },
  type,
  label,
  variant = 'outlined',
  size = 'small',
  required,
  multiline,
  className = '',
  rows = 4,
  readOnly = false,
  disabled = false,
  placeholder,
  showCustomIcons = false,
  onChange: customOnChange = null,
  endIcon = null,

  // hook form specific
  name, control, defaultValue, rules = {}
}) => {

  const {
    field: { ref, value, onBlur, onChange },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue: {},
    rules: rules
  });
  const { error } = fieldState;
  return (
    <div className="inputWrapper">
      <TextField
        fullWidth
        label={label || null}
        type={type}
        value={value}
        helperText={error && error.message}
        error={!!error}
        variant={variant}
        size={size}
        className={`customInput ${className}`}
        required={required}
        multiline={multiline}
        placeholder={placeholder || null}
        onBlur={onBlur}
        onChange={(e) => {
          onChange(e);
          if (customOnChange)
          {
            customOnChange(e);
          }
        }}
        rows={rows}
        InputProps={{
          // disable autocomplete and autofill
          autoComplete: 'off',
          readOnly: readOnly,
        }}
        disabled={disabled}
        // Hook form specific
        inputRef={ref}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  showCustomIcons: PropTypes.bool,
  rows: PropTypes.number,
  customOnChange: PropTypes.func,
};

export default Input;