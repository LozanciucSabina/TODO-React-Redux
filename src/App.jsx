import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Components/Auth";
import { paths } from "./Components/paths";

const App = () => {
  const { home, logIn, signUp } = paths;
  return (
    <AuthProvider>
      <div className="navigation-block"></div>
      <div className="bg-name-container">
        <div className="bg-desktop-light"></div>
        <div className="app-name">TODO APP</div>
      </div>
      <Router>
        <Switch>
          <Route exact path={home} component={Home} />
          <Route exact path={logIn} component={LogIn} />
          <Route exact path={signUp} component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
