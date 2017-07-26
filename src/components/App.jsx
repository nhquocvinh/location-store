import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './common/Home';
import About from './common/About';
import NotFound from './common/NotFound';

import Introduction from './layouts/Introduction';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <Introduction />

      <div className="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default App;
