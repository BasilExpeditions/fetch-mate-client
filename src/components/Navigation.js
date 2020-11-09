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
import ProfileView from './ProfileView'

const Navigation = () => {
  return (
    <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/profile">
            <ProfileView />
          </Route>

          <Route path="/swipe">
          <div className="app">
            <SwipeCard />
          </div>
          </Route>

          <Route path="/connect">
            <Connect />
          </Route>

        </Switch>
    </Router>
  )
}

export default Navigation;
