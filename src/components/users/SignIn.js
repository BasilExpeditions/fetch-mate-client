import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
  generateUserDocument,
} from "../../firebase/firebase";

const SignIn = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await auth.signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      console.log("user signed in");
      generateUserDocument(user);
      this.props.history.push("/");
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
    <div className="container-signin">
      <form className="signin" onSubmit={handleSubmit}>
              <h1 className="signin-fetchmate">Fetchmate</h1>
        <input className="signin-input"
          type="email"
          name="email"
          placeholder="example@domain.com"
          value={inputs.email}
          onChange={handleChange}
        />
        <input className="signin-input"
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button className="signin-button" type="submit">Sign In</button>
      <button className="google-login-button" onClick={signInWithGoogle}>Continue With Google</button>
      <button className="signup-button"><Link className="navlink-signup" to="/signup">Sign Up</Link></button>
      </form>
    </div>
    </div>
  );
};

export default withRouter(SignIn);
