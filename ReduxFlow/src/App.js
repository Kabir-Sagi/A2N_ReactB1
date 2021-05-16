import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import Login from "./Components/Login";
import Post from "./Components/Post";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const upDateStatus = (status) => {
    setIsLoggedIn(status);
  };
  return (
    <div className="App">
      {isLoggedIn ? (
        <BrowserRouter>
          <Navbar fnUpdate={upDateStatus} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/post" component={Post} />
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Login fnUpdate={upDateStatus} />}
            />
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
