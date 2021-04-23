import { FormControl, FormHelperText, FormLabel, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(3),
  },
}));

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children,
  required= false
}) => {
  const classes = useStyles();
  return (
    <FormControl  required={required} component="fieldset" error={error} className={classes.formControl}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      {children}
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default RadioButtonGroup;