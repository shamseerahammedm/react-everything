import { Switch } from '@material-ui/core';
import React, { useState } from 'react';

const Test = () => {
  const [ checked, setChecked ] = useState(false);
  const handleChange = () => setChecked(prevState => !prevState);
  return (
    <div>
      <Switch checked={checked} onChange={handleChange}  />
    </div>
  );
};

export default Test;
