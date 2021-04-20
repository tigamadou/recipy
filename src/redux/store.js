import { createStore, combineReducers } from 'redux';
import { dataReducer, categoryReducer } from './reducers/index';

const storeReducer = () => createStore(combineReducers({
  datas: dataReducer,
  category: categoryReducer,
}));

export default storeReducer;
