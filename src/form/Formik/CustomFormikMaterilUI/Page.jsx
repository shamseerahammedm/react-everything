import React from 'react';
import { useHistory } from 'react-router';
import CustomFormikMaterialUI from './CustomFormikMaterilUI';

const Page = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={()=>history.push('/create')}>Create</button>
      <button onClick={()=>history.push('/Edit')}>Edit</button>
    </div>
  );
};

export default Page;
