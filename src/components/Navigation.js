import React, { useContext } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

import SignIn from "./users/SignIn";
import SignUp from "./users/SignUp";
import SwipeCard from "./SwipeCard";
import Chat from "./Messaging/Chat";
import ProfileView from "./ProfileView";
import Connect from "./Connect";

  const Navigation = () => {
    const user = useContext(UserContext);
    return user ? (
      <Switch>
        <Route exact path="/" component={SwipeCard} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={ProfileView} />
        <Route path="/connect" component={Connect} />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    );
  };

export default Navigation;
