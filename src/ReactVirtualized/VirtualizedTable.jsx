import React, { useState, useMemo } from 'react';
import { Grid } from 'react-virtualized';
import * as yup  from 'yup';
import { TextField } from '@material-ui/core';

const rowCount = 2000;
const colCount = 5;
const cellHeight = 100;
const cellWidth = 250;
const scrollbarWidth = 15;

//const headers = new Array(colCount).fill(0).map((val, idx) => `H${idx}`)
const headers = [
  'Name',
  'Product',
  'Schema',
  'Created By',
  'Created Date / Time' /* ... */
];

const validationSchema = yup.object({
  Name: yup.number().required(),
  Product : yup.number().required(),
});

const dummy = {
  'Name': 'R19 C0',
  'Product': 'Product R19 C0',
  'Schema': ' SchemaR19 C0',
  'Created By': 'date R19 C0',
  'Created Date / Time': 'time R19 C0'
};

// console.log('dummy validation',validationSchema.isValidSync(dummy));

const makeRow = row => new Array(colCount).fill(0).map((val, idx) => {
  return {
    Name : `Name R${row} C${idx}`,
    Product : `Product R${row} C${idx}`,
    Schema : ` SchemaR${row} C${idx}`,
    'Created By' : `date R${row} C${idx}`,
    'Created Date / Time' : `time R${row} C${idx}`,
  };
});

const errorRow = row => new Array(colCount).fill(0).map((val, idx) => {
  return {
    Name : `Name error R${row} C${idx}`,
    Schema : `Schema error R${row} C${idx}`,
    Product : `Created by error R${row} C${idx}`,
    'Created Date / Time' : `Product error R${row} C${idx}`,
    'Created By' : `Schema error R${row} C${idx}`,
  };
});

const data = new Array(rowCount).fill(0).map((val, idx) => makeRow(idx));
const errorData = new Array(rowCount).fill(0).map((val, idx) => errorRow(idx));

const HeaderCell = ({ columnIndex, key, style, ...otherProps }) => {
  return  (
    <div className="grid-cell" key={key} style={{
      ...style,
      margin : '40px'
    }}>
      {headers[columnIndex]}
    </div>
  );
};

const CellComponent = ({ columnIndex, key, rowIndex, style , ...otherProps }) => {
  console.log('rendering');
  const { parent : { props : { 
    rowData,
    errors,
    setRows
  } } } = otherProps;
  const header = headers[columnIndex];
  const errorItem = errors[rowIndex];
  const error =  errorItem?.[columnIndex]?.[header];
  const value  = rowData[rowIndex][columnIndex][header];
  return (
    <div className="grid-cell" key={key} style={style}>
      <TextField
        label="Title"
        variant="outlined"
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          setRows(prevState => {
            const data = [...prevState];
            data[rowIndex][columnIndex][header] = value;
            return data;
          });
        }}
        error={!!error}
        helperText={error}
      />
    </div>
  );
};

const Cell = React.memo(CellComponent, () => {
  return false;
});

const Table = () => {
  const [ rows, setRows] = useState(data);
  const [ errors, setErrors] = useState([]);
  const submitHandler = async () => {
   
    // const errorData = [];
    // rows.forEach( async (row, index) => {
    //   let errorArray = [];
    //   const details = row.map( async (cell) => {
    //     console.log('cell',cell);
    //     try {
    //       await validationSchema.validate(cell, {
    //         abortEarly : false
    //       }); 
    //     } catch (err) {
    //       // err.name; // => 'ValidationError'
    //       // err.errors; // => ['Deve ser maior que 18']
    //       console.log('err',JSON.parse(JSON.stringify(err)));
    //       // console.log('err.errors',err.errors);
    //       // console.log('err.name',err.name);
    //       // console.log('err.inner',err.inner);
    //       errorArray.push(err.inner);
    //       console.log('errorArray',errorArray);
    //     }
    //     errorData.push(errorArray);
    //   });
    //   await Promise.all(details); 
    //   console.log('data',data);
    //   console.log('errors',errors);
    // });

    // const booleanArray = await Promise.all(isAllItemsValid);

    console.log('errors',errorData);
    setErrors(errorData);
    if(errors.length)
    {
    }
    else
    {

    }
  };
  return (
    <div>
      <Grid
        cellRenderer={HeaderCell}
        columnCount={colCount}
        columnHeight={rowCount * cellHeight}
        columnWidth={cellWidth}
        height={cellHeight}
        rowCount={1}
        rowHeight={cellHeight}
        rowWidth={colCount * cellWidth}
        width={colCount * cellWidth}
        rowData={rows}
      />
      <Grid
        cellRenderer={CellComponent}
        columnCount={colCount}
        columnHeight={rowCount * cellHeight}
        columnWidth={cellWidth}
        height={550}
        rowCount={rowCount}
        rowHeight={cellHeight}
        rowWidth={colCount * cellWidth}
        width={colCount * cellWidth + scrollbarWidth}
        rowData={rows}
        errors={errors}
        setRows={setRows}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};
export default Table;
