import React, { useContext } from "react";
import { auth } from "../firebase/firebase";
import { UserContext } from "../providers/UserProvider";
import { withRouter} from "react-router-dom";

const Home = () => {

  const user = useContext(UserContext);
  return (
    <div>
      <div className="container">
        <div className="child">
          <h4>
            Welcome {user.displayName} to Fetch Mate
            <button
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign out
            </button>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Home);
