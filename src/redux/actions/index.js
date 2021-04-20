export const SET_DATAS = 'SET_DATAS';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_MEALS = 'SET_MEALS';

export const setDatas = (datas) => ({
  type: SET_DATAS,
  datas,
});

export const setMeals = (category) => ({
  type: SET_MEALS,
  category,
});

export const setRecipes = (category, recipes) => ({
  type: SET_RECIPES,
  category,
  recipes,
});
