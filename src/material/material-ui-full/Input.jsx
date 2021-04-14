import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles(theme => {
    return {
        root: {

            '& label.Mui-focused': {
                color: theme.palette.secondary.main
            },


            // outlined text field border color changing
            '& .MuiOutlinedInput-root': {

                '&.Mui-disabled' : {
                    '& fieldset' : {
                        borderColor: theme.palette.common.themeGrayLight
                    }
                },

                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.secondary.main
                },
            },



            // in case of standard text field
            '& .MuiInput-underline': {
                '&::before': {
                    borderBottom: `1px solid #eeeeee`
                },
                '&::after': {
                    borderBottom: `2px solid ${theme.palette.secondary.main}`
                },
                '&.Mui-error': {
                    '&::after': {
                        borderBottom: `2px solid ${theme.palette.error.main}`
                    }
                },
                '&:hover:not(.Mui-disabled):before': {
                    borderBottom: `2px solid ${theme.palette.secondary.main}`
                },
            },



        }
    }
});






const Input = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue, },
    onChange,
    type,
    label,
    variant = "outlined",
    children,
    size = "small",
    required,
    multiline,
    className,
    rows = 4,
    readOnly = false,
    disabled = false,
    ...otherProps
}) => {



    const customStyles = useStyles();
    const isError = (touched[name] && errors[name]) ? true : false;
    return (
        <TextField
            fullWidth
            label={label}
            type={type}
            name={name}
            value={values[name]}
            helperText={isError && `${errors[name]}`}
            error={isError}
            variant={variant}
            {...otherFieldProps}
            size={size}
            className={`
                ${className}
                ${customStyles.root}
            `}
            required={required}
            multiline={multiline}
            onChange={(e) => {
                setFieldValue(name, e.target.value);
                if (onChange)
                {
                    // Running the custom on change function if passed
                    if (onChange)
                    {
                        onChange(e);
                    }
                }
            }}
            rows={rows}
            inputProps={{
                autoComplete: 'off', // disable autocomplete and autofill
                readOnly: readOnly,
            }}
            disabled={disabled}
        />
    )
}


export default Input;