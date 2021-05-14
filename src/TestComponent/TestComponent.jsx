import { Dialog, Grid } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync, getDetailsAsync, fetchFunctionsOptionsAsync } from 'redux/redux-files/general/general.actions';
import MultiSelect from 'form/Formik/CorrectInputComponents/MultiSelect/MultiSelect';
import Input from 'form/Formik/CorrectInputComponents/Input/Input';

const TestComponent = () => {
  const dispatch = useDispatch();
  const { data, details, functions } = useSelector(state => state.generalReducer);
  const [ update, setUpdate ] = useState();
  const [ initialValues, setinitialValues ] = useState({ 
    first_name : '',
    last_name : '',
    functions : [],
    reasons : [],
  });

  useEffect(() => {
    dispatch(getDataAsync());
    dispatch(fetchFunctionsOptionsAsync());
  }, []);

  useEffect(()=>{
    if(data && update)
    {
      setinitialValues({
        first_name : data.first_name,
        last_name : data.last_name,
        functions : data.functions,
        reasons : data.reasons,
      });
    }
  }, [data, update]);
  
  // Section Starts ::  -- 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Section Starts ::  -- 

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log('values', values);
          }}
        >
          {({ values }) => {
            return (
              <Form>
                
                <div className="div" style={{ padding : '20px' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Field
                        component={Input}
                        name="first_name"
                        label="First Name"
                        // required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        component={Input}
                        name="last_name"
                        label="First Name"
                        // required
                      />
                    </Grid>
                    <Grid item xs={6}>

                      <Field
                        component={MultiSelect}
                        name="functions"
                        options={functions}
                        optionLabel="name"
                        placeholder="Select Functions"
                        className="outlinedInput"
                        valueLabel="id"
                        showLoaderIcon
                        onChange={()=>{
                          console.log('e');
                          dispatch(getDetailsAsync());
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>

                      <Field
                        component={MultiSelect}
                        name="reasons"
                        options={details}
                        optionLabel="name"
                        placeholder="Select Reasons"
                        className="outlinedInput"
                        valueLabel="id"
                        showLoaderIcon
                       
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <button type="submit">
                        Submit
                      </button>
                    </Grid>
                  </Grid>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </div>
                
              </Form>
            );
          }}
        </Formik>

      </Dialog>
      {
        data && 
        <button onClick={()=>{
          setUpdate(data);
          handleClickOpen();
        }}>Click</button>
      }

    </div>
  );
};

export default TestComponent;

