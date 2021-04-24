import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import PropTypes from 'prop-types';
import './MultiSelect.scss';
import CloseIcon from '@material-ui/icons/Close';
import { getError } from 'utils/formik';

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

const MultiSelect = ({
  field: { name, value, ...otherFieldProps },
  form: { touched, errors, setFieldValue, status },
  onChange = null,
  label = '',
  variant = 'outlined',
  options = [],
  optionLabel = '',
  size = 'small',
  required = false,
  loading = false,
  onInputChange = null,
  onClear = () => null,
  className = '',
  closeIcon: CustomCloseIcon = <CloseIcon fontSize="small" />,
  popupIcon = null,
  placeholder = 'Placeholder',
  disabled = false,
  showLoaderIcon = false,
  hideChips = false,
  valueLabel = 'id',
}) => {
  const errorText = getError(name, { touched, status, errors });
  const isError = (errorText) ? true : false;
  return (
    <>
      <Autocomplete
        className={`customMultiSelect ${className}`}
        multiple
        name={name}
        value={value}
        {...otherFieldProps}
        onChange={(e, newValue) => {
          setFieldValue(name, newValue);
          // Running the custom on change function if passed
          if (onChange)
          {
            onChange(e, newValue);
          }
        }}

        id={name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            required={required}
            variant={variant}
            label={label}
            placeholder={placeholder}
            error={isError}
            helperText={errorText}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {
                    showLoaderIcon
                    &&
                    <InputAdornment position="end">
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </InputAdornment>
                  }
                </>
              ),
            }}
          />
        )}
        size={size}
        getOptionLabel={(option) => option[optionLabel]}
        getOptionSelected={(option, value) => {
          if (option[valueLabel] === value[valueLabel])
          {
            return true;
          }
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
        renderOption={(option, { inputValue }) => {
          const matches = match(option[optionLabel], inputValue);
          const parts = parse(option[optionLabel], matches);
          return generateOptions(matches, parts);
        }}
        popupIcon={popupIcon}
        disabled={disabled}
        // weather to show selected items inside the multi select box
        renderTags={hideChips ? () => null : null}
        closeIcon={CustomCloseIcon}

      />
    </>
  );
};

MultiSelect.prototype = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.string,
  options: PropTypes.array.isRequired,
  optionLabel: PropTypes.string.isRequired,
  valueLabel: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  onInputChange: PropTypes.func,
  onClear: PropTypes.func,
  className: PropTypes.string,
  closeIcon: PropTypes.element,
  popupIcon: PropTypes.element,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  showLoaderIcon: PropTypes.bool,
};

export default MultiSelect;
