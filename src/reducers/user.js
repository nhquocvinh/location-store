import * as actionTypes from '../actions/actionTypes';

const initialState = {
  name: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_USER_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });
    default:
      return state;
  }
};
