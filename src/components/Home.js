import React, { useContext } from "react";
import { auth } from "../firebase/firebase";
import { UserContext } from "../providers/UserProvider";
import SaveCurrentLocation from "./navigation/SaveCurrentLocation";
import GetNearbyUsers from "./navigation/GetNearbyUsers";
import SwipeCard from "./SwipeCard";

const Home = () => {

  //async function on the home page
  SaveCurrentLocation();
  GetNearbyUsers();

  const user = useContext(UserContext);
  return (
    <div>
      <div className="container">
        <div className="child">
          <h4>
            Welcome {user.displayName}
            <button
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign out
            </button>
          </h4>
          <SwipeCard />
        </div>
      </div>

    </div>
  );
};
export default Home;
