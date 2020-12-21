import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  LandingPage,
  UserRegister,
  UserLogin,
  Signin,
  Login,
  MainDashboard
} from '../imports';

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={Login} />
        <Route path="/admin/dashboard" component={MainDashboard} />
        <Route path="/admin/register" component={Signin} />
        <Route path="/account/login" component={UserLogin} />
        <Route path="/account/register" component={UserRegister} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRoutes;
