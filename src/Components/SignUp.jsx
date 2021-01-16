import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";
import { createUser } from "./utils";
import { loginPath } from "./paths";
import { Message } from "./utils";

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Message
      componentName="Sign Up"
      submitHandler={createUser}
      path={loginPath}
    />
  );
};

export default SignUp;
