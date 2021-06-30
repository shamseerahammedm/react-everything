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
      { errors && console.log(errors)}
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
                  {({ height, width }) => (
                    <List
                      height={height}
                      itemCount={items.length}
                      itemSize={() => 100}
                      width={width}
                      itemData={items}
                    >
                      {WindowedRow}
                    </List>
                  )}
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