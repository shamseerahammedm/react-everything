import React, { useEffect } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { VariableSizeList as List, FixedSizeGrid as VGrid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { TextField } from '@material-ui/core';
import { isEmpty } from 'lodash';
const FormComponent = ({
  tableData
}) => {
  console.log('tableData', tableData);
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

  const onSubmit = (data) => console.log('submit data', data);

  console.log('formMethods',formMethods.formState);

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

const WindowedRowList = React.memo(({ index, style, data }) => {
  const { getValues, setValue, register, formState : { errors } } = useFormContext();
  
  const firstNameKey = `[${index}].first_name`;
  const { ref : firstNameRef, ...otherFirstNameValues } = register(firstNameKey, {
    validate : value => value === 'shamseer'
  });
  const isFirstNameError = !isEmpty(errors) && errors?.[index]?.first_name ? true : false;
  const firstNameErrorMsg = 'First name is required.';
  // const firstNameValue = getValues()[index].first_name || data[index].first_name;

  const companyKey = `[${index}].company`;
  // // const companyValue = getValues()[index].company || data[index].company;
  // console.log('otherProps',otherProps);
  // !isEmpty(errors) && console.log('errors',errors[index].first_name);
  // console.log('firstNameKey',firstNameKey);

  return (
    <>
      <div style={style}>

        {/* First name */}
        <TextField
          label="First Name" 
          variant="outlined"
          error={isFirstNameError}
          helperText={isFirstNameError && firstNameErrorMsg}
          size="small"
          {...otherFirstNameValues}
          inputRef={firstNameRef}
        />
          
        <input
          className="form-control"
          {...register(companyKey)}
        />
      </div>
    </>
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