import React from 'react';
import { FixedSizeList } from 'react-window';
import { FormProvider, useFieldArray, useForm, useFormContext, Controller } from 'react-hook-form';
import './VitualizedHookFormTable.scss';
import { TextField } from '@material-ui/core';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object({
  test: yup.array(
    yup.object({
      title: yup.string().required(),
      quantity: yup.boolean().required(),
    })
  )
});

function List({ items }) {
  const formMethods = useForm({
    defaultValues: {
      test: items
    },
    shouldUnregister: false,
    resolver: yupResolver(validationSchema),
    mode : 'onChange'
  });

  const { control, getValues , handleSubmit, formState: { errors } } = formMethods;

  console.log('errors',errors);
  const fieldArrayProps = useFieldArray({ control, name: 'test' });
  const { fields, remove } = fieldArrayProps;
  const onSubmit = async (values) => {
    console.log('values',values);
    // const data = await submitter();
    // data.data.forEach(errorItem => {
    //   // show errors using this function
    //   setError(errorItem.key, {
    //     message : errorItem.message
    //   });
    // });
  };

  return (
    <FormProvider {...formMethods} {...fieldArrayProps}>
      <FixedSizeList
        width={400}
        height={500}
        itemSize={80}
        itemCount={fields.length}
        itemData={fields}
        itemKey={(i) => fields[i].id}
      >
        {WindowedRow}
      </FixedSizeList>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </FormProvider>
    
  );
}

export default function App() {
  const [items] = React.useState(() =>
    Array.from(Array(1000).keys()).map((i) => ({
      title: `List ${i}`,
      quantity: Math.floor(Math.random() * 10)
    }))
  );

  return (
    <div className="App">
      <h1>Virtual useFieldArray</h1>
      <List items={items} />
    </div>
  );
}

const WindowedRow = React.memo(({ style, index, data }) => {
  const { control, getValues , handleSubmit, formState: { errors }, fields, remove } = useFormContext();
  // console.log('props',props);
  // const defaultValue = getValues('test')?.[index]?.quantity || '';
  return (
    <>
      <form style={style}>
        <div className="textFieldWrapper">
          <Controller
            render={({ field }) => {

              const {
                onChange,
                onBlur,
                value,
                ref
              } = field;

              const error = errors.test?.[index]?.quantity?.message;

              return (
          
                <TextField
                  inputRef={ref}
                  label="Title"
                  variant="outlined"
                  value={value}
                  onChange={(e) => {
                    onChange(e);
                    // const { value } = e.target;
                    // if(yup.reach(validationSchema, dataKey).isValidSync(value))
                    // {
                    //   delete errors[key];
                    //   setErrors(errors);
                    // }
                    // else
                    // {
                    //   setErrors({
                    //     ...errors,
                    //     [key] : 'Email is not valid'
                    //   });
                    // }
                    // setRows(prevState => {
                    //   const data = [...prevState];
                    //   const newData = {
                    //     ...rowData,
                    //     [dataKey] : value
                    //   };
                    //   data.splice(rowIndex, 1, newData);
                    //   return data;
                    // });
                  }}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={error}
                /> 
              
              );
            }}
            name={`test.${index}.quantity`}
            // defaultValue={defaultValue}
            control={control}
          />
          <button onClick={() => remove(index)}>remove</button>
        </div>

      </form>
    asd
    </>
  );
});