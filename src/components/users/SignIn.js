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
    <div className="container-signin">
        <h1>Fetchmate</h1>
      <form className="signin" onSubmit={handleSubmit}>
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
      </form>

      <button className="google-login-button" onClick={signInWithGoogle}>Continue With Google</button>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default withRouter(SignIn);
