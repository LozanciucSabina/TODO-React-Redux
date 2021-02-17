import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import AuthenticationMessage from "./AuthenticationMessage";
import { AuthContext } from "./Auth";
import { createUser } from "./user/utils";
import { signUpLabel, signUpMessage, logInLabel } from "./constants";
import { paths } from "./paths";

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);
  const { logIn, home } = paths;

  if (currentUser) {
    return <Redirect to={home} />;
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
