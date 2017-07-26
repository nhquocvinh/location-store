import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './store/configureStore';

import { fetchLocations, saveLocation } from './actions/location';
import { setUserName } from './actions/user';
import { getAndSetCurrentGeolocation } from './actions/geolocation';

import App from './components/App';

const store = configureStore();

store.dispatch(setUserName('ANONYMOUS'));
store.dispatch(getAndSetCurrentGeolocation());
store.dispatch(fetchLocations());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
