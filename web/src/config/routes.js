import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import EnRoute from '../components/EnRoute';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import App from '../containers/App';
import Dashboard from '../containers/Dashboard';
import FormPage from '../containers/FormPage';
import TablePage from '../containers/TablePage';
import NotFoundPage from '../containers/NotFoundPage.js';

const auth = store => {
  return store.getState().user.isLoggedIn;
};

const PublicLayout = ({ component: Component }) => (
  <div className="Default">
    <Component />
  </div>
);

const DashboardLayout = ({ component: Component }) => (
  <App>
    <Component />
  </App>
);

export default store => {
  return (
    <Switch>
      <EnRoute
        exact
        path="/signin"
        component={SignIn}
        layout={PublicLayout}
        type="user"
        auhtHandler={auth}
        to="/dashboard"
        store={store}
      />
      <EnRoute
        exact
        path="/signup"
        component={SignUp}
        layout={PublicLayout}
        type="user"
        auhtHandler={auth}
        to="/dashboard"
        store={store}
      />
      <EnRoute
        exact
        path="/"
        component={Dashboard}
        layout={DashboardLayout}
        auhtHandler={auth}
        store={store}
      />
      <EnRoute
        exact
        path="/dashboard"
        component={Dashboard}
        layout={DashboardLayout}
        auhtHandler={auth}
        store={store}
      />
      <EnRoute
        exact
        path="/form"
        component={FormPage}
        layout={DashboardLayout}
        auhtHandler={auth}
        store={store}
      />
      <EnRoute
        exact
        path="/table"
        component={TablePage}
        layout={DashboardLayout}
        auhtHandler={auth}
        store={store}
      />
      <EnRoute component={NotFoundPage} type="public" layout={PublicLayout} />
    </Switch>
  );
};
