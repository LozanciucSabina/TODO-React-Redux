import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Components/Auth";
import {
  signupPath,
  loginPath,
  homePath,
  dashboardPath,
} from "./Components/paths";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path={homePath} component={Home} />
          <Route exact path={dashboardPath} component={Dashboard} />
          <Route exact path={loginPath} component={LogIn} />
          <Route exact path={signupPath} component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
