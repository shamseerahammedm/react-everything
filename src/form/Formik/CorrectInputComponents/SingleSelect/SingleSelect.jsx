import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './SingleSelect.scss';
import PropTypes from 'prop-types';
import { getError } from 'utils/formik';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 0,
    marginBottom: 0
  },
  menuPaper: {
    marginTop : '10px',
    backgroundColor: `${theme.palette.common.primaryColor}`,
    borderRadius: theme.palette.common.inputBorderRadius,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.common.borderColor}`,
    '& ul ': {
      paddingTop: 0,
      paddingBottom: 0
    },
    '& li ': {
      paddingTop: '13px',
      paddingBottom: '13px',
      color : 'white',
    },
    '& .Mui-selected': {
      backgroundColor: theme.palette.common.primaryColorDark,
    }
  }
}));

const SingleSelect = ({
  field: { name, value, ...otherFieldProps },
  form: { touched, errors, setFieldValue, status },
  onChange,
  label,
  placeHolder,
  required = false,
  variant = 'outlined',
  options,
  size = 'small',
  className = '',
  optionLabel = 'option',
  disabled = false,
  disablePlaceholder = false,
  showValidationError = true,
  ...otherProps
}) => {

  const errorText = getError(name, { touched, status, errors });
  const isError = (errorText) ? true : false;

  // This is for reducing select size as there is no explicit size prop in material ui for select component
  let margin;
  if (size === 'small')
  {
    margin = 'dense';
  }
  const classes = useStyles();
  return (
    <FormControl variant={variant} error={isError} margin={margin} className={classes.root}>
      <InputLabel className={classes.labelClass} required={required} shrink={false} id={label}>{label}</InputLabel>
      <Select
        IconComponent={ExpandMoreIcon}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          getContentAnchorEl: null,
          classes: { paper: classes.menuPaper }
        }}
        disabled={disabled}
        fullWidth
        size={size}
        id={name}
        labelId={label}
        value={value}
        displayEmpty
        name={name}
        label={label}
        {...otherFieldProps}
        onChange={(e, index, value) => {
          setFieldValue(name, e.target.value);
          // Running the custom on change function if passed
          if (onChange)
          {
            onChange(e);
          }
        }}
        {...otherProps}
        className={`
            customSelect
            ${className}
            ${classes.root}
        `}

      >
        <MenuItem value="" disabled={disablePlaceholder}>{placeHolder}</MenuItem>
        {
          options && options.map((selectItem, i) => {
            return <MenuItem key={i} value={selectItem.value}>{selectItem[optionLabel]}</MenuItem>;
          })
        }
      </Select>
      {
        isError && showValidationError && <FormHelperText className="errorMessageText">{errorText}</FormHelperText>
      }
    </FormControl>
  );
};

SingleSelect.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.string,
  linkTo: PropTypes.string,
  options: PropTypes.array,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  optionLabel: PropTypes.string,
  disablePlaceholder: PropTypes.bool,
  showValidationError: PropTypes.bool,
};

export default SingleSelect;
