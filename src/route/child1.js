import React from 'react';
import { useHistory } from 'react-router-dom';

const ChildOne = () => {
  let history = useHistory();
  return (
    <div>
           ChildOne <br/>
      <button onClick={()=> history.push('childtwo') }> Do it with out parameter </button><br/>
      <button onClick={()=> history.push('childtwo/4') }> Do it with parameter </button>
    </div>
  );
};

export default ChildOne;
