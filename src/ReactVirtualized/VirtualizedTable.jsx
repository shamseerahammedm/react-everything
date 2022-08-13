
import React, { useState, useRef } from 'react';
import { default as styled } from 'styled-components';
import { TextField, LinearProgress } from '@material-ui/core';
import * as yup from 'yup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import {
  AutoSizer,
  Column,
  Table,
  TableCellRenderer,
  TableHeaderProps
} from 'react-virtualized';

import TableCell from '@material-ui/core/TableCell';

// import React, { useState, useMemo } from 'react';
// import { Grid } from 'react-virtualized';
// import * as yup  from 'yup';
// import { TextField } from '@material-ui/core';
// import { TextField } from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core/InputAdornment';
// import { LinearProgress } from '@material-ui/core/LinearProgress';

const TableStyles = styled.div`
  .ReactVirtualized__Table__headerRow {
    display: flex;
    align-items: center;
  }

  .ReactVirtualized__Table__row {
    display: flex;
    align-items: center;
  }

  .ReactVirtualized__Table__rowColumn {
    flex: 1;
  }
`;

const getError = ({ cellData, columnData,rowIndex,rowData, dataKey, ...otherProps }) => {
  const {
    errors
  } = columnData;

  const path = `[${rowIndex}].${dataKey}`;
  const error = errors[path];
  const value = rowData[dataKey];
  return error;

  // switch(dataKey)
  // {
  // case 'email':
  // {
  //   const isValid = yup.reach(validationSchema, dataKey).isValidSync(value);
  //   const errorMessage = isValid ? '' : 'Email is not valid';
  //   return errorMessage || error;
  // }
  // case 'id':
  //   {
  //     const isValid = yup.reach(validationSchema, dataKey).isValidSync(value);
  //     const errorMessage = isValid ? '' : 'ID must be true, compo level';
  //     return errorMessage || error;
  //   }
    
  //   break;
  // default: {
  //   return null;
  // }
  // }
};

const getField = (props) => {
  const { cellData, columnData,rowIndex,rowData, dataKey } = props;
  const { setRows, setErrors, errors, isSubmitted } = columnData;
  const key = `[${rowIndex}].${dataKey}`;
  const error = errors[key];
  switch(dataKey)
  {
  case 'email':
  {
    return (
      <TextField
        label="Title"
        variant="outlined"
        value={cellData}
        onChange={(e) => {
          const { value } = e.target;
          if(yup.reach(validationSchema, dataKey).isValidSync(value))
          {
            delete errors[key];
            setErrors(errors);
          }
          else
          {
            setErrors({
              ...errors,
              [key] : 'Email is not valid'
            });
          }
          setRows(prevState => {
            const data = [...prevState];
            const newData = {
              ...rowData,
              [dataKey] : value
            };
            data.splice(rowIndex, 1, newData);
            return data;
          });
        }}
        error={!!error}
        helperText={error}
      /> 
    );
  }

  case 'id':
  {
    return (
      <FormControl required error={!!error} component="fieldset" >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={cellData}
                onChange={(event)=>{
                  const { checked } = event.target;
                  if(yup.reach(validationSchema, dataKey).isValidSync(checked))
                  {
                    delete errors[key];
                    setErrors(errors);
                  }
                  else
                  {
                    setErrors({
                      ...errors,
                      [key] : 'Must be true'
                    });
                  }

                  setRows(prevState => {
                    const data = [...prevState];
                    const newData = {
                      ...rowData,
                      [dataKey] : checked
                    };
                    data.splice(rowIndex, 1, newData);
                    return data;
                  });
                }}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
          />
        </FormGroup>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
      
    );
  }

  default : 
  {
    return <p>Test</p>;
  }
  }
};

const cellRenderer = (props) => {

  return (
    <TableCell variant="body" component="div" style={{ height: '60px', marginTop : '350px', marginBottom : '50px' }}>
      {getField(props)}
    </TableCell>
  );
};

const headerRenderer = ({
  label
}) => {
  return (
    <TableCell component="div" variant="head" style={{ height: 40 }}>
      <span>{label}</span>
    </TableCell>
  );
};

const data = new Array(1000).fill(0).map((item, index ) => {
  return {
    id : index % 2 === 0 ? true : false ,
    name : `Name ${index}`,
    email : `email${index}@email.com`,
    dob : `${index}-06-2022`
  };
});

const validationSchema = yup.array(
  yup.object({
    id: yup.boolean().required().test('True Validation',
      'Must be true',
      function (value) {
        return value ? true : false; 
      }),
    name: yup.boolean().required(),
    email: yup.string().email('Invalid email format').required('Required')
  })
);

// const test = async () => {
//   const data  = await yup.reach(validationSchema, 'id').isValid(true);
//   console.log('data',data);
// };
// test();

const columns = [
  {
    width: 150,
    label: 'Id',
    dataKey: 'id'
  },
  {
    width: 250,
    label: 'Name',
    dataKey: 'name'
  },
  {
    width: 250,
    label: 'Email',
    dataKey: 'email'
  },
  {
    width: 250,
    label: 'DOB',
    dataKey: 'dob'
  },
];

const cellNameFinder = (item) =>{
  const newPath = item.path.toLowerCase();
  if(newPath.includes('name'))
  {
    return {
      cellName : 'Name',
      errorMessage : 'Name must be of string'
    };
  }
  else if(newPath.includes('id'))
  {
    return {
      cellName : 'id',
      errorMessage : 'Id must be true'
    };
  }
  else if(newPath.includes('email'))
  {
    return {
      cellName : 'email',
      errorMessage : 'Email is not valid'
    };
  }
};

const VirtualizedTable = ({ list }) => {

  const isSubmitted = useRef(false);
  const [ rows, setRows] = useState(data);
  const [ errors, setErrors] = useState([]);
  const [ loading, setLoading] = useState(false);

  const submitHandler = async () => {
    try
    {
      await validationSchema.validate(rows,{
        abortEarly : false
      });
    }
    catch(err)
    {
      // console.log('err',err);
      // console.log('err',JSON.parse(JSON.stringify(err)));
      // console.log('inner',err.inner);
      const inner = err.inner.reduce((acc, item) => {
        const errorMessage = cellNameFinder(item).errorMessage;
        return {
          ...acc,
          [item.path] : errorMessage
        };
      },{});
      setErrors(inner);
    }
    setLoading(false);
  };

  return (
    <div>
      <button 
        onClick={() => {
          setLoading(true);
          setTimeout(()=>{
            isSubmitted.current = true;
            submitHandler();
          },500);
        }}
      > 
        Submit 
      </button>
      {/* 
        <pre>{JSON.stringify(loading, null, 2)}</pre>
        <pre>{JSON.stringify(isSubmitted, null, 2)}</pre> 
      */}
      {loading && <LinearProgress />}
      <TableStyles>

        <AutoSizer defaultHeight={1000} style={{ height: '100%' }}>
          {({ height, width }) => (
            <Table
              headerHeight={40}
              width={width}
              height={height}
              rowHeight={100}
              rowCount={rows.length}
              rowGetter={({ index }) => rows[index]}
            >
              {columns.map(({ dataKey, ...other }, index) => {
                return (
                  <Column
                    key={dataKey}
                    headerRenderer={(headerProps) =>
                      headerRenderer({
                        ...headerProps,
                        columnIndex: index
                      })
                    }
                    cellRenderer={cellRenderer}
                    dataKey={dataKey}
                    columnData={{
                      setRows : setRows,
                      setErrors : setErrors,
                      rows : rows,
                      errors : errors,
                      isSubmitted : isSubmitted
                    }}
                    {...other}
                  />
                );
              })}
            </Table>
          )}
        </AutoSizer>
      </TableStyles>
    </div>
  );
};

export default VirtualizedTable;

// const rowCount = 2000;
// const colCount = 5;
// const cellHeight = 100;
// const cellWidth = 250;
// const scrollbarWidth = 15;

// //const headers = new Array(colCount).fill(0).map((val, idx) => `H${idx}`)
// const headers = [
//   'Name',
//   'Product',
//   'Schema',
//   'Created By',
//   'Created Date / Time' /* ... */
// ];

// const validationSchema = yup.object({
//   Name: yup.number().required(),
//   Product : yup.number().required(),
// });

// const dummy = {
//   'Name': 'R19 C0',
//   'Product': 'Product R19 C0',
//   'Schema': ' SchemaR19 C0',
//   'Created By': 'date R19 C0',
//   'Created Date / Time': 'time R19 C0'
// };

// // console.log('dummy validation',validationSchema.isValidSync(dummy));

// const makeRow = row => new Array(colCount).fill(0).map((val, idx) => {
//   return {
//     Name : `Name R${row} C${idx}`,
//     Product : `Product R${row} C${idx}`,
//     Schema : ` SchemaR${row} C${idx}`,
//     'Created By' : `date R${row} C${idx}`,
//     'Created Date / Time' : `time R${row} C${idx}`,
//   };
// });

// const errorRow = row => new Array(colCount).fill(0).map((val, idx) => {
//   return {
//     Name : `Name error R${row} C${idx}`,
//     Schema : `Schema error R${row} C${idx}`,
//     Product : `Created by error R${row} C${idx}`,
//     'Created Date / Time' : `Product error R${row} C${idx}`,
//     'Created By' : `Schema error R${row} C${idx}`,
//   };
// });

// const data = new Array(rowCount).fill(0).map((val, idx) => makeRow(idx));
// const errorData = new Array(rowCount).fill(0).map((val, idx) => errorRow(idx));

// const HeaderCell = ({ columnIndex, key, style, ...otherProps }) => {
//   return  (
//     <div className="grid-cell" key={key} style={{
//       ...style,
//       margin : '40px'
//     }}>
//       {headers[columnIndex]}
//     </div>
//   );
// };

// const CellComponent = ({ columnIndex, key, rowIndex, style , ...otherProps }) => {
//   console.log('rendering');
//   const { parent : { props : { 
//     rowData,
//     errors,
//     setRows
//   } } } = otherProps;
//   const header = headers[columnIndex];
//   const errorItem = errors[rowIndex];
//   const error =  errorItem?.[columnIndex]?.[header];
//   const value  = rowData[rowIndex][columnIndex][header];
//   return (
//     <div className="grid-cell" key={key} style={style}>
//       <TextField
//         label="Title"
//         variant="outlined"
//         value={value}
//         onChange={(e) => {
//           const { value } = e.target;
//           setRows(prevState => {
//             const data = [...prevState];
//             data[rowIndex][columnIndex][header] = value;
//             return data;
//           });
//         }}
//         error={!!error}
//         helperText={error}
//       />
//     </div>
//   );
// };

// const Cell = React.memo(CellComponent, () => {
//   return false;
// });

// const Table = () => {
//   const [ rows, setRows] = useState(data);
//   const [ errors, setErrors] = useState([]);
//   const submitHandler = async () => {
   
//     // const errorData = [];
//     // rows.forEach( async (row, index) => {
//     //   let errorArray = [];
//     //   const details = row.map( async (cell) => {
//     //     console.log('cell',cell);
//     //     try {
//     //       await validationSchema.validate(cell, {
//     //         abortEarly : false
//     //       }); 
//     //     } catch (err) {
//     //       // err.name; // => 'ValidationError'
//     //       // err.errors; // => ['Deve ser maior que 18']
//     //       console.log('err',JSON.parse(JSON.stringify(err)));
//     //       // console.log('err.errors',err.errors);
//     //       // console.log('err.name',err.name);
//     //       // console.log('err.inner',err.inner);
//     //       errorArray.push(err.inner);
//     //       console.log('errorArray',errorArray);
//     //     }
//     //     errorData.push(errorArray);
//     //   });
//     //   await Promise.all(details); 
//     //   console.log('data',data);
//     //   console.log('errors',errors);
//     // });

//     // const booleanArray = await Promise.all(isAllItemsValid);

//     console.log('errors',errorData);
//     setErrors(errorData);
//     if(errors.length)
//     {
//     }
//     else
//     {

//     }
//   };
//   return (
//     <div>
//       <Grid
//         cellRenderer={HeaderCell}
//         columnCount={colCount}
//         columnHeight={rowCount * cellHeight}
//         columnWidth={cellWidth}
//         height={cellHeight}
//         rowCount={1}
//         rowHeight={cellHeight}
//         rowWidth={colCount * cellWidth}
//         width={colCount * cellWidth}
//         rowData={rows}
//       />
//       <Grid
//         cellRenderer={CellComponent}
//         columnCount={colCount}
//         columnHeight={rowCount * cellHeight}
//         columnWidth={cellWidth}
//         height={550}
//         rowCount={rowCount}
//         rowHeight={cellHeight}
//         rowWidth={colCount * cellWidth}
//         width={colCount * cellWidth + scrollbarWidth}
//         rowData={rows}
//         errors={errors}
//         setRows={setRows}
//       />
//       <button onClick={submitHandler}>Submit</button>
//     </div>
//   );
// };
// export default Table;
