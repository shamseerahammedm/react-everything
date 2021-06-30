import { routePaths } from 'App';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Catalogue.scss';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

const Catalogue = () => {
  const history = useHistory();
  const itemRef = useRef();
  const copyToClipBoard = () => {
    const text = itemRef.current.innerText;
    const elem = document.createElement('textarea');
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
  };
  const [open, setOpen] = useState(false);
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
                        console.log('linkItem', linkItem);
                        console.log('linkItem', linkItem.component.name);
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
                                
                                <Tooltip
                                  PopperProps={{
                                    disablePortal: true,
                                  }}
                                  onClose={()=>setOpen(false)}
                                  open={open}
                                  disableFocusListener
                                  disableHoverListener
                                  disableTouchListener
                                  title="Copied to clipboard !"
                                >
                                  <p> Component name : 
                                    <span ref={itemRef} onClick={() => {
                                      copyToClipBoard();
                                      setOpen(true);
                                    }}>
                                      {linkItem.component.name}
                                    </span>
                                  </p>
                                </Tooltip>
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
