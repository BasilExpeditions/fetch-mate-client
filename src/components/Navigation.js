import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Dashboard from './Dashboard'
import SwipeCard from './SwipeCard'


const Navigation = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/swipe">
            <SwipeCard />
          </Route>
          <Route path="/connect">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  )
}

export default Navigation;
