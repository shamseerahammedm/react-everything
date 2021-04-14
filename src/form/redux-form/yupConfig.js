import * as yup from 'yup';


export const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    address: yup.string().required(),
    zip: yup.number().typeError('You must specify zip code').test('len', 'Must be exactly 6 characters', val => {
        if (val) {
            return val.toString().length === 6
        }
    }),
    country: yup.string().required('Country is Required'),
    friends: yup.array()
        .of(
            yup.object().shape({
                name: yup.string().required('Name is Required'), // these constraints take precedence
            })
        )
        .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
        .min(3, 'Minimum of 3 friends'),
    // gender: yup.string().required(),
    // preference: yup.array()
    //     .required('Preference is required') // these constraints are shown if and only if inner constraints are satisfied
    //     .min(2, 'Minimum of 2 preference'),
});
