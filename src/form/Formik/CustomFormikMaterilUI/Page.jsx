import React from 'react';
import { useHistory } from 'react-router';
import CustomFormikMaterialUI from './CustomFormikMaterilUI';

const CustomFormikMaterilUIPage = () => {
  const history = useHistory();
  return (
    <div style={{ padding : '50px'}}>
      <h3>Full formik example with material ui</h3>
      <button onClick={()=>history.push('/formik-custom-material-ui-create')}>Create</button>
      <button onClick={()=>history.push('/formik-custom-material-ui-edit/1')}>Edit</button>
    </div>
  );
};

export default CustomFormikMaterilUIPage;
