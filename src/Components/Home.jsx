import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Link } from "react-router-dom";

import SignUp from "./SignUp";
import app from "../firebase.js";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <h1>Landing</h1>
      {currentUser ? (
        <p>
          You are logged, do you want to Sign Out ?
          <button onClick={() => app.auth().signOut()}>Sign out</button>
          Also, do you want to write a task?
          <Link to="/dashboard">Go and write a task</Link>
        </p>
      ) : (
        <>
          <SignUp />
        </>
      )}
    </>
  );
};

export default Home;
