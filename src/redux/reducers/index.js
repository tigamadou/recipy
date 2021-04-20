import { SET_DATAS, SET_CATEGORY } from '../actions/index';

export const dataReducer = (previousState = [], action) => {
  switch (action.type) {
    case SET_DATAS:
      return action.datas;
    default:
      return previousState;
  }
};

export const categoryReducer = (previousState = {}, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return previousState;
  }
};
