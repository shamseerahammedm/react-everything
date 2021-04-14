import React, { Component } from 'react';
import { Field, reduxForm, FieldArray, getFormAsyncErrors } from 'redux-form';
import { connect } from 'react-redux';
import * as yup from 'yup';

// const selector = formValueSelector("testform");
import { schema } from './yupConfig';
export const fields = Object.keys(schema.fields);
const asyncValidate = values => {
  return new Promise((resolve, reject) => {
    //Validate our form values against our schema! Also dont abort the validate early.
    schema.validate(values, { abortEarly: false })
      .then(() => {
        //form is valid happy days!
        resolve();
      })
      .catch(errors => {
        //form is not valid, yup has given us errors back. Lets transform them into something redux can understand.

        let reduxFormErrors = {};
        errors.inner.forEach(error => {
          reduxFormErrors[error.path] = error.message;
        });
        //redux form will now understand the errors that yup has thrown
        reject(reduxFormErrors);
      });
  });
    
};

const renderFriends = ({ fields, meta: { error } , ...otherProps}) => {
  if (fields.length === 0) {
    fields.push();
  }
  return (
    <>
      {
        fields.map((friend, index) => (
          <div key={index} className="form-group row">
            <div className="col-sm-8" key={index}>
              <Field
                name={`${friend}.name`}
                type="text"
                component={renderField}
                inputType="input"
                {...otherProps}
              />
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary d-block w-100" type="button" onClick={() => fields.remove(index)}> - </button>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-danger d-block w-100" type="button" onClick={() => fields.push()} > + </button>
            </div>
          </div>
        ))
      }
      {error && <li className="error">{error}</li>}
    </>
  );
};

const renderField = ({ input, label, type, inputType, name, meta: { touched, error, warning }, formAsyncErrors, ...otherprops }) => {
    
  console.log(error);
  console.log(formAsyncErrors);
  console.log(otherprops);
    
  switch (inputType) {
  case 'input':
    return (
      <div className="form-group">
        { label ? <label>{label}</label> : null }
        <input className="form-control" {...input} placeholder={label} type={type} />
        {touched && ((error && <p className="text-danger">{error}</p>) || (warning && <p className="text-danger">{warning}</p>))}
      </div>
    );
  case 'textarea':
    return (
      <div className="form-group">
        <label>{label}</label>
        <textarea className="form-control" {...input} placeholder={label} type={type} />
        {touched && ((error && <p className="text-danger">{error}</p>) || (warning && <p className="text-danger">{warning}</p>))}
      </div>
    );
  case 'textarea':
    return (
      <div className="form-group">
        <label>{label}</label>
        <textarea className="form-control" {...input} placeholder={label} type={type} />
        {touched && ((error && <p className="text-danger">{error}</p>) || (warning && <p className="text-danger">{warning}</p>))}
      </div>
    );
  }

};

class ReduxFormTest extends Component {

    state = {
      countries: [],
    }

    async componentDidMount() {
      const countryListData = await fetch('https://restcountries.eu/rest/v2/all');
      const countryList = (await countryListData.json()).slice(0, 20);
      this.setState({
        countries: countryList
      });
    }

    formSubmitHandler = () => {
      alert('submitting');
    }

    render() {
      const { countries } = this.state;
      const { handleSubmit, pristine, reset, submitting, anyTouched, formValues, formAsyncErrors } = this.props;
      return (
        <div className="container mt-4">
          <h1>Friend List</h1>
          <form onSubmit={ handleSubmit( this.formSubmitHandler)}>
            <div className="row">
              <div className="col-sm-6">
                <Field
                  name="name"
                  component={renderField}
                  type="text"
                  label="Name"
                  inputType="input"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  name="address"
                  component={renderField}
                  type="text"
                  label="Address"
                  inputType="textarea"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  name="zip"
                  component={renderField}
                  type="number"
                  label="Zip"
                  inputType="input"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  name="email"
                  component={renderField}
                  type="text"
                  label="Email"
                  inputType="input"
                />
              </div> 
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="">Country</label>
                  <Field className="form-control" name="country" component="select">
                    <option value="">Select Country</option>
                    {
                      countries.map(countryItem => <option key={countryItem.area} value={countryItem.alpha2Code}>{countryItem.name}</option>)
                    }
                  </Field>
                </div>

              </div>
                       
              <div className="col-sm-6">
                <label htmlFor="">Friends</label>
                <FieldArray name="friends" component={renderFriends} formAsyncErrors={formAsyncErrors}/>
              </div>

            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }
}

ReduxFormTest = reduxForm({
  form: 'testform',
    
  asyncValidate: asyncValidate
})(ReduxFormTest);

ReduxFormTest = connect(
  state => {
    return {
      formValues: state.form.testform,
      formAsyncErrors: getFormAsyncErrors('testform')(state),
      fields :fields ,
    };
  }
)(ReduxFormTest);

export default ReduxFormTest;