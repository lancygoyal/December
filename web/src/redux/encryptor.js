import createEncryptor from 'redux-persist-transform-encrypt';
//import createEncryptor from 'redux-persist-transform-encrypt/async';

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key-sortie-web'
});

export default encryptor;
