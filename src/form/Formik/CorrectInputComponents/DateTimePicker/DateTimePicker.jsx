import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DateTimePicker as MuiDateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { InputAdornment, IconButton } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { getError } from 'utils/utils';

const DateTimePicker = ({
  field: { name, value },
  form: { setFieldValue, setFieldTouched, touched, errors, status },
  onChange = () => null,
  label = '',
  variant = 'outlined',
  size = 'small',
  showTodayButton = true,
  disablePast = true,
  disableFuture = false,
  required = false,
  showIcon = true,
  className = '',
  fullWidth = true,
  format = 'do MMM yyyy hh:mm a',
  clearable = true,
  autoOk = true,
  placeholder = '',
  icon = null,
  progOpen = false,
  open = false,
  onOpen = false,
  onClose = false,
}) => {

  const errorText = getError(name, { touched, status, errors });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={null}>
        <MuiDateTimePicker
          className={`customDatePicker ${className}`}
          fullWidth={fullWidth}
          name={name}
          autoOk={autoOk}
          label={label}
          clearable={clearable}
          value={value}
          onChange={(value) => {
            setFieldTouched(name, true);
            setFieldValue(name, value);
            // Running the custom on change function if passed
            if (onChange)
            {
              onChange(value);
            }
          }}
          inputVariant={variant}
          format={format}
          size={size}
          error={!!errorText}
          helperText={errorText}
          InputProps={showIcon ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton> {icon || <CalendarTodayIcon />} </IconButton>
              </InputAdornment>
            )
          } : null}
          required={required}
          showTodayButton={showTodayButton}
          disablePast={disablePast}
          disableFuture={disableFuture}
          placeholder={placeholder}
          {...{ ...(progOpen && { open, onOpen, onClose }) }} // only passing this props if progOpen is set to true

        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

DateTimePicker.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  format: PropTypes.string,
  showTodayButton: PropTypes.bool,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  required: PropTypes.bool,
  icon: PropTypes.element,
  fullWidth: PropTypes.bool,
  clearable: PropTypes.bool,
  autoOk: PropTypes.bool,
  progOpen: PropTypes.bool,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};
export default DateTimePicker;
