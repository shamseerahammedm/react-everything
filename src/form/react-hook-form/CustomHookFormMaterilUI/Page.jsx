import React from 'react';
import { useHistory } from 'react-router';

const CustomHookFormMaterilUIPage = () => {
  const history = useHistory();
  return (
    <div style={{ padding : '50px'}}>
      <h3>Full react hook form example with material ui</h3>
      <button onClick={()=>history.push('/react-hook-from-custom-material-ui-create')}>Create</button>
      <button onClick={()=>history.push('/react-hook-from-custom-material-ui-edit/1')}>Edit</button>
    </div>
  );
};

export default CustomHookFormMaterilUIPage;
