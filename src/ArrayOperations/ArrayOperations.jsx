import React from 'react';

const ArrayOperations = () => {
  return (
    <div>
      filter by keys
      <hr />
      {
        (()=>{
          const apiResponse = {
            firstname: 'firstname',
            lastname: 'lastname',
            address : 'some address'
          };
          const initialValues = {
            firstname: '',
            lastname: ''
          };
          let filteredObject = {};
          const initialValuesKeyArray = Object.keys(initialValues);
          Object.keys(apiResponse).forEach( item => {
            if(initialValuesKeyArray.includes(item))
            {
              filteredObject[item] = apiResponse[item];
            }
          });
          console.log('filteredArray', filteredObject);
          return (
            <>
              apiResponse : <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
              initialValues : <pre>{JSON.stringify(initialValues, null, 2)}</pre>
              filteredArray : <pre>{JSON.stringify(filteredObject, null, 2)}</pre>
            </>
          );
        })()
      }
    </div>
  );
};

export default ArrayOperations;
