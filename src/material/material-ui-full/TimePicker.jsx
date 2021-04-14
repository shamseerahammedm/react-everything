import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker as MuiTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { InputAdornment, IconButton } from '@material-ui/core';




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










const TimePicker = ({
    field: { name },
    form: { values, setFieldValue },
    onChange,
    label,
    variant = 'outlined',
    size = "small",
    required,
    icon=true
}) => {

    const customStyles = useStyles();
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiTimePicker 
             className={customStyles.root}
                fullWidth
                name={name}
                label={label}
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
                size={size}
                required={required}
                InputProps={ icon ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton> <AccessAlarmIcon /> </IconButton>
                        </InputAdornment>
                    )
                } : null}
            />
        </MuiPickersUtilsProvider>

    )
}

export default TimePicker;
