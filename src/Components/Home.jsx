import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";
import { signOut } from "./userUtils";
import { paths } from "./paths";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const { dashboard, signUp } = paths;

  let messageNode;
  if (currentUser) {
    messageNode = (
      <p>
        You are logged, do you want to Sign Out ?
        <button onClick={signOut}>Sign out</button>
        <br />
        Also, do you want to write a task?
        <br />
        <Link to={dashboard}>Go and write a task</Link>
      </p>
    );
  } else {
    return <Redirect to={signUp} />;
  }

  return (
    <>
      <h1>Home</h1>
      {messageNode}
    </>
  );
};

export default Home;
