export const SET_DATAS = 'SET_DATAS';
export const SET_RECIPES = 'SET_RECIPES';
export const SET_CATEGORY = 'SET_CATEGORY';

export const setDatas = (datas) => ({
  type: SET_DATAS,
  datas,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const setRecipes = (category, recipes) => ({
  type: SET_RECIPES,
  category,
  recipes,
});
