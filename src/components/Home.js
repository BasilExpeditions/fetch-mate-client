import React from "react";
import { auth } from "../firebase/firebase";
import { UserContext } from "../providers/UserProvider";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div>
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
