import React, { useContext } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

import Home from "./Home";
import SignIn from "./users/SignIn";
import SignUp from "./users/SignUp";
import SwipeCard from "./SwipeCard";
import Chat from "./Messaging/Chat";
import ProfileView from "./ProfileView";
import Connect from "./Connect";
import { auth } from "../firebase/firebase";


const Navigation = () => {
  const user = useContext(UserContext);
  return user ? (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/swipe" component={SwipeCard} />
      <Route path="/chat" component={Chat} />
      <Route path="/profileView" component={ProfileView} />
      <Route path="/connect" component={Connect} />
    </Switch>
  ) : (
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Navigation;
