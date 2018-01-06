import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Routes from './config/routes';
import Loader from './components/Loader';
import configureStore from './config/configureStore';
import { configureRestClient } from './utilities/rest';
import ThemeDefault from './constants/theme-default';

const history = createHistory();
const { persistor, store } = configureStore(history);

configureRestClient(store);

export default () => {
  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <Provider store={store}>
        <PersistGate loading={<Loader loading={true} />} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Routes {...store} />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  );
};
