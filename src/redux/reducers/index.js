import { SET_DATAS, CREATE_RECIPE, SET_RECIPES } from '../actions/index';

export const dataReducer = (previousState = [], action) => {
  switch (action.type) {
    case SET_DATAS:
      return action.datas;
    case SET_RECIPES:
      return previousState.map((data) => {
        if (data.strCategory === action.category) {
          return {
            ...data,
            recipes: action.recipes,
          };
        }

        return data;
      });
    default:
      return previousState;
  }
};

export const recipeReducer = (previousState = [], action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return [...previousState, action.recipe];
    default:
      return previousState;
  }
};
