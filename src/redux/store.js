import { createStore, combineReducers } from 'redux';
import { dataReducer, recipeReducer } from './reducers/index';

const storeReducer = () => createStore(combineReducers({
  datas: dataReducer,
  recipes: recipeReducer,
}));

export default storeReducer;
