import React from 'react';

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  type = 'text',
  ...props
}) => {
  return (
    <>
      <input type={type} {...field} {...props} />
      {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </>
  );
};

export default Input;
