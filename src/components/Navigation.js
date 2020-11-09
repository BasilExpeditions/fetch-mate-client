import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './Home'
import Connect from './Connect'
import SwipeCard from './SwipeCard'
import Chat from './Messaging/Chat'


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
            <Connect />
          </Route>

        </Switch>
    </Router>
  )
}

export default Navigation;
