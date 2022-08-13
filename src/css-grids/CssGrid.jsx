import React from 'react';
import './CssGrid.scss';

const CssGrid = () => {
  return (
    <div className="cssGrid">
            
      {
        new Array(6).fill().map( (item, i) =>{
          return <div className="boxItem">{i+1}</div>;
        })
      }

    </div>
  );
};

export default CssGrid;
