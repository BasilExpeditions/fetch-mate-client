import React, { useContext } from "react";
import { auth } from "../firebase/firebase";
import { UserContext } from "../providers/UserProvider";

import Chat from "./Messaging/Chat";

// import SaveCurrentLocation from "./navigation/SaveCurrentLocation";
// import GetNearbyUsers from "./navigation/GetNearbyUsers";

const Home = () => {
  // SaveCurrentLocation();
  // GetNearbyUsers();

  const user = useContext(UserContext);
  return (
    <div>
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
      <Chat />
    </div>
  );
};
export default Home;
