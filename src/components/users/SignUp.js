import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
  generateUserDocument,
} from "../../firebase/firebase";
const SignUp = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      //Information(location) and Input(currentUser) clashing and not saving. Also, not sure if SaveCurrentLocation is saving Information in the right collection - Tried to access
      // firebase.firestore.Information.location.GeoPoint(crd.latitude, crd.longitude)
      //

      //Navigation needs to be fixed
      //Styling needs to be fixed
      //Storing images

      //SignIn => ProfileView( => ChatList & SwipeCard )
      //ChatList => IndividualMessage(Go Back to CurrentUserProfile)
      //ChatNewMatches Automatically come up (Ha ha ha)
      generateUserDocument(user, { displayName: inputs.displayName });
      this.props.history.push("/");
      console.log("user created");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="example@domain.com"
          value={inputs.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password}
          onChange={handleChange}
        />

        <input
          type="text"
          name="displayName"
          placeholder="John Citizen"
          value={inputs.displayName}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>

      <button onClick={signInWithGoogle}>Continue With Google</button>
    </div>
  );
};
export default withRouter(SignUp);
