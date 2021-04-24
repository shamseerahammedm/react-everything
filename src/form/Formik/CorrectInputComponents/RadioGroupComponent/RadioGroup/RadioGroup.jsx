import { FormControl, FormHelperText, FormLabel, makeStyles } from '@material-ui/core';
import React from 'react';
import { getError } from 'utils/formik';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(3),
  },
}));

const RadioButtonGroup = ({
  value,
  errors,
  touched,
  status,
  id,
  label,
  className,
  children,
  required= false
}) => {
  const classes = useStyles();
  const errorText = getError(id, { touched, status, errors });
  return (
    <FormControl  required={required} component="fieldset" error={!!errorText} className={classes.formControl}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      {children}
      {!!errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default RadioButtonGroup;