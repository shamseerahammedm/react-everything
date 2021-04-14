import React, { useState, useEffect } from 'react'

import './style.scss'
import Papa from 'papaparse';
// import Input from '../Common/Input/Input';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import FormComponent from './FormComponent'


const items = Array.from(Array(1000).keys()).map((i) => ({
  title: `List ${i}`,
  quantity: Math.floor(Math.random() * 10),
}))

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div style={style}>
    Item {rowIndex},{columnIndex}
  </div>
);




export const AutoResizerHookForms = () => {




  // csv related
  const [tableData, setTableData] = useState([]);
  const fileHandler = (e) => {
    const files = e.target.files;
    Papa.parse(files[0], {
      complete: function (parsedData) {
        const results = parsedData.data;
        results.splice(0, 1);
        // also remove last item from parsed result array coz last item comes as undefined by default 
        results.splice(results.length - 1, 1);
        console.log('results',results);
        const formattedResults = fileHeaderMapper(results, config);
        setTableData(formattedResults);
      }
    });
  };


  return (
    <div className="container">
      <h1>Using with React-window</h1>
      <p>Rather than register fields, we use getValues and setValue.</p>
      <input type="file" onChange={fileHandler} />
      {
        tableData.length > 0
        ?
        <FormComponent tableData={tableData}/>
        :
        <p>Pick File</p>
      }
    </div>
  )
}


export default AutoResizerHookForms





const config = {
  first_name: 0,
  last_name: 1,
  company: 2,
  email: 3,
  enableColdCall: 4,
  referred_person_email: 5,
  referred_date: 6,
  phone_number: 7,
};

const schema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
});


const fileHeaderMapper = (results, config) => {
  const fromattedData = results.map(item => {
    return {
      first_name: item[config.first_name],
      last_name: item[config.last_name],
      company: item[config.company],
      phone_number: item[config.phone_number],
      email: item[config.email],
      enable_cold_calling:
        (item[config.enableColdCall].toLowerCase() == 'yes') ? true
          : (item[config.enableColdCall].toLowerCase() == 'no') ? false
            : true,
      referred_person_email: item[config.referred_person_email],
    };
  });
  return fromattedData;
};




const dummyValues = [
  {
      "first_name": "Mehmet",
      "last_name": "Baran",
      "company": "1987",
      "phone_number": "1020",
      "email": "tes34st@test.com",
      "enable_cold_calling": true,
      "referred_person_email": "Referred Person Email"
  },
  {
      "first_name": "Zerya ",
      "last_name": "ahammed",
      "company": "2017",
      "phone_number": "88444444455",
      "email": "Testing@123.com",
      "enable_cold_calling": true,
      "referred_person_email": "Testing@123.com"
  },
  {
      "first_name": "Zerya ",
      "last_name": "ahammed",
      "company": "2017",
      "phone_number": "88444444455",
      "email": "Testing@123.com",
      "enable_cold_calling": false,
      "referred_person_email": "Testing@123.com"
  },
  {
      "first_name": "Zerya ",
      "last_name": "ahammed",
      "company": "2017",
      "phone_number": "88444444455",
      "email": "Testing@123.com",
      "enable_cold_calling": false,
      "referred_person_email": "Testing@123.com"
  },
  {
      "first_name": "Zerya ",
      "last_name": "ahammed",
      "company": "2017",
      "phone_number": "88444444455",
      "email": "Testing@123.com",
      "enable_cold_calling": false,
      "referred_person_email": "Testing@123.com"
  },
  {
      "first_name": "Zerya ",
      "last_name": "ahammed",
      "company": "2017",
      "phone_number": "",
      "email": "test@test.com",
      "enable_cold_calling": false,
      "referred_person_email": "Testing@123.com"
  },
  {
      "first_name": "Zerya ",
      "last_name": "ahammed",
      "company": "2017",
      "phone_number": "88444444455",
      "email": "Testing@123.com",
      "enable_cold_calling": false,
      "referred_person_email": "Testing@123.com"
  },
  {
      "first_name": "Zerya$$$",
      "last_name": "ahammed",
      "company": "2017",
      "phone_number": "88444444455",
      "email": "Testing@123.com",
      "enable_cold_calling": false,
      "referred_person_email": "Testing@123.com"
  },
  {
      "first_name": "Zerya$$$",
      "last_name": "ahammed",
      "company": "2017",
      "phone_number": "88444444455",
      "email": "Testing@123.com",
      "enable_cold_calling": false,
      "referred_person_email": "Testing@123.com"
  }
]


