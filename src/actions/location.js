import { reset } from 'redux-form';
import * as actionTypes from './actionTypes';
import firebase from '../firebase';

const FIREBASEURL = 'locations';


export const beginToFetchLocations = () => ({
  type: actionTypes.FETCH_LOCATIONS_REQUEST,
});

export const receivedLocations = () => ({
  type: actionTypes.FETCH_LOCATIONS_SUCCESS,
});

export const addLocation = location => ({
  type: actionTypes.ADD_LOCATION,
  payload: location,
});

export const beginToSaveLocation = () => ({
  type: actionTypes.SAVE_LOCATION_PENDING,
});

export const saveLocationSuccess = () => ({
  type: actionTypes.SAVE_LOCATION_SUCCESS,
});

export const editLocation = location => ({
  type: actionTypes.EDIT_LOCATION,
  payload: location,
});

export const removeLocation = id => ({
  type: actionTypes.REMOVE_LOCATION,
  payload: id,
});

export const updateFormModeToEdit = id => ({
  type: actionTypes.UPDATE_MODE_EDIT,
  payload: id,
});


export function receiveLocations(locations) {
  return (dispatch) => {
    Object.values(locations).forEach(location => dispatch(addLocation(location)));

    dispatch(receivedLocations());
  };
}

export function fetchLocations() {
  return (dispatch) => {
    dispatch(beginToFetchLocations());

    firebase.database()
      .ref('locations')
      .on('value', (snapshot) => {
        setTimeout(() => {
          const locations = snapshot.val() || [];
          dispatch(receiveLocations(locations));
        }, 0);
      });
  };
}

export function saveLocation(location) {
  return (dispatch) => {
    dispatch(beginToSaveLocation());

    const locationSaved = {
      street: location.street,
      ward: location.ward,
      district: location.district,
      city: location.city,
      country: location.country,

      longitude: location.longitude,
      latitude: location.latitude,
    };

    const newLocationRef = firebase.database().ref(FIREBASEURL).push();
    locationSaved.id = newLocationRef.key;

    newLocationRef.set(locationSaved)
      .then(() => {
        dispatch(addLocation(locationSaved));
        dispatch(saveLocationSuccess());
        dispatch(reset('locationCreate'));
      }).catch(() => {
        console.log('Synchronization failed');
      });
  };
}

export function updateLocation(location) {
  return (dispatch) => {
    // Get a key for a new Post.
    const newPostKey = firebase.database().ref().child(FIREBASEURL).push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates[`/${FIREBASEURL}/${newPostKey}`] = location;
    firebase.database().ref().update(updates)
      .then(() => {
        dispatch(editLocation(location));
      })
      .catch((error) => {
        console.log(`Remove failed: ${error.message}`);
      });
  };
}

export function deleteLocation(id) {
  return (dispatch) => {
    const locationUrl = `${FIREBASEURL}/${id}`;
    const locationRef = firebase.database().ref(locationUrl);

    locationRef.remove()
      .then(() => {
        dispatch(removeLocation(id));
      })
      .catch((error) => {
        console.log(`Remove failed: ${error.message}`);
      });
  };
}