import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import App from '../containers/App';
import Dashboard from '../containers/Dashboard';
import FormPage from '../containers/FormPage';
import TablePage from '../containers/TablePage';
import NotFoundPage from '../containers/NotFoundPage.js';

const requireAuth = store => {
  return store.getState().user.isLoggedIn;
};

const PublicLayout = ({ component: Component }) => {
  return (
    <div className="UserScreens">
      <Component />
    </div>
  );
};

const PrivateLayout = ({ component: Component }) => {
  return (
    <App>
      <Component />
    </App>
  );
};

const PublicRoute = ({ component, ...rest }) => {
  return <Route {...rest} render={props => <PublicLayout component={component} {...props} />} />;
};

const PrivateRoute = ({ component, store, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      requireAuth(store) ? (
        <PrivateLayout component={component} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default store => {
  return (
    <Switch>
      <PublicRoute exact path="/signin" component={SignIn} />
      <PublicRoute exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/" component={Dashboard} store={store} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} store={store} />
      <PrivateRoute exact path="/form" component={FormPage} store={store} />
      <PrivateRoute exact path="/table" component={TablePage} store={store} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
