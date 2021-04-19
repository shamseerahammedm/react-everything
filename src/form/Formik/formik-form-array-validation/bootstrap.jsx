import React, { Component } from 'react'
import { Formik, Form, Field, FieldArray, getIn } from 'formik';
import * as yup from 'yup'


const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    address: yup.string().required(),
    zip: yup.number().test('len', 'Must be exactly 6 characters', val => {
        if (val)
        {
            return val.toString().length === 6
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
    )
}



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
                                if (field.value.includes(props.value))
                                {
                                    const nextValue = field.value.filter(
                                        value => value !== props.value
                                    );
                                    form.setFieldValue(props.name, nextValue);
                                }
                                else
                                {
                                    const nextValue = field.value.concat(props.value);
                                    form.setFieldValue(props.name, nextValue);
                                }
                            }}
                        />
                    </label>
                )
            }}
        </Field>
    );
}


let renderCount = 0
const FormikFormArrays = () => {
    renderCount++;

    // async componentDidMount() {
    //     const countryListData = await fetch('https://restcountries.eu/rest/v2/all');
    //     const countryList = (await countryListData.json()).slice(0, 20);
    //     this.setState({
    //         countries: countryList
    //     });
    // }

    // const 

    // useEffect(async ()=>{
    //     const countryListData = await fetch('https://restcountries.eu/rest/v2/all');
    //     const countryList = (await countryListData.json()).slice(0, 20);
    // },[])


    return (
        <div>
            {renderCount}
            <Formik
                initialValues={{
                    name: "",
                    address: "",
                    zip: "",
                    email: "",
                    friends: [{ name: "shamseer$$" }],
                    gender: "",
                    preference: []
                }}
                onSubmit={values => {
                    console.log(values);
                    alert("submitting")
                }}
                validationSchema={schema}
            >
                {
                    ({ errors, touched, values }) => {

                        return (
                            <Form>
                                <div className="container">
                                    <h1>Friend List</h1>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="">Name</label>
                                                <Field type="text" name="name" placeholder="Name" className="form-control" />
                                                <ErrorMessage errors={errors} touched={touched} name="name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="">Address</label>
                                                <Field as="textarea" name="address" placeholder="Address" className="form-control" />
                                                <ErrorMessage errors={errors} touched={touched} name="address" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="">Zip</label>
                                                <Field type="number" name="zip" placeholder="Zip" className="form-control" />
                                                <ErrorMessage errors={errors} touched={touched} name="zip" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="">Email</label>
                                                <Field type="email" name="email" placeholder="Email" className="form-control" />
                                                <ErrorMessage errors={errors} touched={touched} name="email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="">Country</label>
                                                {/* <Field as="select" name="country" className="form-control">
                                                    <option value="selectcountry">Select Country</option>
                                                    {
                                                        countries.map(countryItem => <option key={countryItem.area} value={countryItem.alpha2Code}>{countryItem.name}</option>)
                                                    }
                                                </Field> */}
                                                {errors.country && <span className="text-danger">{errors.country}</span>}
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="">Friends</label>
                                                <FieldArray
                                                    name="friends"
                                                    render={arrayHelpers => {
                                                        if (!values.friends)
                                                        {
                                                            arrayHelpers.push('')
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
                                                                                                    onClick={() => arrayHelpers.insert(index, { name: "" })} // insert an empty string at a position
                                                                                                > + </button>
                                                                                            </div>
                                                                                            <div className="col-12">
                                                                                                {errorMessage && isFieldTouched && <p className="text-danger">{errorMessage}</p>}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )

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
                                                        )
                                                    }
                                                    }
                                                />
                                                {typeof errors.friends === 'string' && <span className="text-danger">{errors.friends}</span>}
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="">Gender</label>
                                            <div className="form-group">
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
                                                {errors.gender && <p className="text-danger">{errors.gender}</p>}
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="">Preference</label>
                                            <div className="form-group">
                                                <label htmlFor="Red">Red</label><CheckBox name="preference" value="red" />
                                                <label htmlFor="Green">Green</label><CheckBox name="preference" value="green" />
                                                <label htmlFor="Blue">Blue</label><CheckBox name="preference" value="blue" />
                                                {errors.preference && <p className="text-danger">{errors.preference}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-block btn-primary mt-3" type="submit">Submit</button>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )

}

export default FormikFormArrays
