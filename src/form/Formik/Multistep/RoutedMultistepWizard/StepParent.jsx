import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Formik, Field, ErrorMessage, FormikConsumer, FastField } from 'formik';
import { Persist } from 'formik-persist';

let initialValue= {
  firstName: '',
  lastName: '',
  email: '',
  favoriteColor: '',
};

const array = new Array(50).fill();
array.forEach( (item, i) => {
  initialValue[`firstName_${i}`] = '';
});

const fields = array.map( (item, i) => {
  return (
    <div key={i}>
      <label>{`firstName_${i}`}</label>
      <FastField
        name={`firstName_${i}`}
        component="input"
        type="text"
        placeholder="Last Name"
      />
      <ErrorMessage
        name={`firstName_${i}`}
        component="div"
        className="field-error"
      />
    </div>
  );
  
});

// the root path. locations should extend from this
const formRootPath = '/step';

// the specific path for each page
const locations = [ '/step/1', '/step/2'];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : 'Required');

class WizardBase extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      values: props.initialValues,
    };
  }

  next = values => {
    const { location, history } = this.props;
    this.setState(() => ({ values }));

    // withRouter provides current location and history.push() to go to next page
    const nextPath = locations.indexOf(location.pathname) + 1;
    history.push(locations[nextPath]);
  };

  previous = () => {
    const { location, history } = this.props;

    const prevPath = locations.indexOf(location.pathname) - 1;
    history.push(locations[prevPath]);
  };

  validate = values => {
    const { location, children } = this.props;

    const page = locations.indexOf(location.pathname);
    const activePage = React.Children.toArray(children)[page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit, location } = this.props;
    const page = locations.indexOf(location.pathname);
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    }
    // otherwise update values from page
    bag.setTouched({});
    bag.setSubmitting(false);
    alert(1);
    this.next(values);
  };

  render() {
    const { children, location } = this.props;
    const { values } = this.state;
    // current page is determined by matching path in locations
    const page = locations.indexOf(location.pathname);

    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    console.log('React.Children.toArray(children)', React.Children.toArray(children));
    return (
      <Formik
        initialValues={values}
        enableReinitialize={true}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ values, handleSubmit, isSubmitting, handleReset }) => (
          <form  onSubmit={handleSubmit}>
            
            <pre>location.pathname : {JSON.stringify(location.pathname, null, 2)}</pre>
            <pre>page : {JSON.stringify(page, null, 2)}</pre>
            <pre>isLastPage : {JSON.stringify(isLastPage, null, 2)}</pre>

            {activePage}
            <div className="buttons">
              {page > 0 && (
                <button
                  type="button"
                  className="secondary"
                  onClick={this.previous}
                >
                  « Previous
                </button>
              )}

              {!isLastPage && <button type="submit">Next »</button>}
              {isLastPage && (
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              )}
            </div>
            <Persist name="stepform" />

            <Debug />
          </form>
        )}
      />
    );
  }
}

const Wizard = withRouter(WizardBase);

const App = () => (
  <Router>
    <div className="App">
      <h1>Multistep / Form Wizard </h1>
      <Route
        path={formRootPath}
        render={routeProps => (
          <Wizard
            {...routeProps}
            initialValues={initialValue}
            onSubmit={(values, actions) => {
              sleep(300).then(() => {
                window.alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              });
            }}
          >
            <Step1/>
            <Step2/>
          </Wizard>
        )}
      />
    </div>
  </Router>
);
export const Step1 = () => {
  return (
    <div>
      <Wizard.Page>
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            validate={required}
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="field-error"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            validate={required}
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="field-error"
          />
        </div>
      </Wizard.Page>
    </div>
  );
};
export const Step2 = () => {
  
  return (
    <div>
      
      <Wizard.Page
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.favoriteColor) {
            errors.favoriteColor = 'Required';
          }
          return errors;
        }}
      >
        {console.log('wow')}
        <div>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="field-error"
          />
        </div>
        <div>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="field-error"
          />
        </div>
        {fields}
        <div>
          <label>Favorite Color</label>
          <Field name="favoriteColor" component="select">
            <option value="">Select a Color</option>
            <option value="#ff0000">❤️ Red</option>
            <option value="#00ff00">💚 Green</option>
            <option value="#0000ff">💙 Blue</option>
          </Field>
          <ErrorMessage
            name="favoriteColor"
            component="div"
            className="field-error"
          />
        </div>
      </Wizard.Page>
          
    </div>
  );
};

export const Debug = () => (
  <div
    style={{
      margin: '3rem 1rem',
      borderRadius: 4,
      background: '#f6f8fa',
      boxShadow: '0 0 1px  #eee inset',
    }}
  >
    <div
      style={{
        textTransform: 'uppercase',
        fontSize: 11,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontWeight: 500,
        padding: '.5rem',
        background: '#555',
        color: '#fff',
        letterSpacing: '1px',
      }}
    >
      Formik State
    </div>
    <FormikConsumer>
      {({ validationSchema, validate, onSubmit, ...rest }) => (
        <pre
          style={{
            fontSize: '.85rem',
            padding: '.25rem .5rem',
            overflowX: 'scroll',
          }}
        >
          {JSON.stringify(rest, null, 2)}
        </pre>
      )}
    </FormikConsumer>
  </div>
);
export default App;

