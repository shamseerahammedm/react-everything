import { routePaths } from 'App';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Catalogue.scss';
import { NavLink } from 'react-router-dom';
import {  Tooltip } from '@material-ui/core';

const defaultState = { index : null, open : false };

const Catalogue = () => {
  const itemRef = useRef();
  const copyToClipBoard = (item) => {
    const text = document.getElementById(item).innerText;
    console.log('text', text);
    console.log('item', item);
    const elem = document.createElement('textarea');
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
  };
  const [open, setOpen] = useState(defaultState);
  return (
    <div className="catalogue container">
      <h2>Catalogue</h2>
      <div className="row">
        {
          routePaths.map((item, i) => {
            return (
              <>
                <div className="col-sm-12" key={i}>
                  <h5>Section : {item.name}</h5>
                  <div className="row">
                    {
                      item.linksDetails.map((linkItem, index) => {
                        return !linkItem.exclude && (
                          <div className="col-sm-3 item" key={index}>
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
                                  onClose={()=>setOpen(defaultState)}
                                  open={index === open.index && open.open}
                                  disableFocusListener
                                  disableHoverListener
                                  disableTouchListener
                                  title="Copied to clipboard !"
                                  arrow
                                >
                                  <p className="clipboardItem"> 
                                    <span className="tag">Copy :  </span>
                                    <span className="tagValue" id={`item${index}`} onClick={() => {
                                      copyToClipBoard(`item${index}`);
                                      setOpen({ index : index, open : true });
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
