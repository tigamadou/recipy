import * as types from '../actions/types';

export const dataReducer = (previousState = [], action) => {
  switch (action.type) {
    case types.SET_DATAS:
      return action.datas;
    case types.SET_RECIPES:
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
    case types.CREATE_RECIPE:
      return [...previousState, action.recipe];
    default:
      return previousState;
  }
};

export const headerReducer = (previousState = { back: false, title: 'Recipely' }, action) => {
  switch (action.type) {
    case types.SET_HEADER:
      return action.header;
    default:
      return previousState;
  }
};
