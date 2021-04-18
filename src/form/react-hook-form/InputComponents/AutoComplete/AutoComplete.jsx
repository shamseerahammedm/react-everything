import React from 'react';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import PropTypes from 'prop-types';
import './AutoComplete.scss';
import CloseIcon from '@material-ui/icons/Close';
import { useController, useFormContext } from 'react-hook-form';
import { isEmpty } from 'lodash-es';
import { ErrorMessage } from '@hookform/error-message';

const filter = createFilterOptions();

const generateOptions = (matches, parts) => {
  return (
    <div className="multiSelectSearchResults">
      {parts.map((part, index) => (
        <span key={index} className="highLighter" style={{ fontWeight: part.highlight ? 700 : 400 }}>
          {part.text}
        </span>
      ))}
    </div>
  );
};

const SearchableSelect = ({
  onChange,
  label,
  variant = 'outlined',
  options,
  optionLabel,
  size = 'small',
  required,
  onInputChange,
  loading,
  withIcon = false,
  resultIcon: ResultIcon,
  creatable = false,
  selectOnFocus = false,
  clearOnBlur = false,
  onClear = () => null,
  creatableLabel = true,
  disabled = false,
  errorMsg,
  name, control, defaultValue, 
  rules = {}
}) => {
  
  const { setValue } = useFormContext();
  const {
    field: { ref, fieldName },
    fieldState : { error },
  } = useController({
    name,
    control,
    defaultValue: defaultValue,
    rules : rules
  });

  // console.log('otherProps', otherProps);
  // console.log('errors', errors);
  console.log('error', error);
  // console.log('otherInputProps', otherInputProps);

  return (

    <Autocomplete
      name={fieldName}
      onChange={(e, newValue) => {
        const value = newValue || ''; 
        setValue(name, value);
        // Running the custom on change function if passed
        if (onChange)
        {
          onChange(e, newValue);
        }
      }}
      defaultValue={defaultValue}
      id={name}
      options={options}
      className="SearchableSelect"
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            required={required}
            label={label}
            variant={variant}
            error={error || false}
            helperText={error && errorMsg}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'off', // disable autocomplete and autofill
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
      loading={loading}

      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value if creatable is true
        if (params.inputValue !== '' && creatable === true)
        {
          var newOptionLabel = creatableLabel ? `Add "${params.inputValue}"` : params.inputValue;
          filtered.push({
            inputValue: params.inputValue,
            //[optionLabel]: `Add "${params.inputValue}"`,
            [optionLabel]: newOptionLabel,
            id: params.inputValue,
            new_value: params.inputValue
          });
        }

        return filtered;
      }}
      selectOnFocus={selectOnFocus}
      clearOnBlur={clearOnBlur}
      // value={incomingValue || ''}
      disabled={disabled}
      ref={ref}
    />
  );
};

export default SearchableSelect;
