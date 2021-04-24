import * as types from '../types';

const SetRecipes = (category, recipes) => ({
  type: types.SET_RECIPES,
  category,
  recipes,
});

export default SetRecipes;
