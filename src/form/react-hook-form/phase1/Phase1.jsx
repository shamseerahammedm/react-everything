import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  input: yup.string().required(),
  select: yup.string().required(),
});

const PhaseOne = () => {
  const formProperties = useForm({
    resolver: yupResolver(schema)
  });
  const { register, handleSubmit, errors, getValues, watch } = formProperties;
  const onSubmit = (values) => console.log('submit values', values);
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  // console.log('watchAllFields',watchAllFields);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Input label="First Name" register={register} required name="input"/>

          </div>
          <div className="col-sm-12">
            <Select name="select" register={register} />

          </div>
          <div className="col-sm-12">
            <button type="button" onClick={() => console.log(getValues())}>Get values</button>
          </div>
          <div className="col-sm-12">
            <input type="submit" />
          </div>
        </div>
      </div>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <pre>{JSON.stringify(getValues(), null, 2)}</pre>
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