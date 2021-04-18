import React from 'react';
import { DatePicker as MuiDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { InputAdornment, IconButton } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

const secondaryDark = '#179daf!important';
const themeGrayLight = '#e6e6e6';
const secondaryColor = '#1ac7de';

const theme = createMuiTheme({
  overrides: {
    MuiPickersClock: {
      clock: {
        backgroundColor: '#EDEDED'
      },
      pin: {
        backgroundColor: secondaryColor,
      }
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: secondaryColor
      },
      thumb: {
        backgroundColor: secondaryDark,
        borderColor: secondaryDark,
      }
    },
    MuiButton: {
      textPrimary: {
        color: secondaryColor,
      }
    },
    //header
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: secondaryColor,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      // day: {
      //     color: lightBlue.A700,
      // },
      daySelected: {
        backgroundColor: secondaryColor,
        '&:hover': {
          backgroundColor: secondaryDark,
        }
      },
      // dayDisabled: {
      //     color: lightBlue["100"],
      // },
      // current: {
      //     color: lightBlue["900"],
      // },
    },
    MuiPickersModal: {
      dialogAction: {
        color: 'red',
      },
    },

    MuiOutlinedInput: {
      root: {
        '&.Mui-disabled': {
          '& fieldset': {
            borderColor: themeGrayLight,
          }
        },

        '&.Mui-focused fieldset': {
          borderColor: `${secondaryColor}!important`,
        },
      }
    },
    MuiFormLabel: {
      '&.Mui-focused legend': {
        borderColor: `${secondaryColor}!important`,
      },
    }
  }
});

const DatePicker = ({
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
  icon = null,
  errorMsg,
  name, control, defaultValue,
  rules = {}
}) => {

  const { setValue } = useFormContext();
  const {
    field: { fieldName, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: defaultValue,
    rules: rules
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <MuiDatePicker
          className={`customDatePicker ${className}`}
          fullWidth={fullWidth}
          name={fieldName}
          autoOk={autoOk}
          label={label}
          clearable={clearable}
          defaultValue={defaultValue}
          value={value}
          onChange={(value) => {
            console.log('setValue',setValue);
            setValue(name, value);
            // Running the custom on change function if passed
            if (onChange)
            {
              onChange(value);
            }
          }}
          inputVariant={variant}
          format={format}
          size={size}
          error={error || false}
          helperText={error && errorMsg}
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
