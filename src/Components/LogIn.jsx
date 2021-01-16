import React, { useContext } from "react";
import { Redirect, Link } from "react-router-dom";

import { AuthContext } from "./Auth";
import { logInUser } from "./utils";
import AuthenticationForm from "./AuthenticationForm";

const LogIn = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <h1>Log In</h1>
      <AuthenticationForm submit={logInUser} />
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </>
  );
};

export default LogIn;
