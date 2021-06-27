import { routePaths } from 'App';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Catalogue.scss';

const Catalogue = () => {
  const history = useHistory();
  return (
    <div className="catalogue container">
      <h2>Catalogue</h2>
      <div className="row">
        {
          routePaths.map((item, i) => {
           
            return (
              <>
                <div className="col-sm-12">
                  <h5>Section : {item.name}</h5>
                  <div className="row">
                    {
                      item.linksDetails.map(linkItem => {
                        return !linkItem.exclude && (
                          <div className="col-sm-3 cardWrapper" onClick={() => history.push(linkItem.path)}>
                            <div className="card mb-3" >
                              <div className="card-body">
                                <h5 className="card-title">{linkItem.linkName}</h5>
                                {linkItem.linkDescription && <p className="card-text">{linkItem.linkDescription}</p>}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                {(i !== routePaths.length - 1) && <hr/>}
              </>
            );

          })
          
        }
      </div>
    </div>
  );
};

export default Catalogue;
