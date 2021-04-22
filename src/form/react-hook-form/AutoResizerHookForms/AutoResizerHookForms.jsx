import React, { useState, useEffect } from 'react';

import './style.scss';
import Papa from 'papaparse';
// import Input from '../Common/Input/Input';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import FormComponent from './FormComponent';

export const AutoResizerHookForms = () => {

  // csv related
  // const formattedDummy = fileHeaderMapper(dummyValues, config);
  const [tableData, setTableData] = useState(dummyValues);
  const fileHandler = (e) => {
    const files = e.target.files;
    Papa.parse(files[0], {
      complete: function (parsedData) {
        const results = parsedData.data;
        results.splice(0, 1);
        
        // also remove last item from parsed result array coz last item comes as undefined by default 
        results.splice(results.length - 1, 1);
        const formattedResults = fileHeaderMapper(results, config);
        console.log('formattedResults',formattedResults);
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
  );
};

export default AutoResizerHookForms;

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
  const fromattedData = results.map((item, i) => {
    return {
      first_name: item[config.first_name],
      last_name: item[config.last_name],
      company: { value : item[config.company]+i , name  : item[config.company] },
      phone_number: item[config.phone_number],
      email: item[config.email],
      enable_cold_calling:
        (item[config.enableColdCall].toLowerCase() == 'yes') ? true
          : (item[config.enableColdCall].toLowerCase() == 'no') ? false
            : true,
      referred_person_email: item[config.referred_person_email],
      referred_date : new Date(item[config.referred_date]),
    };
  });
  return fromattedData;
};

const dummyValues = [
  {
    'first_name': 'Mehmet',
    'last_name': 'Baran',
    'company': {
      'value': '19870',
      'name': '1987'
    },
    'phone_number': '1020',
    'email': 'test@test.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Shamseer',
    'referred_date': '2020-06-10T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '20171',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '20172',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '20173',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '20174',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '20175',
      'name': '2017'
    },
    'phone_number': '',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '20176',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya$$$',
    'last_name': 'ahammed',
    'company': {
      'value': '20177',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Mehmet',
    'last_name': 'Baran',
    'company': {
      'value': '19878',
      'name': '1987'
    },
    'phone_number': '1020',
    'email': 'test@test.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Shamseer',
    'referred_date': '2020-06-10T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '20179',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201710',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201711',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201712',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201713',
      'name': '2017'
    },
    'phone_number': '',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201714',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya$$$',
    'last_name': 'ahammed',
    'company': {
      'value': '201715',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Mehmet',
    'last_name': 'Baran',
    'company': {
      'value': '198716',
      'name': '1987'
    },
    'phone_number': '1020',
    'email': 'test@test.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Shamseer',
    'referred_date': '2020-06-10T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201717',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201718',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201719',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201720',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201721',
      'name': '2017'
    },
    'phone_number': '',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201722',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya$$$',
    'last_name': 'ahammed',
    'company': {
      'value': '201723',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Mehmet',
    'last_name': 'Baran',
    'company': {
      'value': '198724',
      'name': '1987'
    },
    'phone_number': '1020',
    'email': 'test@test.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Shamseer',
    'referred_date': '2020-06-10T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201725',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201726',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201727',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201728',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201729',
      'name': '2017'
    },
    'phone_number': '',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201730',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya$$$',
    'last_name': 'ahammed',
    'company': {
      'value': '201731',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Mehmet',
    'last_name': 'Baran',
    'company': {
      'value': '198732',
      'name': '1987'
    },
    'phone_number': '1020',
    'email': 'test@test.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Shamseer',
    'referred_date': '2020-06-10T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201733',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201734',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201735',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201736',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201737',
      'name': '2017'
    },
    'phone_number': '',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201738',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya$$$',
    'last_name': 'ahammed',
    'company': {
      'value': '201739',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Mehmet',
    'last_name': 'Baran',
    'company': {
      'value': '198740',
      'name': '1987'
    },
    'phone_number': '1020',
    'email': 'test@test.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Shamseer',
    'referred_date': '2020-06-10T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201741',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201742',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201743',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201744',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201745',
      'name': '2017'
    },
    'phone_number': '',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya ',
    'last_name': 'ahammed',
    'company': {
      'value': '201746',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Zerya$$$',
    'last_name': 'ahammed',
    'company': {
      'value': '201747',
      'name': '2017'
    },
    'phone_number': '88444444455',
    'email': 'Testing@123.com',
    'enable_cold_calling': false,
    'referred_person_email': 'Tino',
    'referred_date': '2019-06-15T00:00:00.000Z'
  },
  {
    'first_name': 'Mehmet',
    'last_name': 'Baran',
    'company': {
      'value': '198748',
      'name': '1987'
    },
    'phone_number': '1020',
    'email': 'test@test.com',
    'enable_cold_calling': true,
    'referred_person_email': 'Shamseer',
    'referred_date': '2020-06-10T00:00:00.000Z'
  }
];
console.log('dummyValues',dummyValues);
const dummyDataRaw = [
  [
    'Mehmet',
    'Baran',
    '1987',
    'test@test.com',
    'Yes',
    'Referred Person Email',
    '2020-6-2',
    '1020'
  ],
  [
    'Zerya ',
    'ahammed',
    '2017',
    'Testing@123.com',
    'No',
    'Testing@123.com',
    '2019-06-15',
    '88444444455'
  ]
];

console.log('dummyDataRaw',dummyDataRaw);