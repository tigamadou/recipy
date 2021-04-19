import { createStore } from 'redux';
import dataReducer from './reducers/index';

const storeReducer = () => createStore(dataReducer);

export default storeReducer;
