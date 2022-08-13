import React, { useState, useEffect } from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import './Custom.scss';

const data = {
  'data': [
    {
      'item_id': 101,
      'item_name': 'Tea',
      'item_type': 'folder',
      'children': [
        {
          'item_id': 101201,
          'item_type': 'folder',
          'item_name': 'some',
          'children': [
            {
              'item_id': 101201301,
              'item_name': 'some',
              'item_type': 'file',
              'item_size': '2MB'
            },
            {
              'item_id': 456567,
              'item_type': 'file',
              'item_name': 'test document',
              'item_size': '5MB',
            }
          ]
        },
        {
          'item_id': 3456,
          'item_type': 'folder',
          'item_name': 'test folder new'
        },
        {
          'item_id': 456,
          'item_type': 'file',
          'item_name': 'test file ',
          'item_size': '5MB',
        }
      ]
    },
    {
      'item_id': 101201,
      'item_type': 'folder',
      'item_name': 'some document',
      'item_size': '2MB',
    },
    {
      'item_id': 67898,
      'item_type': 'file',
      'item_name': 'mr file',
      'item_size': '5MB',
    }
  ]
};

const CustomBrowser = () => {

  const [breadCrumb, setbreadCrumbs] = useState(
    [
      {
        currentPage: 'Some Drive',
        details: [
          ...data.data
        ]
      }
    ]
  );
  const [itemToSee, setItemToSee] = useState([]);
  
  useEffect(() => {
    setItemToSee(data.data);
  }, []);
  const [ itemHighLighter, setItemHighLighter ] = useState(null);

  const renderView = (data) => {
    return (
      <div>
        {
          data.map((dataItem, i) => {
            return (
              <div 
                className={`${itemHighLighter === dataItem.item_id ? 'hightLight' : null}`}
                id={dataItem.item_id}
                key={dataItem.item_id} 
                onClick={() => {
                  setItemHighLighter(dataItem.item_id);
                }}
                onDoubleClick={() => {
                  if (dataItem.item_type === 'folder' && dataItem.children.length > 0)
                  {
                    // sets breadcrumb data
                    setbreadCrumbs(prevState => {

                      return [...prevState, {
                        currentPage: dataItem.item_name,
                        details: dataItem.children
                      }];
                    });

                    // changes view when item is clicked
                    setItemToSee(dataItem.children);
                  }
                }}
              >
                {dataItem.item_type === 'file' ? <DescriptionIcon /> : <FolderIcon />} {dataItem.item_name}
                <pre>{JSON.stringify(breadCrumb, null, 2)}</pre>
              </div>
            );
          })
        }
      </div>
    );
  };

  return (
    <div>
      {
        <ul className="breadCrumb">
          {
            breadCrumb.map((crumbItem, i) => {
              return (
                <li 
                  key={i}
                  onClick={() => {
                    // remove breadcrumbs on right ride of currently clicked item
                    breadCrumb.splice(i + 1, breadCrumb.length - (i + 1));

                    // lets you see the related data of breadcrum
                    setItemToSee(crumbItem.details);
                  }}
                >
                  {crumbItem.currentPage}
                </li>
              );
            })
          }
        </ul>
      }
      {
        renderView(itemToSee)
      }
    </div>
  );
};

export default CustomBrowser;
