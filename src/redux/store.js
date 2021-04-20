import { createStore, combineReducers } from 'redux';
import { dataReducer, mealReducer } from './reducers/index';

const storeReducer = () => createStore(combineReducers({
  datas: dataReducer,
  meals: mealReducer,
}));

export default storeReducer;
