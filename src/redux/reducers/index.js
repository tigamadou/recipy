import { SET_DATAS } from '../actions/index';

const dataReducer = (previousState = [], action) => {
  switch (action.type) {
    case SET_DATAS:
      return action.data;
    default:
      return previousState;
  }
};

export default dataReducer;
