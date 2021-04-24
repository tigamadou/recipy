import * as types from '../../actions/types';

const HeaderReducer = (previousState = { back: false, title: 'Recipy' }, action) => {
  switch (action.type) {
    case types.SET_HEADER:
      return action.header;
    default:
      return previousState;
  }
};

export default HeaderReducer;
