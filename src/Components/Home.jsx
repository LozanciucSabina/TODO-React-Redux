import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";
import { signOut } from "./utils";
import { paths } from "./paths";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const { dashboard, signup } = paths;
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
    return <Redirect to={signup} />;
  }

  return (
    <>
      <h1>Home</h1>
      {messageNode}
    </>
  );
};

export default Home;
