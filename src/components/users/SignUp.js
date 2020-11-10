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
    <div className="signUpContainer">
      <form onSubmit={handleSubmit}>


        <div>
          <input className="input-container"
            type="email"
            name="email"
            placeholder="example@domain.com"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
          <div>
            <input className="input-container"
              type="password"
              name="password"
              placeholder="password"
              value={inputs.password}
              onChange={handleChange}
            />
        </div>


        <input
          type="text"
          name="displayName"
          placeholder="John Citizen"
          value={inputs.displayName}
          onChange={handleChange}
        />
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

        <button type="submit">Sign Up</button>
      </form>

      <div>
        <button onClick={signInWithGoogle}>Continue With Google</button>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
