import { push } from 'react-router-redux';
import RestClient from '../../utilities/rest';
import { getActionTypes, getActionCreators, getReducer } from '../../utilities/redux';

// Types
export const LoginTypes = getActionTypes('LOGIN');
export const RegisterTypes = getActionTypes('REGISTER');

// Actions
// export const LoginActions = getActionCreators(LoginTypes);

export const login = data => {
  return {
    types: LoginTypes,
    callAPI: () => RestClient.post('user/login', data),
    handleAction: ({ type, payload, store }) => {
      switch (type) {
        case LoginTypes.SUCCESS:
          store.dispatch(push('/'));
          return;
      }
    }
  };
};

export const register = data => {
  return {
    types: RegisterTypes,
    callAPI: () => RestClient.post('user/register', data),
    handleAction: ({ type, payload, store }) => {
      switch (type) {
        case RegisterTypes.SUCCESS:
          store.dispatch(push('/signin'));
          return;
      }
    }
  };
};

const initialState = {
  isLoggedIn: false
};

// Reducers
export default getReducer(initialState, {
  [LoginTypes.LOADING]: (state, { type, payload }) => ({
    isLoggedIn: false,
    ...payload
  }),
  [LoginTypes.SUCCESS]: (state, { type, payload }) => ({
    isLoggedIn: true,
    ...payload
  }),
  [LoginTypes.ERROR]: (state, { type, payload }) => ({
    isLoggedIn: false
  })
});
