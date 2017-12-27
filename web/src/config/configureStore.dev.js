import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../redux';
import { routerMiddleware } from 'react-router-redux';

const logger = store => next => action => {
  //console.log('action',action)
  return next(action);
};

export default history => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, thunk, routerMiddleware(history)))
  );
  const persistor = persistStore(store, {});
  return { persistor, store };
};
