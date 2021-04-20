import { SET_DATAS, SET_CATEGORY, SET_RECIPES } from '../actions/index';

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

export const categoryReducer = (previousState = null, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return previousState;
  }
};
