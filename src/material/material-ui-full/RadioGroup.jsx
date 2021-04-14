import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiRadioGroup from '@material-ui/core/RadioGroup'; // custom named import because of name conflict
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


const RadioGroup = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue },
    onChange,
    labelData,
    label,
    labelType // customProp not from mui
}) => {

    
    const isError = ( touched[name] && errors[name] ) ? true : false;

    



    return (
        <FormControl component="fieldset" error={isError}>
            <FormLabel component="legend">{label}</FormLabel>
            <MuiRadioGroup
                row // this is for changing vertical or horizontal arrangement of radios
                aria-label={name}
                name={name}
                value={values[name]}
                {...otherFieldProps}
                onChange={(e) => {
                    setFieldValue(name, e.target.value);
                    // Running the custom on change function if passed
                    if (onChange)
                    {
                        onChange(e);
                    }
                }}
            >
                {
                    labelData.map((labelItem) => {
                        // if radioGroupType prop value is nolabel, radio group is stand alone, there would be no labels
                        const label = labelType === 'nolabel' ? null : labelItem.label;
                        return (
                            <FormControlLabel key={labelItem.id} value={labelItem.value} control={<Radio />} label={label} />
                        )
                    })
                }
            </MuiRadioGroup>
            {
                isError && <FormHelperText>{errors[name]}</FormHelperText>
            }   
            
        </FormControl>
    )
}




export default RadioGroup;
