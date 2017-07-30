import React from 'react';

import AppHeader from './layouts/Header';
import Introduction from './layouts/Introduction';
import Body from './layouts/Body';
import Footer from './layouts/Footer';

import './AppStyle.css';

const App = () => (
  <div>
    <AppHeader />
    <Introduction />
    <Body />
    <Footer />
  </div>
);

export default App;
