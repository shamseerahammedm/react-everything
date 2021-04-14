import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { makeStyles } from '@material-ui/core/styles';
// should install mui lab :: npm install @material-ui/lab
// npm i autosuggest-highlight



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
                    borderColor:  theme.palette.secondary.main
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
    required
}) => {

    const color = useStyles();
    const isError = (touched[name] && errors[name]) ? true : false;
    const incomingValue = values[name];
    const optionStringToShow = options.find( optionItem => optionItem.id === incomingValue);

    return (
        <Autocomplete
            {...otherFieldProps}
            onChange={(e, newValue) => {
                console.log(newValue);
                const value = newValue ? newValue.id : optionStringToShow.id;  // make sure to give number,nullable if validating
                setFieldValue(name, value);

                // Running the custom on change function if passed
                if (onChange)
                {
                    onChange(e, newValue);
                }
            }}
            required={required}
            value={optionStringToShow}
            // disableClearable
            id={name}
            options={options}
            className={color.root}
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
            size={size}
            getOptionLabel={(option) => {
                return option[optionLabel];
            }} // this is needed to show selected value 
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

            onInputChange={(e, value, reason) => {
                console.log(e);
                console.log(value);
                console.log(reason);
            }}
            
        />
    )
}

export default SearchableSelect;







// Note about component working:

// value provide cheyyandath object roopathil akanam , "getOptionLabel" argument varunnath options aanu athilnu currently select option ( ith varunnath formk state il ninnanu ) athe vechu select option find chaithu return cheyyanam apolanu label select fileil kanikukayollu, on change functionil newvalue option object ayi aaanu varunnath  athilnu id eduthu venam setfield value vinu kodukkan