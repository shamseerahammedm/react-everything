import React from 'react';
import { render } from 'react-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FormControlLabel, Checkbox as MuiCheckbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@material-ui/core';
import Checkbox from '../common/CheckboxComponent/Checkbox/Checkbox';
import CheckboxGroup from '../common/CheckboxComponent/CheckboxGroup/CheckboxGroup';
// import classNames from 'classnames';

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className={'asd'}>{error}</div> : null;

// Checkbox input
// export const Checkbox = ({
//   field: { name, value, onChange, onBlur },
//   form: { errors, touched, setFieldValue },
//   id,
//   label,
//   className,
//   ...props
// }) => {
//   return (
//     <div>
//       {/* <input
//         name={name}
//         id={id}
//         type="checkbox"
//         value={value}
//         checked={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         // className={classNames('radio-button')}
//       /> */}
//       {/* <label htmlFor={id}>{label}</label> */}
      
//       <FormControlLabel
//         control={
//           <MuiCheckbox
//             id={id}
//             checked={value}
//             value={value}
//             onChange={onChange}
//             onBlur={onBlur}
//             name={name}
//             color="primary"
//           />
//         }
//         label={label}
//       />
//       {touched[name] && <InputFeedback error={errors[name]} />}
//     </div>
//   );
// };

// // Checkbox group
// class CheckboxGroup extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   handleChange = (event) => {
//     const target = event.currentTarget;
//     let valueArray = [...this.props.value] || [];

//     if (target.checked) {
//       valueArray.push(target.id);
//     } else {
//       valueArray.splice(valueArray.indexOf(target.id), 1);
//     }

//     console.log('this.props.id',this.props);
//     this.props.onChange(this.props.id, valueArray);
//   };

//   handleBlur = () => {
//     // take care of touched
//     this.props.onBlur(this.props.id, true);
//   };

//   render() {
//     const { value, error, touched, label, className, children } = this.props;
//     console.log('error', error);
//     const classes = '';
//     return (
//       <div className={classes}>
//         <fieldset>
//           <legend>{label}</legend>
//           {React.Children.map(children, (child) => {
//             return React.cloneElement(child, {
//               field: {
//                 value: value.includes(child.props.id),
//                 onChange: this.handleChange,
//                 onBlur: this.handleBlur,
//               }
//             });
//           })}
//           {touched && <InputFeedback error={error} />}
//         </fieldset>
//       </div>
//     );
//   }
// }

// export function CheckboxGroupFunctional({
//   label,
//   error,
//   onChange,
//   onBlur,
//   id,
//   children,
//   value
// }) {
//   const classes = '';
//   const handleChange = (event) => {
//     const target = event.currentTarget;
//     let valueArray = [...value] || [];

//     if (target.checked) {
//       valueArray.push(target.id);
//     } else {
//       valueArray.splice(valueArray.indexOf(target.id), 1);
//     }
//     onChange(id, valueArray);
//   };
//   const handleBlur = () => {
//     // take care of touched
//     onBlur(id, true);
//   };
//   return (
//     <div className={classes.root}>
//       <FormControl required error={error} component="fieldset" className={classes.formControl}>
//         <FormLabel component="legend">{label}</FormLabel>
//         <FormGroup>
//           {React.Children.map(children, (child) => {
//             return React.cloneElement(child, {
//               field: {
//                 value: value.includes(child.props.id),
//                 onChange: handleChange,
//                 onBlur: handleBlur,
//               }
//             });
//           })}
//         </FormGroup>
//         {error && <FormHelperText>{error}</FormHelperText>}
//       </FormControl>
//     </div>
//   );
// }

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        // className={classNames('radio-button')}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  // const classes = classNames(
  //   'input-field',
  //   {
  //     'is-success': value || (!error && touched), // handle prefilled or user-filled
  //     'is-error': !!error && touched
  //   },
  //   className
  // );

  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};

const App = () => (
  <div className="app">
    <h1>Radio & checkbox inputs with Formik</h1>
    <Formik
      initialValues={{
        radioGroup: '',
        checkboxGroup: [],
        singleCheckbox: false
      }}
      validationSchema={Yup.object().shape({
        radioGroup: Yup.string().required('A radio option is required'),
        checkboxGroup: Yup.array().min(1, 'At least one checkbox is required'),
        singleCheckbox: Yup.bool().oneOf([true], 'Must agree to something')
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 500);
      }}
    >
      {({
        isSubmitting,
        values,
        setFieldValue,
        setFieldTouched,
        errors,
        touched
      }) => {
        return (
          <Form>
            <h2>Single checkbox</h2>
            <Field
              component={Checkbox}
              name="singleCheckbox"
              id="singleCheckbox"
              label="Agree to something"
            />

            <h2>Checkbox group</h2>
            <CheckboxGroup
              id="checkboxGroup"
              label="Which of these?"
              value={values.checkboxGroup}
              error={errors.checkboxGroup}
              touched={touched.checkboxGroup}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            >
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="checkbox1"
                label="Option 1"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="checkbox2"
                label="Option 2"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="checkbox3"
                label="Option 3"
              />
            </CheckboxGroup>

            <h2>Radio group</h2>
            <RadioButtonGroup
              id="radioGroup"
              label="One of these please"
              value={values.radioGroup}
              error={errors.radioGroup}
              touched={touched.radioGroup}
            >
              <Field
                component={RadioButton}
                name="radioGroup"
                id="radioOption1"
                label="Choose this option"
              />
              <Field
                component={RadioButton}
                name="radioGroup"
                id="radioOption2"
                label="Or choose this one"
              />
            </RadioButtonGroup>

            <h2>Single radio</h2>
            <p>Is that a valid use case?</p>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default App;
