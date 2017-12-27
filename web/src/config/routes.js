import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
// import Header from '../components/LeftSidebar';
// import Sidebar from '../components/Sidebar';

export default store => {
  // const state = store.getState();
  // const requireAuth = () => {
  //   if (!state.user.loggedIn) {
  //     window.location.href = '/signin';
  //   }
  // };
  return (
    <div className="wrapper">
      <div className="main-panel">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </div>
  );
};
