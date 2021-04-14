import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './style.scss';
import { useForm, useFieldArray } from 'react-hook-form';
import { isEmpty } from 'lodash';

const config = {
  first_name: 0,
  last_name: 1,
  company: 2,
  email: 3,
  enableColdCall: 4,
  // referred_person_first_name: 5,
  // referred_person_last_name: 6,
  // referred_person_mobile: 8,
  referred_person_email: 5,
  referred_date: 6,
  phone_number: 7,
};

const fileHeaderMapper = (results, config) => {

  const fromattedData = results.map(item => {
    return {
      first_name: item[config.first_name],
      last_name: item[config.last_name],
      company: item[config.company],
      phone_number: item[config.phone_number],
      email: item[config.email],
      // if enable_cold_calling is something else make true by default
      enable_cold_calling:
                (item[config.enableColdCall].toLowerCase() == 'yes') ? true
                  : (item[config.enableColdCall].toLowerCase() == 'no') ? false
                    : true,
      // referred_person_first_name: item[config.referred_person_first_name],
      // referred_person_last_name: item[config.referred_person_last_name],
      // referred_person_mobile: item[config.referred_person_mobile],
      referred_person_email: item[config.referred_person_email],
      referred_date: new Date(),
    };
  });
  return fromattedData;
};
const FormArray2 = () => {
  const [readedData, setReadedData] = useState([]);

  const [files, setFiles] = useState(null);
  useEffect(() => {
    if (files)
    {
      Papa.parse(files, {
        complete: function (parsedData) {
          const data = parsedData.data;
          data.splice(0, 1);
          data.splice(data.length - 1, 1);
          const newData = fileHeaderMapper(data, config);
          setReadedData(newData);
        }
      });
    }
  }, [files]);

  return (
    <>
      <input type="file" onChange={(e) => setFiles(e.target.files[0])} />
      {
        !isEmpty(readedData)
                &&
                <Form
                  data={readedData}
                />
      }
    </>
  );
};

export default FormArray2;

const Form = ({ data }) => {

  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
    formState
  } = useForm({
    defaultValues: {
      readData: data
    }
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: 'readData',
    control
  });

  return (
    <form>

      {console.log('fields', fields)}

      {
        !isEmpty(fields)
                &&
                <div className="container">
                  <table>
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Cold Call</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Date</th>
                        <th>RP.Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        fields.map( item => {
                          return (
                            <tr key={item.id}>
                              {(()=>{
                                let itemArray = []
;                                               for( let fieldItem in item)
                                {
                                  console.log('fieldItem',fieldItem);
                                  console.log(`fieldItem ${fieldItem} -- `,item[fieldItem]);
                                  itemArray.push( <td> {item[fieldItem]}</td>);
                                }
                                return itemArray;
                              })()}
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </table>
                </div>
      }

    </form>
  );
};