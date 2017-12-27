import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../redux';

const logger = store => next => action => {
  //console.log('action',action)
  return next(action);
};

export default history => {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(logger, thunk, promiseMiddleware(), routerMiddleware(history))
    )
  );
  const persistor = persistStore(store, {});
  return { persistor, store };
};
