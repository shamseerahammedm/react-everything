import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';






const Button = ({
    buttonType='button',
    variant,
    type,
    color,
    to,
    children,
    disableElevation,
    disabled,
    onClick,
    size,
    icon : ButtonIcon 
}) => {

    if (buttonType === 'button')
    {
        return (
            <MuiButton 
                variant={variant} 
                color={color}
                type={type}
                disableElevation={disableElevation}
                disabled={disabled}
                onClick={onClick}
                size={size}
                style={{ textTransform : 'initial'}}
            >
                {children}
            </MuiButton>
        )
    }
    else if(buttonType === 'link')
    {
        return (
            <MuiButton 
                variant={variant} 
                color={color}
                disableElevation={disableElevation}
                disabled={disabled}
                size={size}
                style={{ textTransform : 'initial'}}
            >
                <Link 
                    style={{ textDecoration:'none', color:'White'}}
                    to={to}
                >
                    {children}
                </Link>
            </MuiButton>
        )
    }
    else if(buttonType === 'iconButton')
    {
        return (
            <IconButton 
                onClick={onClick}
                disabled={disabled}
                size={size}
            >

                {/* ButtonIcon is a custom renamed component,AlarmIcon is set as default icon */}
                {
                    ButtonIcon 
                    ? 
                    <ButtonIcon/>
                    :
                    <AlarmIcon/>
                }
            </IconButton>
        ) 
    }
}

export default Button
