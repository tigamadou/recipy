import { createStore, combineReducers } from 'redux';
import { dataReducer, recipeReducer, headerReducer } from './reducers/index';

const storeReducer = () => createStore(combineReducers({
  datas: dataReducer,
  recipes: recipeReducer,
  header: headerReducer,
}));

export default storeReducer;
