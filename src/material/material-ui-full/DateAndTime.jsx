import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


import { makeStyles } from '@material-ui/core/styles';
// Had to install : npm install --save moment react-moment and do import * as moment below it
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { InputAdornment, IconButton } from '@material-ui/core';



// Changing styles on focus


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



const DateAndTime = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue },
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
    const isError = (touched[name] && errors[name]) ? true : false;

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                    fullWidth
                    name={name}
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
                    label={label}
                    showTodayButton={showTodayButton}
                    disablePast={disablePast}
                    disableFuture={disableFuture}
                    error={isError} 
                    helperText={isError && `${errors[name]}`}
                    className={customStyles.root}
                    InputProps={ icon ? {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton> <CalendarTodayIcon /> </IconButton>
                            </InputAdornment>
                        )
                    } : null}
                    size={size}
                    required
                />

        </MuiPickersUtilsProvider>
    )
}

export default DateAndTime;
