import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
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
