import React from 'react';
import { Switch as MuiSwitch } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles(theme => ({
    switchBase: {
        color: theme.palette.primary.main,
        '&$checked': {
            color: theme.palette.primary.main,
        },
        '&$checked + $track': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    checked: {},
    track: {},
}));








const Switch = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue },
    onChange,
    type,
    label,
    children,
    color,
    size = "medium",
    labelPlacement,
    ...otherProps
}) => {
    const customStyles = useStyles();
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position">
                <FormControlLabel
                    control={
                        <MuiSwitch
                            className={customStyles.switchBase}
                            checked={values[name]}
                            color={color}
                            size={size}
                            onChange={(e) => {
                                const value = e.target.checked;
                                setFieldValue(name, value);
                                // Running the custom on change function if passed
                                if (onChange)
                                {
                                    onChange(value);
                                }
                            }}
                        />
                    }
                    label={label}
                    labelPlacement={labelPlacement}
                    style={{marginLeft:'0'}}
                />
            </FormGroup>
        </FormControl>
    )
}






export default Switch;
