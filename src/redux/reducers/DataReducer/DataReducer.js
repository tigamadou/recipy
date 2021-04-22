import * as types from '../../actions/types';

const DataReducer = (previousState = [], action) => {
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

export default DataReducer;
