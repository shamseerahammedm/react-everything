import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { makeStyles } from '@material-ui/core/styles';
// should install mui lab :: npm install @material-ui/lab

const filter = createFilterOptions();


// for boldening searched letters in result
const handleRenderOption = (option, { inputValue }) => {
    const matches = match(option.name, inputValue);
    const parts = parse(option.name, matches);

    const highlightStyle = {
        fontWeight: 700,
        backgroundColor: "lightyellow",
        padding: "5px 2px"
    };

    return (
        <div>
            {parts.map((part, index) => (
                <span key={index} style={part.highlight ? highlightStyle : {}}>
                    {part.text}
                </span>
            ))}
        </div>
    );
};


// const useStyles = makeStyles({
//     root: {
//         '& label.Mui-focused': {
//             color: 'green',
//         },
//         '& .MuiOutlinedInput-root': {
//             '&.Mui-focused fieldset': {
//                 borderColor: 'green',
//             },
//         },
//     },
// });

const useStyles = makeStyles(theme => {
    return {
        root: {
            '& label.Mui-focused': {
                color: theme.palette.secondary.main
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.secondary.main
                },
            },
        }
    }
});



const SearchableSelect = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue },
    onChange,
    label,
    variant = 'outlined',
    options,
    optionLabel,
    size = "small",
}) => {

    const color = useStyles();
    const isError = (touched[name] && errors[name]) ? true : false;
    const incomingValue = values[name];


    console.log(incomingValue,'incoming value');
    return (
        <Autocomplete
            {...otherFieldProps}
            onChange={(e, newValue) => {
                



                if (typeof newValue === 'string')
                {
                    setFieldValue(name, { 
                        id : null,
                        [optionLabel] : newValue,
                        type : 'New Value'
                    });
                    // Running the custom on change function if passed
                    if (onChange)
                    {
                        onChange(e, newValue);
                    }

                } 
                else if (newValue && newValue.inputValue)
                {
                    setFieldValue(name, {
                        id : null,
                        [optionLabel] : newValue.inputValue,
                        type : 'New Value'
                    });
                    // Running the custom on change function if passed
                    if (onChange)
                    {
                        onChange(e, newValue.inputValue);
                    }
                }
                else
                {
                    console.log("lower");
                    // const value = newValue ? newValue.id : null;  // make sure to give number,nullable if validating
                    setFieldValue(name, newValue);

                    // Running the custom on change function if passed
                    if (onChange)
                    {
                        onChange(e, newValue);
                    }
                }


            }}
            value={incomingValue}
            disableClearable
            id={name}
            options={options}
            getOptionLabel={(option) => {

                console.log(option);

                // Value selected with enter, right from the input
                if (typeof option === 'string')
                {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue)
                {
                    // return option.inputValue;
                    return option[optionLabel] // this is needed to show selected value 
                }
                // Regular option
                return option[optionLabel] // this is needed to show selected value 


                
            }}
            className={color.root}
            size={size}
            fullWidth={true}

            handleHomeEndKeys
            selectOnFocus
            clearOnBlur={true}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== '')
                {
                    filtered.push({
                        inputValue: params.inputValue,
                        title: `Add "${params.inputValue}"`,
                    });
                }

                return filtered;
            }}



            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        label={label}
                        variant={variant}
                        error={isError}
                        helperText={isError && `${errors[name]}`}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                )
            }}

            renderOption={(option, { inputValue }) => {
                const matches = match(option[optionLabel], inputValue);
                const parts = parse(option[optionLabel], matches);
                return (
                    <div>
                        {parts.map((part, index) => (
                            <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                {part.text}
                            </span>
                        ))}
                    </div>
                );
            }}
        />
    )
}

export default SearchableSelect;







