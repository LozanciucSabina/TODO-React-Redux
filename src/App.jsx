import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Components/Auth";
import { paths } from "./Components/paths";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";

import "./styles/style.css";

const App = () => {
  const { home, logIn, signUp } = paths;
  const [currentTheme, setCurrentTheme] = useState("light");

  function changeTheme(e) {
    e.preventDefault();
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AuthProvider>
        <div className="header"></div>
        <div className="todo-app">
          <div className="todo-app__bg-image"></div>
          <div className="todo-app__title">
            TODO APP
            <button className="todo-app__theme" onClick={changeTheme}>
              <img src={currentTheme === "light" ? moon : sun} alt="" />
            </button>
          </div>
        </div>
        <Router>
          <Switch>
            <Route exact path={home} component={Home} />
            <Route exact path={logIn} component={LogIn} />
            <Route exact path={signUp} component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
