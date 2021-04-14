import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';






const MultiSelect = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue },
    onChange,
    label,
    variant = 'outlined',
    options,
    optionLabel,
    size = 'small',
    required,
    loading
}) => {


    // converting array of ids to array of objects with labels from options so that autocomplete understands and sets default values
    // const currentlySelectedData = value; // details of options that needs to be selected by default 
    // const defaultValues = [];
    // options.forEach( options => {
    //     if(currentlySelectedData.includes(options.id))
    //     {
    //         defaultValues.push({ id : options.id , [optionLabel] : options[optionLabel]})
    //     }
    // })

    const isError = (touched[name] && errors[name]) ? true : false;


    return (
        <Autocomplete
            multiple
            name={name}
            value={value}
            {...otherFieldProps}
            onChange={(e, newValue) => {
                // always make new array give for formik inorder to set new values, if null provide empty array
                // const optionsToSet = newValue ? newValue.map( item => item.id) : [];  
                setFieldValue(name, newValue);
                // Running the custom on change function if passed
                if (onChange)
                {
                    onChange(e, newValue);
                }
            }}
            // defaultValue={value}
            required={required}
            id={name}
            options={options}
            renderInput={(params) => (
                <TextField 
                    {...params} 
                    variant={variant} 
                    label={label} 
                    placeholder={label}
                    error={isError}
                    helperText={isError && `${errors[name]}`} 
                />
            )}
            size={size}
            loading={loading}
            getOptionLabel={(option) => {
                return option[optionLabel];
            }} 
            getOptionSelected={(option, value) => {

                console.log(option);
                console.log(value);

                if(option.id === value.id)
                {
                    return true
                }
            }}
        />
    )
}

export default MultiSelect
