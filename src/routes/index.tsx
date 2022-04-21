import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/index';
import Home from '../pages/Home/index';
import Assisted from '../pages/Assisteds/index';
import Events from '../pages/Events/index';
import Profile from '../pages/Profile/index';
import Layout from '../components/Layout/index';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
    </Switch>
    <Route
      render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/assisted' component={Assisted} />
            <Route path='/events' component={Events} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </Layout>
      )}
    />
  </BrowserRouter>
);
export default routes;
