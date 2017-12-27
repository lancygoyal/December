import user from './modules/user';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import encryptor from './encryptor';

const storeConfig = {
  key: 'primary',
  storage: storage,
  transforms: [encryptor]
};

export default persistCombineReducers(storeConfig, {
  user
});
