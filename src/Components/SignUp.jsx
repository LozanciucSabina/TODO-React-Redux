import React, { useContext } from "react";
import { Redirect, Link } from "react-router-dom";

import { AuthContext } from "./Auth";
import { createUser } from "./utils";
import AuthenticationForm from "./AuthenticationForm";

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <h1>Sign Up</h1>
      <AuthenticationForm submit={createUser} />
      <p>
        Do you have an account already? <Link to="/login">Log In</Link>
      </p>
    </>
  );
};

export default SignUp;
