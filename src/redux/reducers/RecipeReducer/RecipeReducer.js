import * as types from '../../actions/types';

const RecipeReducer = (previousState = [], action) => {
  switch (action.type) {
    case types.CREATE_RECIPE:
      return [...previousState, action.recipe];
    default:
      return previousState;
  }
};

export default RecipeReducer;
