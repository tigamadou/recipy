import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/app.scss';
import App from './containers/App/App';
import storeReducer from './redux/store';

const store = storeReducer();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <ToastContainer />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
