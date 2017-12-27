import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../redux';

export default () => {
  const store = createStore(
    reducer,
    compose(applyMiddleware(thunk, promiseMiddleware(), routerMiddleware(history)))
  );
  const persistor = persistStore(store);
  return { persistor, store };
};
