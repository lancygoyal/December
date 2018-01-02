import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import App from '../containers/App';
import Dashboard from '../containers/Dashboard';
import FormPage from '../containers/FormPage';
import TablePage from '../containers/TablePage';
import NotFoundPage from '../containers/NotFoundPage.js';

export default store => {
  // const state = store.getState();
  // const requireAuth = () => {
  //   if (!state.user.loggedIn) {
  //     window.location.href = '/signin';
  //   }
  // };
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <App>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/form" component={FormPage} />
          <Route exact path="/table" component={TablePage} />
        </App>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
