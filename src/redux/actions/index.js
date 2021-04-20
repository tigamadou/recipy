export const SET_DATAS = 'SET_DATAS';
export const SET_RECIPES = 'SET_RECIPES';
export const CREATE_RECIPE = 'SET_MEALS';

export const setDatas = (datas) => ({
  type: SET_DATAS,
  datas,
});

export const createRecipe = (recipe) => ({
  type: CREATE_RECIPE,
  recipe,
});

export const setRecipes = (category, recipes) => ({
  type: SET_RECIPES,
  category,
  recipes,
});
