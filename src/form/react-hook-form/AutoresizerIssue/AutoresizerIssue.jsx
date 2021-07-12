import React, { useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import './autoresizerissue.scss';
import { Grid } from '@material-ui/core';
import { isObject } from 'lodash';
import Input from '../CorrectInputComponents/Input/Input';
import moment from 'moment';
import * as Yup from 'yup';
import { dummyValues } from './constants';
import { yupResolver } from '@hookform/resolvers/yup';

const dummyData = new Array(2).fill().map( (item, i) => {
  return {
    'first_name': 'Jacob'+i,
    'last_name': 'Kingston'+i,
    'company': 'JJC'+i,
    'phone_number': '7894561293'+i,
    'email': 'jacob_kingston@outlook.com'+i,
    'enable_cold_calling': true,
    'referred_person_email': `abcd${i}@abcd.com`,
    'referred_date': null,
    'tableData': {
      'id': i
    }
  };
});

let dynamicSchemaObject = {};
dummyValues.forEach( (item, i) => {
  const schemaRow = {
    [`${i}.first_name`] : Yup.string()
      .required('First name is required')
      .max(100, 'Maximum characters upto 100.')
      .matches(/^[A-Za-z ]*$/, 'First name should not contain special characters or numbers')
  };
  dynamicSchemaObject = {
    ...dynamicSchemaObject,
    ...schemaRow
  };
});

const dynamicSchema=  Yup.object().shape(dynamicSchemaObject);

//In a bigger project, this would be a seperate component.
const WindowedRow = React.memo(({ index, style, data }) => {
  const {
    formState: { errors },
    control 
  } = useFormContext();
  const firstNameFieldName = `${index}.first_name`;
  const lastNameFieldName = `${index}.last_name`;
  console.log('firstNameFieldName', firstNameFieldName);
  console.log('lastNameFieldName', lastNameFieldName);
  console.log('data', data);
  return (
    <div style={{
      ...style,
      display : 'flex',
    }} className="xor">
      {/* <p><label>{data[index].title}</label></p> */}
      <Input
        name={firstNameFieldName}
        label="First Name"
        control={control}
        defaultValue={{}}
      />

      <Input
        name={lastNameFieldName}
        label="Last Name"
        control={control}
      />
    </div>
  );
});

export const AutoresizerIssue = () => {
  const [ values, setValues] = useState(null);
  console.log('dynamicSchema', dynamicSchemaObject);
  const formMethods = useForm({
    defaultValues: dummyData,
    mode : 'onBlur',
    // resolver: yupResolver(dynamicSchema) 
  });

  const onSubmit = async (data) => {
    setValues(data);
    console.log('submit_data', data);
    console.log('dummyData', dummyData);

    const isValidPromises = await Promise.all(dummyData.map((newDataItem, i) => {
      const schemaRow = {
        [`${i}.first_name`] : newDataItem.first_name
      };
      console.log('schemaRow', schemaRow);
      console.log('dynamicSchema.isValid(newDataItem)', dynamicSchema.isValidSync(newDataItem));
      return dynamicSchema.isValid(newDataItem);
    }));
    const areAllChangesValid = isValidPromises.every(Boolean);

    console.log('isValidPromises', isValidPromises);
    console.log('areAllChangesValid', areAllChangesValid);

    const details = [];
    for( const property in data)
    {
      // console.log('property', property);
      // console.log('data[property].quantity', data[property].quantity);
      details.push(property);
      if(data[property].quantity == 5 || data[property].quantity == 4)
      {
        const key = isObject(property) ? '' : `${property}.quantity`;
        // console.log('property', `${property}.quantity`);
        // console.log('key', key);
        formMethods.setError(key, {
          message : 'Some error occured'
        });
      }
    }
    // console.log('details', details);
    // console.log('data', data);
  };

  return (
    <div className="container autoresizer">
      <h1>Using with React-window</h1>
      <p>Rather than register fields, we use getValues and setValue.</p>

      <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="wrapper">
          <Grid container>
            <Grid item xs={12} className="border" style={{ height : '100vh' }}>
              <FormProvider {...formMethods}>
                <AutoSizer>
                  {({ height, width, ...others }) => {
                    // console.log('width', width);
                    // console.log('height', height);
                    return (
                      <List
                        height={height}
                        itemCount={dummyData.length}
                        itemSize={() => 100}
                        width={width}
                        itemData={dummyData}
                      >
                        {WindowedRow}
                      </List>
                    );
                  }}
                </AutoSizer>
              </FormProvider>
            </Grid>
            <Grid item xs={6}>
              <div className="div" style={{ overflowY : 'auto' }}>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </div>
            </Grid>
          </Grid>
        </div>
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(dummyData, null, 2)}</pre>
    </div>
  );
};

export default AutoresizerIssue;

const isValidDate = dateObject => new Date(dateObject).toString() !== 'Invalid Date';

/* 
  Stopped at :

  validation bluriil work cheyunundayirunilla, athe correct akeetu, line 110 pole error loopilnu set akanam ( allel schema vazhe loopil set akanam )
*/