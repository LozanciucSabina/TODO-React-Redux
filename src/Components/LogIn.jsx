import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";
import { logInUser } from "./utils";
import { signupPath } from "./paths";
import { Message } from "./utils";

const LogIn = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <Message
      componentName="Log In"
      submitHandler={logInUser}
      path={signupPath}
    />
  );
};

export default LogIn;
