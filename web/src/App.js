import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Routes from './config/routes';
import Loader from './components/Loader';
import configureStore from './config/configureStore';

const history = createHistory();
const { persistor, store } = configureStore(history);

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader loading={true} />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Routes {...store} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};
