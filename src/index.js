import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './routers/AppRouter';
import storeReducer from './redux/store';

const store = storeReducer();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
    <ToastContainer />
  </Provider>,
  document.getElementById('root'),
);
