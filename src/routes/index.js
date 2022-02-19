import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Login from "../pages/Login/index";
import Home from "../pages/Home/index";

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);
export default routes;
