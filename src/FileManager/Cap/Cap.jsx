import React, { useState, useEffect } from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import './Cap.scss';

const data = {
    "status_code": 200,
    "status": true,
    "message": "Successfully fetched attachment list",
    "data": [
        {
            "item_id": 101,
            "item_name": "Tea",
            "item_type": "folder",
            "children": [
                {
                    "item_id": 101201,
                    "item_type": "folder",
                    "item_name": "LOA Folder",
                    "children": [
                        {
                            "item_id": 101201301,
                            "item_name": "LOA – Sidharth Harish",
                            "item_type": "file",
                            "item_size": "2MB"
                        },
                        {
                            "item_id": 456567,
                            "item_type": "file",
                            "item_name": "test document",
                            "item_size": "5MB",
                        }
                    ]
                },
                {
                    "item_id": 3456,
                    "item_type": "folder",
                    "item_name": "test folder new",
                    "children": [
                        {
                            "item_id": 999,
                            "item_name": "LOA – Sidharth Harish",
                            "item_type": "folder",
                            "item_size": "2MB",
                            "children": [
                                {
                                    "item_id": 5544,
                                    "item_name": "LOA – Sidharth Harish",
                                    "item_type": "file",
                                    "item_size": "2MB"
                                },
                                {
                                    "item_id": 1234,
                                    "item_type": "file",
                                    "item_name": "test documentasdf",
                                    "item_size": "5MB",
                                }
                            ]
                        },
                        {
                            "item_id": 7890,
                            "item_type": "file",
                            "item_name": "test documentasdf",
                            "item_size": "5MB",
                        }
                    ]
                },
                {
                    "item_id": 456,
                    "item_type": "file",
                    "item_name": "test file ",
                    "item_size": "5MB",
                }
            ]
        },
        {
            "item_id": 101201,
            "item_type": "folder",
            "item_name": "financial_doc",
            "item_size": "2MB",
            "children": [
                {
                    "item_id": 56444,
                    "item_name": "LOA – Sidharth Harish",
                    "item_type": "file",
                    "item_size": "2MB"
                },
                {
                    "item_id": 89234,
                    "item_type": "file",
                    "item_name": "test documentasdf",
                    "item_size": "5MB",
                }
            ]
        },
        {
            "item_id": 67898,
            "item_type": "file",
            "item_name": "mr file",
            "item_size": "5MB",
        }
    ]
};





const Cap = () => {

    const [breadCrumb, setbreadCrumbs] = useState(
        [
            {
                currentPage: 'CAP Drive',
                details: [
                    ...data.data
                ]
            }
        ]
    );
    const [itemToSee, setItemToSee] = useState([]);
  
    useEffect(() => {
        setItemToSee(data.data)
    }, [])

    useEffect(() => {
        console.log(breadCrumb);
    }, [breadCrumb])
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
                                            }]
                                        })

                                        // changes view when item is clicked
                                        setItemToSee(dataItem.children)
                                    }
                                }}
                            >
                                {dataItem.item_type === 'file' ? <DescriptionIcon /> : <FolderIcon />} {dataItem.item_name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }


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
                                        setItemToSee(crumbItem.details)
                                    }}
                                >
                                    {crumbItem.currentPage}
                                </li>
                            )
                        })
                    }
                </ul>
            }
            {
                renderView(itemToSee)
            }
        </div>
    )
}

export default Cap;
