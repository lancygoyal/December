import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import UserProfile from '../containers/UserProfile';
// import Footer from '../components/Footer';
// import Header from '../components/LeftSidebar';
// import RightSidebar from '../components/RightSidebar';

export default store => {
  // const state = store.getState();
  // /*********** Check authentications ***********/
  // const requireAuth = () => {
  //   if (!state.user.loggedIn) {
  //     window.location.href = '/';
  //   }
  // };

  return (
    <div className="wrapper">
      <div className="main-panel">
        <Route exact={true} path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={UserProfile} />
      </div>
    </div>
  );
};

// export default store => {
//   const state = store.getState();
//   /*********** Check authentications ***********/
//   const requireAuth = () => {
//     if (!state.user.loggedIn) {
//       window.location.href = '/';
//     }
//   };

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="main-panel">
//         <RightSidebar />
//         <Route exact={true} path="/dashboard" component={Dashboard} />
//         <Route exact path="/profile" component={UserProfile} />
//         <Footer />
//       </div>
//     </div>
//   );
// };
