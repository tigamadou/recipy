import { SET_DATA } from '../actions/index';

const dataReducer = (previousState = [], action) => {
  switch (action.type) {
    case SET_DATA:
      return action.data;
    default:
      return previousState;
  }
};

export default dataReducer;
