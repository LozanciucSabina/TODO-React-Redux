import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "./Auth";
import { signOut } from "./user/utils";
import { paths } from "./paths";
import TodosSection from "./TodosSection";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const { logIn } = paths;

  if (!currentUser) {
    return <Redirect to={logIn} />;
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        You are logged, do you want to Sign Out ?
        <button onClick={signOut}>Sign out</button>
        <br />
      </p>
      <TodosSection />
    </>
  );
};

export default Home;
