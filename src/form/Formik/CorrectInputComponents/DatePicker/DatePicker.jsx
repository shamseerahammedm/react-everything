import React from 'react';
import { DatePicker as MuiDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { InputAdornment, IconButton } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './DatePicker.scss';
import { theme } from 'utils/constants';
import { getError } from 'utils/formik';

const datePickerTheme = createMuiTheme({
  overrides: {
    MuiPickersClock: {
      clock: {
        backgroundColor: theme.palette.common.primaryColor
      },
      pin: {
        backgroundColor: theme.palette.common.primaryColor,
      }
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: theme.palette.common.primaryColor
      },
      thumb: {
        backgroundColor: theme.palette.common.darkLight,
        borderColor: theme.palette.common.darkLight,
      }
    },
    MuiButton: {
      textPrimary: {
        color: theme.palette.common.primaryColor,
      }
    },
    //header
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: theme.palette.common.primaryColor,
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: theme.palette.common.primaryColor,
        '&:hover': {
          backgroundColor: theme.palette.common.darkLight,
        }
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
        '&.Mui-disabled': {
          '& fieldset': {
            borderColor: theme.palette.common.borderColor,
          }
        },
        '&.Mui-focused fieldset': {
          // border color was getting overridden with default primary color
          borderColor: `${theme.palette.common.primaryColor}!important`,
        },
      },
      input: {
        // input padding was getting overridden by margin dense class
        paddingTop: '14px!important',
        paddingBottom: '14px!important',
      }
    }
  }
});

// Note : if datepicker needs to be opened conditionally also pass progOpen as true from the component

const DatePicker = ({
  field: { name, value },
  form: { setFieldValue, touched, errors, status },
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
  format = 'd MMM yyyy hh : mm aaaa',
  clearable = false,
  autoOk = true,
  placeholder = '',
  icon = null
}) => {

  const errorText = getError(name, { touched, status, errors });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={datePickerTheme}>
        <MuiDatePicker
          className={`customDatePicker ${className}`}
          fullWidth={fullWidth}
          name={name}
          autoOk={autoOk}
          label={label}
          clearable={clearable}
          value={value}
          onChange={(value) => {
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
                <IconButton> { icon || <CalendarTodayIcon /> } </IconButton>
              </InputAdornment>
            )
          } : null}
          required={required}
          showTodayButton={showTodayButton}
          disablePast={disablePast}
          disableFuture={disableFuture}
          placeholder={placeholder}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>

  );
};

DatePicker.propTypes = {
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
};

export default DatePicker;
