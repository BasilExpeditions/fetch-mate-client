import React, { useContext } from "react";
import { auth } from "../firebase/firebase";
import { UserContext } from "../providers/UserProvider";
import Location from './Location'

const Home = () => {
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

      <Location />
    </div>
  );
};

export default Home;
