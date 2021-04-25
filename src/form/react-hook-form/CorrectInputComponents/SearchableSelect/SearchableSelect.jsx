import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { makeStyles } from '@material-ui/core';
import { useController} from 'react-hook-form';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: 'none'
    },
    '&&:after': {
      borderBottom: 'none'
    }
  }
});

const filter = createFilterOptions();

const filterOptions = (options, params, creatableLabel, creatable, optionLabel) => {
  const filtered = filter(options, params);
  // Suggest the creation of a new value if creatable is true
  if (params.inputValue !== '' && creatable === true)
  {
    const newOptionLabel = creatableLabel ? `Add "${params.inputValue}"` : params.inputValue;
    filtered.push({
      inputValue: params.inputValue,
      [optionLabel]: newOptionLabel,
      id: params.inputValue,
      new_value: params.inputValue
    });
  }
  return filtered;
};

const SearchableSelect = ({
  // field: { name, value, ...otherFieldProps },
  // form: { touched, errors, setFieldValue, status },
  onChange : customOnChange,
  label = '',
  variant = 'outlined',
  options,
  optionLabel,
  size = 'small',
  required,
  onInputChange,
  withIcon = false,
  resultIcon: ResultIcon,
  creatable = false,
  selectOnFocus = false,
  clearOnBlur = false,
  onClear = () => null,
  creatableLabel = true,
  disabled = false,
  noOptionsText = null,
  placeholder = '',
  
  // hook form specific
  name, control, defaultValue,
  rules = {}
}) => {
  const classes = useStyles();

  const {
    field: { ref, value, onChange },
    fieldState : { error },
  } = useController({
    name,
    control,
    defaultValue: {},
    rules : rules
  });
  
  return (
    <Autocomplete
      onChange={(e, newValue) => {
        const value = newValue || '';
        onChange(value);
        // Running the custom on change function if passed
        if (customOnChange)
        {
          customOnChange(e, newValue);
        }
      }}
      id={name}
      options={options}
      className="customSearchableSelect"
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            required={required}
            label={label}
            variant={variant}
            error={!!error}
            helperText={error && error.message}
            placeholder={placeholder}
            inputProps={{
              ...params.inputProps,
              value: params.inputProps.value,
              // disable autocomplete and autofill
              autoComplete: 'off',
              classes: classes
            }}
          />
        );
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

      }}
      // this is needed to show selected value 
      renderOption={(option, { inputValue }) => {
        const matches = match(option[optionLabel], inputValue);
        const parts = parse(option[optionLabel], matches);
        return (
          <>
            {withIcon && <span className="resultIcon"><ResultIcon /></span>}
            <div className="searchableSelectResults">
              {parts.map((part, index) => {
                return (
                  <span key={index} className="highLighter" style={{ fontWeight: part.highlight ? 700 : 400 }}>
                    {part.text}
                  </span>
                );
              })}
            </div>
          </>
        );
      }}
      onInputChange={(e, value, reason) => {
        if (onInputChange && reason !== 'reset')
        {
          onInputChange(e, value, reason);
        }

        // when clear icon is clicked 
        if (reason === 'clear')
        {
          onClear();
        }
      }}
      filterOptions={(options, params) => filterOptions(options, params, creatableLabel, creatable, optionLabel)}
      selectOnFocus={selectOnFocus}
      clearOnBlur={clearOnBlur}
      value={value || ''}
      disabled={disabled}
      noOptionsText={noOptionsText ? noOptionsText : React.ReactNode}
      
      //hook form specific
      ref={ref}
    />
  );
};

SearchableSelect.prototype = {
  customOnChange: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.string,
  options: PropTypes.array.isRequired,
  optionLabel: PropTypes.string.isRequired,
  size: PropTypes.string,
  required: PropTypes.bool,
  onInputChange: PropTypes.func,
  onClear: PropTypes.func,
  withIcon: PropTypes.bool,
  creatable: PropTypes.bool,
  selectOnFocus: PropTypes.bool,
  clearOnBlur: PropTypes.bool,
  creatableLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  noOptionsText: PropTypes.string,
  placeholder: PropTypes.placeholder,
};

export default SearchableSelect;

