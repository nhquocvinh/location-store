import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import location from './location';
import user from './user';
import geolocation from './geolocation';


export default combineReducers({
  location,
  user,
  geolocation,
  form: formReducer,
});
