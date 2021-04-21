import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/app.scss';
import App from './components/App/App';
import storeReducer from './redux/store';

const store = storeReducer();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>,
  document.getElementById('root'),
);
