import React, { useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Grid, TextField } from '@material-ui/core';
import { isEmpty } from 'lodash';

// autocomplete
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import parse from 'autosuggest-highlight/parse';
// import match from 'autosuggest-highlight/match';
// import { CircularProgress, InputAdornment } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import CloseIcon from '@material-ui/icons/Close';
import SearchableSelect from '../InputComponents/AutoComplete/AutoComplete';
import DatePicker from '../InputComponents/DatePicker/DatePicker';

const FormComponent = ({
  tableData
}) => {
  const formMethods = useForm({ defaultValues: tableData });

  // useEffect(() => {
  //   tableData.forEach((_, idx) => {
  //     // const itemsInside = Object.keys(_);
  //     // itemsInside.forEach((item, idx2) => {
  //     //   formMethods.register(`[${idx}][${idx2}]`);
  //     // });
  //     // console.log('_',_);
  //     // console.log('itemsInside',itemsInside);
  //     formMethods.register(`[${idx}].first_name`, {
  //       validate: value => false
  //     });
  //     formMethods.register(`[${idx}].company`,{
  //       validate: value => false
  //     });
  //   });
  // }, [formMethods, tableData]);

  const onSubmit = (data) => console.log('############### submit data ########', data);

  return (

    <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
      <div className="wrapper">
        <FormProvider {...formMethods}>
          <AutoSizer>
            {({ height, width }) => (
              <>
                <List
                  height={height}
                  itemCount={tableData.length}
                  itemSize={() => 100}
                  width={width}
                  itemData={tableData}>
                  {WindowedRowList}
                </List>
                {/* <VGrid
                  columnCount={Object.keys(tableData[0]).length}
                  columnWidth={150}
                  height={height}
                  rowCount={tableData.length}
                  rowHeight={50}
                  width={width}
                  itemData={tableData}
                >
                  {WindowedRow}
                </VGrid> */}
              </>
            )}
          </AutoSizer>
        </FormProvider>
      </div>
      <button type="submit">Submit</button>
    </form>

  );
};

export default FormComponent;

const fetchResults = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataInJson = await data.json();
  console.log('dataInJson',dataInJson);
  const companyDetails = dataInJson.map(item => {
    return { value : item.id , name : item.company.name };
  });
  return companyDetails;
};

const WindowedRowList = React.memo(({ index, style, data }) => {
  console.log('data',data);
  const { register, formState : { errors }, control, getValues } = useFormContext();
  const [options, setOptions ] = useState([]);

  const firstNameKey = `[${index}].first_name`;
  const { ref : firstNameRef, ...otherFirstNameValues } = register(firstNameKey, {
    // validate : value => value === 'shamseer'
  });
  const isFirstNameError = !isEmpty(errors) && errors?.[index]?.first_name ? true : false;
  const firstNameErrorMsg = 'First name is required.';
  
  const lastNameKey = `[${index}].last_name`;
  const { ref : lastNameRef, ...otherLastNameValues } = register(lastNameKey, {
    validate : value => value === 'shamseer'
  });
  const isLastNameError = !isEmpty(errors) && errors?.[index]?.last_name ? true : false;
  const lastNameErrorMsg = 'Last name is required.';

  const companyKey = `[${index}].company`;
  const defaultCompanyValue = getValues()[index].company || data[index].company;

  const dateKey = `[${index}].referred_date`;
  const defaultDateValue = getValues()[index].referred_date || data[index].referred_date;

  return (
    <div>
      <Grid style={style} container>

        <Grid item>
          {/* Last name */}
          <TextField
            label="Last Name"
            variant="outlined"
            error={isLastNameError}
            helperText={isLastNameError && lastNameErrorMsg}
            size="small"
            {...otherLastNameValues}
            inputRef={lastNameRef}
          />
        </Grid>

        {/* <input
          className="form-control"
          {...register(companyKey)}
        /> */}
      </Grid>
    </div>
  );
});

//In a bigger project, this would be a seperate component.
const WindowedRow = React.memo(({ columnIndex , rowIndex, style, data }) => {
  const { getValues, setValue, errors } = useFormContext();
  // console.log('data',data);
  console.log('columnIndex',columnIndex);
  console.log('rowIndex',rowIndex);
  const qtyKey = `[${rowIndex}].[${columnIndex}]`;
  // const qty = getValues()[rowIndex][columnIndex] || data[rowIndex][columnIndex];
  console.log('getValues()',getValues());
  console.log('qtyKey',qtyKey);
  return (
    <>
      <div style={style}>
        <input
          defaultValue={123}
          onChange={(e) => {
            setValue(qtyKey, e.target.value);
          }}
          className="form-control"
        />
        {errors && errors[rowIndex] && <p>Some error </p>}
      </div>
    </>
  );
});
