import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import AuthenticationMessage from "./AuthenticationMessage";
import { AuthContext } from "./Auth";
import { createUser } from "./utils";
import { signUpLabel, signUpMessage, logInLabel } from "./constants";
import { paths } from "./paths";

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);
  const { logIn, dashboard } = paths;

  if (currentUser) {
    return <Redirect to={dashboard} />;
  }
  return (
    <AuthenticationMessage
      componentName={signUpLabel}
      submitHandler={createUser}
      path={logIn}
      message={signUpMessage}
      redirectLinkName={logInLabel}
    />
  );
};

export default SignUp;
