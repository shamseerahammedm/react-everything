import React from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

// import './styles.css';

const items = Array.from(Array(1000).keys()).map((i) => ({
  title: `List ${i}`,
  quantity: Math.floor(Math.random() * 10),
}));

//In a bigger project, this would be a seperate component.
const WindowedRow = React.memo(({ index, style, data }) => {
  const { register, formState : { errors } } = useFormContext();
  const qtyKey = `${index}.quantity`;
  console.log(errors);
  return (
    <div style={style}>
      <label>{data[index].title}</label>
      <input {...register(qtyKey,  {
        validate : value => false
      })} />
      {errors && errors?.[index]?.quantity && <p>Some error </p>}
    </div>
  );
});

const App = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const formMethods = useForm({
    defaultValues: items,
  });

  return (
    <div className="container">
      <h1>Using with React-window</h1>
      <p>Rather than register fields, we use getValues and setValue.</p>

      <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="wrapper">
          <FormProvider {...formMethods}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  itemCount={items.length}
                  itemSize={() => 100}
                  width={width}
                  itemData={items}>
                  {WindowedRow}
                </List>
              )}
            </AutoSizer>
          </FormProvider>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;