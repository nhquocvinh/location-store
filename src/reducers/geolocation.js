import * as actionTypes from '../actions/actionTypes';

const initialState = {
  latitude: null,
  longitude: null,
  enabled: false,
};


export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_GEOLOCATION:
      return Object.assign({}, state, {
        latitude: action.position.latitude,
        longitude: action.position.longitude,
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
