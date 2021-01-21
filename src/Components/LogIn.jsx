import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import AuthenticationMessage from "./AuthenticationMessage";
import { AuthContext } from "./Auth";
import { logInUser } from "./user/utils";
import { logInLabel, logInMessage, signUpLabel } from "./constants";
import { paths } from "./paths";

const LogIn = () => {
  const { currentUser } = useContext(AuthContext);
  const { signUp, home } = paths;

  if (currentUser) {
    return <Redirect to={home} />;
  }

  return (
    <AuthenticationMessage
      componentName={logInLabel}
      submitHandler={logInUser}
      path={signUp}
      message={logInMessage}
      redirectLinkName={signUpLabel}
    />
  );
};

export default LogIn;
