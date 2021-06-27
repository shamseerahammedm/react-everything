import { routePaths } from 'App';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Catalogue.scss';

const Catalogue = () => {
  const history = useHistory();
  return (
    <div className="container catalogue" style={{ padding : '50px' }}>
      <h2>Catalogue</h2>
      <>
        {
          routePaths.map(item => {
            return item.linksDetails.map(linkItem => {
              return (
                <>
                  <h4 className="catalogueItem" onClick={()=> history.push(linkItem.path)}>{linkItem.linkName}</h4>
                  <p></p>
                </>
              );
            });
          })
        }
      </>
    </div>
  );
};

export default Catalogue;
