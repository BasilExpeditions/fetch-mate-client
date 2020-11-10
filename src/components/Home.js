import React, { useContext } from "react";
import { auth } from "../firebase/firebase";
import { UserContext } from "../providers/UserProvider";
import SaveCurrentLocation from "./navigation/SaveCurrentLocation";

const Home = () => {
  SaveCurrentLocation();
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Welcome {user.displayName}</h1>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Home;
