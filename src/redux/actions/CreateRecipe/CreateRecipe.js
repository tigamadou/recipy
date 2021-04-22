import * as types from '../types';

const CreateRecipe = (recipe) => ({
  type: types.CREATE_RECIPE,
  recipe,
});

export default CreateRecipe;
