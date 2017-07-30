import * as actionTypes from './actionTypes';

function setGeolocation(position) {
  return {
    type: actionTypes.SET_GEOLOCATION,
    position,
  };
}

function setGeolocationError(error) {
  return {
    type: actionTypes.SET_GEOLOCATION_ERROR,
    error,
  };
}

export default function getAndSetCurrentGeolocation() {
  return dispatch => navigator.geolocation.getCurrentPosition(
      ({ coords }) => dispatch(setGeolocation(coords)),
      ({ message }) => dispatch(setGeolocationError(message)), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
}
