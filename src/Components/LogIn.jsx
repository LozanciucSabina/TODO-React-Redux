import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";
import { AuthMessage } from "./AuthenticationMessage";
import { logInUser } from "./utils";
import { loginStr, logInMessage, signupStr } from "./constants";
import { paths } from "./paths";

const LogIn = () => {
  const { currentUser } = useContext(AuthContext);
  const { signup, home } = paths;

  if (currentUser) {
    return <Redirect to={home} />;
  }

  return (
    <AuthMessage
      componentName={loginStr}
      submitHandler={logInUser}
      path={signup}
      message={logInMessage}
      redirectLinkName={signupStr}
    />
  );
};

export default LogIn;
