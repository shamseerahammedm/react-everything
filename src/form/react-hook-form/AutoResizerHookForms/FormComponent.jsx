import React, { useEffect } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { VariableSizeList as List, FixedSizeGrid as VGrid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'


const FormComponent = ({
  tableData
}) => {
  console.log('tableData', tableData);
  const formMethods = useForm({ defaultValues: tableData });

  useEffect(() => {
    tableData.forEach((_, idx) => {
      formMethods.register(`[${idx}].first_name`)
    })
  }, [formMethods, tableData])

  const onSubmit = (data) => console.log('submit data', data)
  const columnWidths = new Array(1000)
    .fill(true)
    .map(() => 75 + Math.round(Math.random() * 50));
  const rowHeights = new Array(1000)
    .fill(true)
    .map(() => 25 + Math.round(Math.random() * 50));
  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div style={style}>
      Item {rowIndex},{columnIndex}
    </div>
  );
  return (

    <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
      <div className="wrapper">
        <FormProvider {...formMethods}>
          <AutoSizer>
            {({ height, width }) => (
              <>
                {/* <List
                  height={height}
                  itemCount={tableData.length}
                  itemSize={() => 100}
                  width={width}
                  itemData={tableData}>
                  {WindowedRow}
                </List> */}
                <VGrid
                  columnCount={Object.keys(tableData[0]).length}
                  columnWidth={150}
                  height={height}
                  rowCount={tableData.length}
                  rowHeight={50}
                  width={width}
                  itemData={tableData}
                >
                  {WindowedRow}
                </VGrid>
              </>
            )}
          </AutoSizer>
        </FormProvider>
      </div>
      <button type="submit">Submit</button>
    </form>

  )
}

export default FormComponent



//In a bigger project, this would be a seperate component.
const WindowedRow = React.memo(({ columnIndex , rowIndex, style, data }) => {
  const { getValues, setValue, errors } = useFormContext();
  console.log('data',data);
  console.log('columnIndex',columnIndex);
  console.log('rowIndex',rowIndex);
  const qtyKey = `[${rowIndex}].first_name`
  const qty = getValues()[rowIndex].first_name || data[rowIndex].first_name;
  return (
    <>
      <div style={style}>
        <input
          defaultValue={qty}
          onChange={(e) => {
            setValue(qtyKey, e.target.value)
          }}
          className="form-control"
        />
        <input
          defaultValue={123}
          onChange={(e) => {
            setValue(qtyKey, e.target.value)
          }}
          className="form-control"
        />
        {errors && errors[rowIndex] && <p>Some error </p>}
      </div>
    </>
  )
})