import generalTypes from './general.types';

const INITIAL_STATE = {
  token: null,
  userId: null,
  loading: false,
  error: null,
  formData: null
};

const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type)
  {
  case generalTypes.AUTH_START:
    return {
      ...state,
      error: null,
      loading: true
    };
  case generalTypes.AUTH_SUCCESS:
    console.log(action.payload);
    return {
      ...state,
      token: action.payload.idToken,
      userId: action.payload.localId,
      loading: false,
      error: null
    };
  case generalTypes.AUTH_FAILURE:
    return {
      ...state,
      token: null,
      userId: null,
      loading: false,
      error: null
    };
  case generalTypes.LOG_OUT:
    return {
      ...state,
      token: null,
      userId: null,
      error: null
    };

  case 'SUBMIT_MUI_FORMIK_FORM':
    alert(1);
    return {
      ...state,

    };

  case 'FETCH_MUI_FORMIK_FORM_DATA':
    return {
      ...state,
      formData: {
        first_name: 'shamseer',
        date: new Date(),
        date_time_picker: new Date(),
        agreement: true,
        do_you_agree: true,
        group_checkbox: ['first_nick_name'],
        gender: [{ label: 'Male', value: 1 }],
        select: '',
        age_range: 2,
        agency: {
          'id': 5,
          'name': 'tigerlily',
          'year': 2004,
          'color': '#E2583E',
          'pantone_value': '17-1456'
        },
        radioGroup: 'radioOption2'
      }
    };

  case 'SUBMIT_FORMIK_FROM_CUSTOM_HOOK':
    return {
      ...state,

    };

  default:
    return state;
  }
};

export default generalReducer;