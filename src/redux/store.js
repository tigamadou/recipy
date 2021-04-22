import { createStore, combineReducers } from 'redux';
import DataReducer from './reducers/DataReducer/DataReducer';
import RecipeReducer from './reducers/RecipeReducer/RecipeReducer';
import HeaderReducer from './reducers/HeaderRecuder/HeaderReducer';

const storeReducer = () => createStore(combineReducers({
  datas: DataReducer,
  recipes: RecipeReducer,
  header: HeaderReducer,
}));

export default storeReducer;
