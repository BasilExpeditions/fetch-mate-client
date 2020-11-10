import React, { useContext } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

import Home from "./Home";
import SignIn from "./users/SignIn";
import SignUp from "./users/SignUp";

const Navigation = () => {
  const user = useContext(UserContext);
  return user ? (
    <Home />
  ) : (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Navigation;
