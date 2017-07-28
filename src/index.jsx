import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './store/configureStore';

import { setUserName } from './actions/user';
import { fetchLocations } from './actions/location';

import App from './components/App';


const store = configureStore();

store.dispatch(setUserName('anonymous'));
store.dispatch(fetchLocations());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
