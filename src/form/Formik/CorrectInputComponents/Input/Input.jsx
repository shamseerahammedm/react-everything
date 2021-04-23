import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './Input.scss';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getError } from 'utils/formik';
// import correctIcon from 'assets/icons/correct.svg';
// import wrongIcon from 'assets/icons/wrong.svg';

const Input = ({
  field: { name, value, ...otherFieldProps },
  form: { touched, errors, status },
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
  onChange = () => null,
  endIcon = null
}) => {
  const errorText = getError(name, { touched, status, errors });
  const isError = (errorText) ? true : false;

  return (
    <div className="inputWrapper">
      <TextField
        fullWidth
        label={label || null}
        type={type}
        name={name}
        value={value}
        helperText={errorText}
        error={isError}
        variant={variant}
        size={size}
        className={`customInput ${className}` }
        required={required}
        multiline={multiline}
        placeholder={placeholder || null}
        onBlur={otherFieldProps.onBlur}
        onChange={(e) => {
          otherFieldProps.onChange(e);
          if(onChange)
          {
            onChange(e);
          }
        }}
        rows={rows}
        InputProps={{
          // disable autocomplete and autofill
          autoComplete: 'off',
          readOnly: readOnly,
          // if customEndIcon is passed use that, else use normal error and success icons
          endAdornment: (showCustomIcons && touched[name] && !endIcon) 
            ? 
            <InputAdornment position="end">
              {
                isError 
                  ? <p>e</p> 
                  : <p>c</p>
              }
            </InputAdornment>
            : 
            (showCustomIcons && endIcon) 
              ? <>{endIcon}</>
              : null
        }}
        disabled={disabled}
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
  onChange: PropTypes.func,
};

export default Input;