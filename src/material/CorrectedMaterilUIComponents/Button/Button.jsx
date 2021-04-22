import React, { forwardRef } from 'react';
import { Button as MuiButton } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = forwardRef(({
  buttonType = 'button',
  variant = 'contained',
  type = 'button',
  children,
  disableElevation,
  disabled = false,
  onClick,
  size = 'medium',
  icon: ButtonIcon,
  customStyle = { width: 'auto' },
  width,
  className = '',
  isLoading,
  uppercase,
  disableRipple = true,
  disableHoverEffect = true,
  disableFocusRipple = true,
  linkRequired = false,
  ...otherProps
}, ref) => {

  const customStyles = {
    ...customStyle,
    width: width,
    textTransform: uppercase ? 'uppercase' : 'none'
  };

  if (buttonType === 'button')
  {
    return (
      <MuiButton
        variant={variant}
        type={type}
        disableElevation={disableElevation}
        disabled={disabled}
        size={size}
        className={`customButton ${className}`}
        onClick={() => {
          if (onClick)
          {
            onClick();
          }
        }}
        style={customStyles}
        {...otherProps}
        ref={ref}
        disableRipple={disableRipple}
      >
        {children}
      </MuiButton>
    );
  }
  else if (buttonType === 'iconButton')
  {
    return (
      <IconButton
        onClick={onClick}
        disabled={disabled}
        size={size}
        type={type}
        className={`iconButton ${className} ${disableHoverEffect ? 'disableHoverEffect' : ''}`}
        disableRipple={disableRipple}
        disableFocusRipple={disableFocusRipple}
        {...otherProps}
        ref={ref}
      >
        {/* ButtonIcon is a custom renamed component,AlarmIcon is set as default icon */}
        { children || <AlarmIcon /> }
      </IconButton>
    );
  }
});

Button.propTypes = {
  buttonType: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  disableElevation: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  icon: PropTypes.element,
  customStyle: PropTypes.object,
  className: PropTypes.string,
  width: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.any,
  disableRipple: PropTypes.bool,
  disableHoverEffect: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  linkRequired: PropTypes.bool,
};

export default Button;
