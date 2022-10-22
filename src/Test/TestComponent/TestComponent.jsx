import React, { Component  } from 'react';
import ComponentTwo from './../TestComponent2/TestComponent2';

class TestComponent extends Component {
  render()
  {
    return (
      <div>
        <ComponentTwo
          ref={(instance) => {
            console.log('instance',instance);
          }}
        />
        <button 
          onClick={()=>{
            
          }}
        >
          on Click
        </button>
      </div>
    );
  }
}

export default TestComponent;
