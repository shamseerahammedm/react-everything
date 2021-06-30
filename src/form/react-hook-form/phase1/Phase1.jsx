import React from 'react';
import { useForm, useController } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  input: yup.string().required(),
  inputControlled: yup.string().required(),
  select: yup.string().required(),
});

const PhaseOne = () => {
  const { register, 
    handleSubmit, 
    formState:{ errors }, 
    getValues, 
    watch, 
    control } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (values) => console.log('submit values', values);
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  // console.log('watchAllFields',watchAllFields);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      React hook form
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-12">
              <p>Input</p>
              <Input label="First Name" register={register} required name="input"/>

            </div>
            <div className="col-sm-12">
              <p>InputUseController</p>
              <InputUseController
                label="First Name" 
                required 
                name="inputControlled"
                control={control}
              />

            </div>
            <div className="col-sm-12">
              <Select name="select" register={register} />

            </div>
            <div className="col-sm-12">
              <button type="button" onClick={() => console.log(getValues())}>Get values</button>
              <button type="button" onClick={() => console.log(errors)}>Get errors</button>
            </div>
            <div className="col-sm-12">
              <input type="submit" />
            </div>
          </div>
          <div className="col-sm-6">
            getValues()
            <pre>{JSON.stringify(getValues(), null, 2)}</pre>
            watchAllFields
            <pre>{JSON.stringify(watchAllFields, null, 2)}</pre>
          </div>
          
        </div>
      </div>

    </form>
  );
};

const Input = ({
  register,
  name = '',
  required = false
}) => {
  return (
    <input {...register(name, { required })} className="form-control" defaultValue="asd"/>
  );
};

const InputUseController = ({
  name = '',
  required = false,
  control
}) => {

  const {
    field: { ref, onBlur, onChange },
    fieldState,
    formState,
  } = useController({
    name,
    control,
    defaultValue: '',
  });
  const { error } = fieldState;
  console.log('fieldState', fieldState.error);
  console.log('formState', formState);
  
  return (
    <>
      <input 
        className="form-control" 
        defaultValue="asd" 
        onChange={onChange} 
        onBlur={onBlur}
        ref={ref}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};

const Select = ({
  register,
  name = '',
  required = false
}) => {
  return (
    <select {...register(name, { required })}>
      <option value="">Select</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  );
};

export default PhaseOne;

// example updated to v7 of rect hook form, currently 6 is installed remove 6 and install 7