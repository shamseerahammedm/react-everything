import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';




const greyBorderColor = '#eeeeee';
const useStyles = makeStyles( theme => ({
    root: {
        width : '100%',
    },
    labelClass : {
        '&.Mui-focused': {
            color: theme.palette.secondary.main
        },
    },
    selectClass : {
        '&.Mui-focused': {
            '&:before' : {
                borderColor: theme.palette.secondary.main
            },
            '&:after' : {
                borderColor: theme.palette.secondary.main
            }
        },
        '.MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor:  theme.palette.secondary.main
            },
        },
        '&:before': {
            borderColor: greyBorderColor,
        },
        '&:hover:not(.Mui-disabled):before': {
            borderColor: theme.palette.secondary.main,
        },
    }
}));



const SingleSelect = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue },
    onChange,
    label,
    placeHolder,
    required,
    variant="outlined",
    options,
    size="small",
    className,
    optionLabel="option",
    ...otherProps
}) => {

    const isError = ( errors[name] && touched[name] ) ? true : false ;
    const shouldLabelShrink = label ? true : false ;
    const isRequired = required ? true : false ;

    // This is for reducing select size as there is no explicit size prop in material ui for select component
    let margin;
    if(size === 'small')
    {
        margin = "dense"
    }

    const classes = useStyles();


    return (
        <FormControl variant={variant} error={isError} margin={margin} className={classes.root}>
            <InputLabel className={classes.labelClass} required={isRequired} shrink={shouldLabelShrink} id={label}>{label}</InputLabel>
            <Select
                
                fullWidth
                size={size}
                id={label}
                labelId={label}
                value={values[name]} 
                displayEmpty
                name={name}
                label={label}
                {...otherFieldProps} // dont change prop order, formik change is overrided by onChange below this
                onChange={(e) => {
                    setFieldValue(name, e.target.value);
                    // Running the custom on change function if passed
                    if (onChange)
                    {
                        onChange(e);
                    }
                }}
                {...otherProps}
                className={`
                    ${className}
                    ${classes.selectClass}
                `}
            >
                <MenuItem value="">{placeHolder}</MenuItem>
                {
                    options && options.map((selectItem, i) => {
                        return <MenuItem key={i} value={selectItem.id}>{selectItem[optionLabel]}</MenuItem>
                    })
                }
            </Select>
            {
                isError && <FormHelperText>Country is required !</FormHelperText>
            }
        </FormControl>

    )
}



export default SingleSelect;