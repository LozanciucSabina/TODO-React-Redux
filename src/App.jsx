import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Components/Auth";
import { paths } from "./Components/paths";

const App = () => {
  const { home, dashboard, login, signup } = paths;
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path={home} component={Home} />
          <Route exact path={dashboard} component={Dashboard} />
          <Route exact path={login} component={LogIn} />
          <Route exact path={signup} component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
