import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';




const CheckBox = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue },
    onChange,
    label,
    checkBoxType, // customProp not from mui
    ...props
}) => {

    const isError = (touched[name] && errors[name]) ? true : false;

    return (
        <FormControl component="fieldset" error={isError}>
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
                {
                    checkBoxType === 'single'
                        ?
                        (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={values[name]}
                                        {...otherFieldProps}
                                        onChange={(e) => {
                                            setFieldValue(name, e.target.checked);
                                            // Running the custom on change function if passed
                                            if (onChange)
                                            {
                                                onChange(e);
                                            }
                                        }}
                                        name={name}
                                        
                                    />
                                }
                                label={label}
                            />
                        )
                        :
                        null
                        // need to do group not done
                        // <FormControlLabel
                        //     control={
                        //         <Checkbox
                        //             checked={true}
                        //             onChange={(e) => {
                        //                 // Running the custom on change function if passed
                        //                 if (onChange)
                        //                 {
                        //                     onChange(e);
                        //                 }
                        //             }}
                        //             name="gilad"
                        //         />
                        //     }
                        //     label="Gilad Gray"
                        // />
                }
            </FormGroup>
            {
                isError && <FormHelperText>{errors[name]}</FormHelperText>
            }
           
        </FormControl>
    )
}

export default CheckBox;
