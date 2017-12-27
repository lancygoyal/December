import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Routers from './config/Routers';
import Loader from './components/Loader';
import configureStore from './config/configureStore';

const history = createHistory();
const { persistor, store } = configureStore(history);

export default () => {
  return (
    <Provider store>
      <PersistGate loading={<Loader loading={true} />} persistor={persistor}>
        <Router history={history}>
          <Routers store />
        </Router>
      </PersistGate>
    </Provider>
  );
};
