import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../redux';

export default history => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, thunk, routerMiddleware(history)))
  );
  const persistor = persistStore(store, {});
  return { persistor, store };
};
