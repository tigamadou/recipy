export const SET_HEADER = 'SET_HEADER';
export const SET_DATAS = 'SET_DATAS';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const CREATE_RECIPE = 'SET_MEALS';

export const setHeader = (back, title, search) => ({
  type: SET_DATAS,
  back,
  title,
  search,
});

export const setDatas = (datas) => ({
  type: SET_DATAS,
  datas,
});

export const setIngredients = (datas) => ({
  type: SET_INGREDIENTS,
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
