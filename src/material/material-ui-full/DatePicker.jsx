import React from 'react';
import { DatePicker as MuiDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { InputAdornment, IconButton } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles(theme => {
    return {
        root: {
            '& label.Mui-focused': {
                color: theme.palette.secondary.main
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor:  theme.palette.secondary.main
                },
            },
        }
    }
});






const DatePicker = ({
    field: { name },
    form: { values, setFieldValue },
    onChange,
    label,
    variant = 'outlined',
    size = "small",
    showTodayButton = true,
    disablePast = true,
    disableFuture = false,
    required,
    icon=true
}) => {
    const customStyles = useStyles();
    

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiDatePicker
                className={customStyles.root}
                fullWidth
                name={name}
                autoOk
                label={label}
                clearable
                value={values[name]}
                onChange={(value) => {
                    console.log(value);
                    setFieldValue(name, value);
                    // Running the custom on change function if passed
                    if (onChange)
                    {
                        onChange(value);
                    }
                }}
                inputVariant={variant}
                format="d MMM yyyy"
                size={size}
                InputProps={ icon ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton> <CalendarTodayIcon /> </IconButton>
                        </InputAdornment>
                    )
                } :  null}
                required={required}
                showTodayButton={showTodayButton}
                disablePast={disablePast}
                disableFuture={disableFuture}
            />
        </MuiPickersUtilsProvider>

    )
}

export default DatePicker;
