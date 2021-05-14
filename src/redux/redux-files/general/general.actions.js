import generalTypes from './general.types';
import axios from 'axios';
import { random } from 'lodash-es';

export const authStart = () => ({
  type : generalTypes.AUTH_START
});

export const authSuccess = (authData) => ({
  type : generalTypes.AUTH_SUCCESS,
  payload : authData
});

export const authFailure = (error) => ({
  type : generalTypes.AUTH_FAILURE,
  payload : error
});

export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  return {
    type : generalTypes.LOG_OUT,
  };
};

export const checkAuthTimeOut = (expirationTimeout) => {
  return dispatch => {
    setTimeout(()=>{
      dispatch(logOut());
    }, expirationTimeout * 1000); // set time out expects milli seconds so we need to covert it thats why multiply with 1000 to convert to seconds
  };
};

export const authAsync = (email, password, method) => {
  return dispatch => {
    dispatch(authStart());
    const key = 'AIzaSyDxQbpsQXKdhPlxofZ-IToIe9zY40uxTW8'; 
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
    if( method === 'signup')
    {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
    }
    const authData = {
      email : email,
      password : password,
      returnSecureToken : true
    };
    axios.post(url, authData).then( response => {
      const expirationDate = new Date( new Date().getTime() + (response.data.expiresIn * 1000) ); // current time + expiry time seconds
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('userId', response.data.localId);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(response.data));
      dispatch(checkAuthTimeOut(response.data.expiresIn));
    })
      .catch( error => {
        authFailure(error);
      });
  };
};

export const checkAuthState = () => {
  return dispatch => {
    const expirationData = localStorage.getItem('expirationDate');
    const token = localStorage.getItem('token'); 
    // retreaved value is in string from localstorage, wraping it with date again convert it to date object
    const expirationDate = new Date (expirationData); 
    const currentDateNow = new Date();

    console.log({ expirationDate, currentDateNow });
    if(!token)
    {
      dispatch(logOut());
    }
    else
    {
      if( expirationDate > currentDateNow)
      {
        const expirationTimeConverted = (expirationDate.getTime() - currentDateNow.getTime()) / 1000;
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess({ idToken : token, localId : userId }));
        dispatch(checkAuthTimeOut(expirationTimeConverted));
                
      }
      else
      {
        alert('logout');
      }
    }
      
  };
};

export const getDataAsync = () => {
  return dispatch => {
    const data = {
      first_name : 'something',
      last_name : 'something_lastname',
      functions : [{ id : 1, name : 'test1' }, { id : 2, name : 'test2' }],
      reasons : [
        {
          'id': 5,
          'name': 'Item 5'
        },
        {
          'id': 1,
          'name': 'Item 1'
        }
      ]
    };
    setTimeout(()=>{
      dispatch({ type : 'FETCH_DATA', payload : data });
    }, 500);
  };
};

export const getDetailsAsync = () => {
  return dispatch => {
    const data = new Array(random(20, 50)).fill().map( (item, i) => {
      return { id : i, name : `Item ${i}` };
    });
    setTimeout(()=>{
      dispatch({ type : 'FETCH_DETAILS', payload : data });
    }, 500);
  };
};

export const fetchFunctionsOptionsAsync = () => {
  return dispatch => {
    const data = [
      { id : 1, name : 'test1' }, { id : 2, name : 'test2' },
      { id : 3, name : 'test3' }, { id : 4, name : 'test4' },
      { id : 3, name : 'test3' }, { id : 4, name : 'test4' },
      { id : 4, name : 'test4' }, { id : 5, name : 'test6' },
    ];
    setTimeout(()=>{
      dispatch({ type : 'FETCH_FUNCTIONS', payload : data });
    }, 200);
  };
};