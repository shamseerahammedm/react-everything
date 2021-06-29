import { routePaths } from 'App';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Catalogue.scss';
import { NavLink } from 'react-router-dom';

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
                          <div className="col-sm-3 item" >
                            <div className="card mb-3" >
                              <div className="itemWrapper">
                                <NavLink 
                                  className="card-title linkItem" 
                                  to={linkItem.path} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                > 
                                  {linkItem.linkName} 
                                </NavLink>
                                {linkItem.linkDescription && <p className="card-text">{linkItem.linkDescription}</p>}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                {(i !== routePaths.length - 1) && <div className="divider"/>}
              </>
            );

          })
          
        }
      </div>
    </div>
  );
};

export default Catalogue;
