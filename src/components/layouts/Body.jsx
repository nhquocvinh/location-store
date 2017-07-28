import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../common/Home';
import About from '../common/About';
import NotFound from '../common/NotFound';


const Body = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);

export default Body;
