import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import storeReducer from './redux/store';

const store = storeReducer();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'),
);
