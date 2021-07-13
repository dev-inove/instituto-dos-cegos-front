import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "../pages/App";

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/user" component={App} />
    </Switch>
  </BrowserRouter>
);
export default routes;
