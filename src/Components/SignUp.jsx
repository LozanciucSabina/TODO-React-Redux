import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";
import { AuthMessage } from "./AuthenticationMessage";
import { createUser } from "./utils";
import { signupStr, signUpMessage, loginStr } from "./constants";
import { paths } from "./paths";

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);
  const { login, dashboard } = paths;

  if (currentUser) {
    return <Redirect to={dashboard} />;
  }
  return (
    <AuthMessage
      componentName={signupStr}
      submitHandler={createUser}
      path={login}
      message={signUpMessage}
      redirectLinkName={loginStr}
    />
  );
};

export default SignUp;
