import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../redux';

export default () => {
  const store = createStore(reducer, compose(applyMiddleware(thunk, routerMiddleware(history))));
  const persistor = persistStore(store);
  return { persistor, store };
};
