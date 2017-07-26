import * as actionTypes from '../actions/actionTypes';

const initialState = {
  position: {},
  enabled: undefined,
};


export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_GEOLOCATION:
      return Object.assign({}, state, {
        position: action.position,
        enabled: true,
      });
    case actionTypes.SET_GEOLOCATION_ERROR:
      return Object.assign({}, state, {
        enabled: false,
      });
    default:
      return state;
  }
}
