import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { makeStyles } from '@material-ui/core/styles';




// const handleRenderOption = (option, { inputValue }) => {
//     const matches = match(option.name, inputValue);
//     const parts = parse(option.name, matches);

//     const highlightStyle = {
//         fontWeight: 700,
//         backgroundColor: "lightyellow",
//         padding: "5px 2px"
//     };

//     return (
//         <div>
//             {parts.map((part, index) => (
//                 <span key={index} style={part.highlight ? highlightStyle : {}}>
//                     {part.text}
//                 </span>
//             ))}
//         </div>
//     );
// };


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

const filter = createFilterOptions();


const SearchableSelect = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue },
    onChange,
    label,
    variant = 'outlined',
    options,
    optionLabel,
    size = "small",
    required,
    onInputChange,
    loading,
    withIcon = false,
    resultIcon: ResultIcon,
    creatable=false
}) => {

    const color = useStyles();
    const isError = (touched[name] && errors[name]) ? true : false;
    const incomingValue = values[name];

    const optionStringToShow = options.find(optionItem => optionItem.id === incomingValue);

    return (
        <Autocomplete
            {...otherFieldProps}
            onChange={(e, newValue) => {

                console.log(newValue);
                const value = (newValue && newValue.id) || '';  // make sure to give number,nullable if validating
            
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
            className={`SearchableSelect ${color.root}`}
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
                            autoComplete: 'off', // disable autocomplete and autofill
                        }}
                    />
                )
            }}
            size={size}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string')
                {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue)
                {
                    return option.inputValue;
                }
                return option[optionLabel];
            }} // this is needed to show selected value 
            renderOption={(option, { inputValue }) => {
                const matches = match(option[optionLabel], inputValue);
                const parts = parse(option[optionLabel], matches);
                return (
                    <>
                        {withIcon && <span className="resultIcon"><ResultIcon /></span>}
                        <div className="searchableSelectResults">

                            {parts.map((part, index) => (
                                <span key={index} className="highLighter" style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                    {part.text}
                                </span>
                            ))}
                        </div>
                    </>
                );
            }}
            onInputChange={(e, value, reason) => {
                if (onInputChange)
                {
                    onInputChange(e, value, reason)
                }
            }}
            loading={loading}


            filterOptions={(options, params) => {
				const filtered = filter(options, params);

				// Suggest the creation of a new value if creatable is true
				if (params.inputValue !== '' && creatable === true )
				{
					filtered.push({
						inputValue: params.inputValue,
                        [optionLabel]: `Add "${params.inputValue}"`,
                        id: params.inputValue
					});
				}

				return filtered;
			}}
            selectOnFocus
			clearOnBlur
        />
    )
}

export default SearchableSelect;






