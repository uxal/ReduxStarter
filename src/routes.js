import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/common/scroll-to-top';

// import the components here
import Home from './components/home';

export default () => (
  <Switch>
    <ScrollToTop>
      <Route exact path="/" component={Home} />
    </ScrollToTop>
  </Switch>
);