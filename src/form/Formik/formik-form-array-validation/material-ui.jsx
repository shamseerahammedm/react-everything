import React, { Component, useState } from 'react';
import { Formik, Form, Field, FieldArray, getIn } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  address: yup.string().required(),
  zip: yup.number().test('len', 'Must be exactly 6 characters', val => {
    if (val) {
      return val.toString().length === 6;
    }
  }),
  country: yup.string().required('Country is Required'),
  friends: yup.array()
    .of(
      yup.object().shape({
        name: yup.string().required('Name is Required') // these constraints take precedence
          .matches(/^[A-Za-z ]*$/, 'First name should not contain special characters or numbers')
      })
    )
    .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
    .min(3, 'Minimum of 3 friends'),
  gender: yup.string().required(),
  preference: yup.array()
    .required('Preference is required') // these constraints are shown if and only if inner constraints are satisfied
    .min(2, 'Minimum of 2 preference'),
});

const ErrorMessage = ({ errors, touched, name }) => {
  return (
    <>
      {errors[name] && touched[name] && <span className="text-danger">{errors[name]}</span>}
    </>
  );
};

const CustomInputComponent = ({
  field,
  form: { touched, errors },
  placeholder,
  name,
  ...props
}) => {
  const isErrorField = (errors[field.name] && touched[field.name]) ? true : false;
  return (
    <TextField
      {...field} {...props} label={placeholder} variant="outlined"
      error={isErrorField}
      helperText={isErrorField ? `${errors[field.name]}` : null}
    />
  );
};

const CustomSelect = ({ label, countries, form : { setFieldValue, touched, errors }, field : { name } }) => {
  const [ country , setCountry ] = useState('');
  const isFieldError  =  (touched.name && errors.name) ? true : false;
  console.log(touched);
  console.log(errors.name);
  console.log(isFieldError);
  return (
    <FormControl variant="outlined" fullWidth size="small" error={isFieldError ? true : false }>
      <InputLabel id="country-select">{label}</InputLabel>
      <Select
        labelId="country-select"
        value={country}
        label={label}
        onChange={(e)=>{
          setCountry(e.target.value);
          setFieldValue(name,e.target.value);
        }}
        name={name}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          countries.map(countryItem => {
            return (
              <MenuItem key={countryItem.area} value={countryItem.alpha2Code}>{countryItem.name}</MenuItem>
            );
          })
        }
      </Select>
      {isFieldError &&  <FormHelperText>{errors.name}</FormHelperText>} 
    </FormControl>
  );
};

const CheckBox = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }) => {
        return (
          <label>
            <input
              type="checkbox"
              {...props}
              checked={field.value.includes(props.value)}
              onChange={() => {
                if (field.value.includes(props.value)) {
                  const nextValue = field.value.filter(
                    value => value !== props.value
                  );
                  form.setFieldValue(props.name, nextValue);
                }
                else {
                  const nextValue = field.value.concat(props.value);
                  form.setFieldValue(props.name, nextValue);
                }
              }}
            />
          </label>
        );
      }}
    </Field>
  );
};

class FormikFormArraysMaterialUI extends Component {

    state = {
      countries: [],
      selectedCountry: ''
    }

    async componentDidMount() {
      const countryListData = await fetch('https://restcountries.eu/rest/v2/all');
      const countryList = (await countryListData.json()).slice(0, 20);
      this.setState({
        countries: countryList
      });
    }

    handleSelect = (e) => {
      this.setState({
        selectedCountry: e.target.value
      });
    }

    render() {
      const { countries, selectedCountry } = this.state;

      return (
        <div>
          <Formik
            initialValues={{
              name: '',
              address: '',
              zip: '',
              email: '',
              friends: [{ name: 'shamseer ' }],
              gender: '',
              preference: []
            }}
            onSubmit={values => {
              console.log(values);
              alert('submitting');
            }}
            validationSchema={schema}
          >
            {
              ({ errors, touched, values, handleChange, setFieldValue }) => {
                console.log(setFieldValue);
                return (
                  <Grid container justify="center">
                    <Grid item xs={6}>
                      <Form className="m-5">
                        <Grid container spacing={3}>
                          <Grid item xs={6}>
                            <Field type="text" name="name" placeholder="Name" size="small" fullWidth component={CustomInputComponent} />
                          </Grid>
                          <Grid item xs={6}>
                            <Field name="address" placeholder="Address" multiline size="small" fullWidth component={CustomInputComponent} rows={4} />
                          </Grid>

                          <Grid item xs={6}>
                            <Field type="text" name="zip" placeholder="Zip" size="small" fullWidth component={CustomInputComponent} />
                          </Grid>
                          <Grid item xs={6}>
                            <Field name="email" placeholder="Email" multiline size="small" fullWidth component={CustomInputComponent} />
                          </Grid>
                          <Grid item xs={12}>

                            <Field name="country" component={CustomSelect} countries={countries} label="Country"/>

                          </Grid>
                        </Grid>

                        {errors.country && <span className="text-danger">{errors.country}</span>}

                        <FieldArray
                          name="friends"
                          render={arrayHelpers => {
                            if (!values.friends) {
                              arrayHelpers.push('');
                            }
                            return (
                              <div>
                                {
                                  values.friends && values.friends.length > 0 ?
                                    (
                                      values.friends.map((friend, index) => {
                                        const nameOfField = `friends[${index}].name`;
                                        const errorMessage = getIn(errors, nameOfField);
                                        const isFieldTouched = getIn(touched, nameOfField);

                                        return (
                                          <div key={index} className="form-group">
                                            <div className="row">
                                              <div className="col-sm-8">
                                                <Field
                                                  name={`friends[${index}].name`} className="form-control"
                                                />
                                              </div>
                                              <div className="col-sm-2">
                                                <button
                                                  className="btn btn-primary d-block w-100"
                                                  type="button" onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                > - </button>
                                              </div>
                                              <div className="col-sm-2">
                                                <button
                                                  className="btn btn-danger d-block w-100"
                                                  type="button"
                                                  onClick={() => arrayHelpers.insert(index, { name: '' })} // insert an empty string at a position
                                                > + </button>
                                              </div>
                                              <div className="col-12">
                                                {errorMessage && isFieldTouched && <p className="text-danger">{errorMessage}</p>}
                                              </div>
                                            </div>
                                          </div>
                                        );

                                      })
                                    )
                                    :
                                    (
                                      <button type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all friends from the list */}
                                        	                                                Add a friend
                                      </button>
                                    )
                                }
                              </div>
                            );
                          }
                          }
                        />
                        {typeof errors.friends === 'string' && <span className="text-danger">{errors.friends}</span>}

                        <Field
                          name="gender"
                          render={({ field }) => (
                            <>
                              <label htmlFor="male">Male</label>
                              <input  {...field} type="radio" name="gender" value="male" /><br />
                              <label htmlFor="male">Female</label>
                              <input  {...field} type="radio" name="gender" value="female" />
                            </>
                          )}
                        />

                        <div className="form-group">
                          <label htmlFor="Red">Red</label><CheckBox name="preference" value="red" />
                          <label htmlFor="Green">Green</label><CheckBox name="preference" value="green" />
                          <label htmlFor="Blue">Blue</label><CheckBox name="preference" value="blue" />
                          {errors.preference && <p className="text-danger">{errors.preference}</p>}
                        </div>

                        <button className="btn btn-block btn-primary mt-3" type="submit">Submit</button>

                      </Form>
                    </Grid>
                  </Grid>
                );
              }
            }
          </Formik>
        </div>
      );
    }
}

export default FormikFormArraysMaterialUI;
