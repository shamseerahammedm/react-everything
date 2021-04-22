import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';

// Section Starts :: redux part  -- 
import { Provider } from 'react-redux';
import { store } from './redux/redux-files/store';
// Section Starts :: redux part  -- 

// Section Starts :: materil ui part -- 
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from './utils/constants';
// Section Starts :: materil ui part -- 

// Section Starts :: jquery integration -- 
window.jQuery = window.$ = $;
// Section Starts :: jquery integration -- 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
