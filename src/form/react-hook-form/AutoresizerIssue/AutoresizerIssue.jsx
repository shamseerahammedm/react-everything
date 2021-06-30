import React, { useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import './autoresizerissue.scss';
import { Grid } from '@material-ui/core';

const items = Array.from(Array(1000).keys()).map((i) => ({
  title: `List ${i}`,
  quantity: Math.floor(Math.random() * 10),
}));

//In a bigger project, this would be a seperate component.
const WindowedRow = React.memo(({ index, style, data }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const qtyKey = `${index}.quantity`;
  return (
    <div style={style}>
      <p><label>{data[index].title}</label></p>
      <input
        {...register(qtyKey, {
          validate: (value) => false, // simply returning false for shiowing error
        })}
      />
      {errors && errors?.[index]?.quantity && (
        <p className="errorText" style={{ color : 'red', marginTop : 0 }}>Some error </p>
      )}
    </div>
  );
});

export const AutoresizerIssue = () => {
  const [ values, setValues] = useState(null);
  const onSubmit = (data) => {
    setValues(data);
    console.log(data);
  };

  const formMethods = useForm({
    defaultValues: items,
    mode : 'all'
  });

  return (
    <div className="container autoresizer">
      <h1>Using with React-window</h1>
      <p>Rather than register fields, we use getValues and setValue.</p>

      <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="wrapper">
          
          <Grid container>
            <Grid item xs={6}>
              <FormProvider {...formMethods}>
                <AutoSizer>
                  {({ height, width }) => {
                    console.log('width', width);
                    console.log('height', height);
                    return (
                      <List
                        height={height}
                        itemCount={items.length}
                        itemSize={() => 100}
                        width={width}
                        itemData={items}
                      >
                        {WindowedRow}
                      </List>
                    );
                  }}
                </AutoSizer>
              </FormProvider>
            </Grid>
            <Grid item xs={6}>
              <div className="div" style={{ height : '80vh', overflowY : 'auto' }}>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </div>
            </Grid>
          </Grid>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AutoresizerIssue;

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