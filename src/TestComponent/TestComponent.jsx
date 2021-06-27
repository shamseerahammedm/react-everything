import { Switch } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const ToggleOn = ({
  on,
  children
}) => {
  return on ? children : null;
};

const ToggleOff = ({
  on,
  children
}) => {
  return on ? null : children;
};

const ToggleButton = ({
  on,
  onToggle,
  ...otherProps
}) => {
  return (
    <Switch 
      checked={on} 
      onChange={onToggle}
      {...otherProps} 
    />
  );
};

const Toggle = ({
  onToggle = () => null,
  children
}) => {

  const [ checked, setChecked ] = useState(false);
  const handleChange = (e) => {
    const { checked } = e.target;
    setChecked(checked);
  };

  const childrenDetails = React.Children.map(
    children,
    child => {
      return React.cloneElement(child, { 
        on : checked,
        onToggle : handleChange
      });
    }
  ); 

  return <div>{childrenDetails}</div>;
};

const Test = () => {
  const doIt = (value) => console.log(value);
  const [ data, setData ] = useState([]);
  const fetchData = () => {
    setTimeout(() =>{
      setData([{
        name :'shamseer',
        age : 25
      }]);
    }, 2000);
  };

  return (
    <Toggle onToggle={(value) => doIt(value)} > 

      <button onClick={fetchData}>On click</button>
      {data && data.map( item => <p>{item.name}</p>)}
      <ToggleOn> The button is on </ToggleOn>
      <ToggleButton> Button </ToggleButton>
      <ToggleOff> The button is off</ToggleOff> 
    </Toggle>
  );
};

export default Test;
