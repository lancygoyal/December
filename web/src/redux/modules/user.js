import { push } from 'react-router-redux';
import RestClient from '../../utilities/rest';
import { getActionType, getActionTypes, getActionCreator, getReducer } from '../../utilities/redux';

// Types
export const NavToggle = getActionTypes('TOGGLE');
export const LoginTypes = getActionTypes('LOGIN');
export const RegisterTypes = getActionTypes('REGISTER');
export const LogoutTypes = getActionTypes('LOGOUT');

// Actions
export const toggle = getActionCreator(NavToggle);

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

export const logout = () => {
  return {
    types: LogoutTypes,
    callAPI: () => RestClient.put('user/logout'),
    handleAction: ({ type, payload, store }) => {
      switch (type) {
        case LogoutTypes.SUCCESS:
          store.dispatch(push('/signin'));
          return;
      }
    }
  };
};

const initialState = {
  isLoggedIn: false,
  navDrawerOpen: true
};

// Reducer
export default getReducer(initialState, {
  [NavToggle]: (state, { type, payload }) => ({
    ...state,
    navDrawerOpen: !state.navDrawerOpen
  }),
  [LoginTypes.SUCCESS]: (state, { type, payload }) => ({
    ...state,
    isLoggedIn: true,
    ...payload
  }),
  [LoginTypes.ERROR]: (state, { type, payload }) => initialState,
  [LogoutTypes.SUCCESS]: (state, { type, payload }) => initialState
});
