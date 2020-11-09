import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

import Home from "./Home";
import SignUp from "./users/SignUp";

const Navigation = () => {
  const user = useContext(UserContext);
  return user ? (
    <Home />
  ) : (
    <Router>
      <SignUp />
    </Router>
  );
};

export default Navigation;
