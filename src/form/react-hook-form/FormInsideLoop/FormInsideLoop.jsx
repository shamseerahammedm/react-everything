import React from 'react';
import HookFormBackEndValidation from '../HookFormBackEndValidation/HookFormBackEndValidation';

const HookFormInsideLoop = () => {
  return (
    <div className="CustomFormikMaterialUI" >
      Form inside loop
      {
        new Array(3).fill().map( item => {
          return <HookFormBackEndValidation/>;
        })
      }
    </div>
  );
};

export default HookFormInsideLoop;
