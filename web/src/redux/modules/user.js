import { push } from 'react-router-redux';
import RestClient from '../../utilities/rest';
import { getActionTypes, getActionCreators, getReducer } from '../../utilities/redux';

// Types
export const LoginTypes = getActionTypes('LOGIN');

// Actions
// export const LoginActions = getActionCreators(LoginTypes);

export const login = e => {
  e.preventDefault();
  return {
    types: LoginTypes,
    callAPI: () =>
      RestClient.post('user/login', {
        email: e.target.email.value,
        password: e.target.password.value
      }),
    // onLoading: store => {},
    onSuccess: ({ dispatch }, result) => {
      dispatch(push('/'));
    }
    // onError: ({ dispatch }, result) => {}
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
