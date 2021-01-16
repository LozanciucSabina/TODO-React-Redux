import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "./Auth";
import SignUp from "./SignUp";
import { signOutButton } from "./utils";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  let messageNode;
  if (currentUser) {
    messageNode = (
      <p>
        You are logged, do you want to Sign Out ?{signOutButton}
        <br />
        Also, do you want to write a task?
        <br />
        <Link to="/dashboard">Go and write a task</Link>
      </p>
    );
  } else {
    messageNode = <SignUp />;
  }

  return (
    <>
      <h1>Home</h1>
      {messageNode}
    </>
  );
};

export default Home;
