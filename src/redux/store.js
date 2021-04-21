import { createStore, combineReducers } from 'redux';
import { dataReducer, recipeReducer, ingredientReducer } from './reducers/index';

const storeReducer = () => createStore(combineReducers({
  datas: dataReducer,
  recipes: recipeReducer,
  ingredients: ingredientReducer,
}));

export default storeReducer;
