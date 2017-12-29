import user from './modules/user';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import encryptor from './encryptor';

const userPersistConfig = {
  key: 'user',
  storage: storage,
  transforms: [encryptor]
};

export default combineReducers({
  user: persistReducer(userPersistConfig, user),
  router: routerReducer
});
