import { push } from 'react-router-redux';
import RestClient from '../../utilities/rest';
import { getActionTypes, getActionCreators, getReducer } from '../../utilities/redux';

// Types
const LoginTypes = getActionTypes('LOGIN');

// Actions
export const LoginActions = getActionCreators(LoginTypes);

// export const login = e => {
//   e.preventDefault();
//   return async (dispatch, getState) => {
//     dispatch(LoginActions.pending());
//     try {
//       let { data } = await RestClient.post('user/login', {
//         email: e.target.email.value,
//         password: e.target.password.value
//       });
//       dispatch(LoginActions.success(data));
//       dispatch(push('/'));
//     } catch (e) {
//       dispatch(LoginActions.error(e.response.data));
//     }
//   };
// };

export const login = e => {
  e.preventDefault();
  return {
    types: LoginTypes,
    callAPI: () =>
      RestClient.post('user/login', {
        email: e.target.email.value,
        password: e.target.password.value
      }),
    // onLoading: state => {},
    onSuccess: (dispatch, state, result) => {
      dispatch(push('/'));
    }
    // onError: (state, result) => {}
  };
};

const initialState = {
  isLoggedIn: false
};

// Reducers
export default getReducer(initialState, {
  [LoginTypes.PENDING]: (state, { type, payload }) => ({
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
