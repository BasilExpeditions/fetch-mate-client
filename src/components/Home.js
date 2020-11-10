import React, { useContext } from "react";
import { auth } from "../firebase/firebase";
import { UserContext } from "../providers/UserProvider";
import Location from './Location'


const Home = () => {
  const user = useContext(UserContext);
  return (
    <div>
<<<<<<< HEAD
      <h1>Welcome {user.displayName}</h1>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>

      <Location />
=======
      <div className="container">
        <div className="child">
          <h4>Welcome {user.displayName}
          <button
            onClick={() => {
              auth.signOut();
            }}>
            Sign out
          </button>
        </h4>
        </div>
      </div>
>>>>>>> b876cb2b52cedbe67c78ab7101a7e222f40d216f
    </div>
  );
};

export default Home;
