import { push } from 'react-router-redux';
import RestClient from '../../utilities/rest';
import { getActionTypes, getActionCreators } from '../../utilities/redux';

// Types
const LOGIN = getActionTypes('LOGIN');

// Action Creators
// export const LOGIN = getActionCreators(LOGIN);

export const login = e => {
  e.preventDefault();
  return async (dispatch, getState) => {
    dispatch({ type: LOGIN.PENDING });
    try {
      let { data } = await RestClient.post('user/login', {
        email: e.target.email.value,
        password: e.target.password.value
      });
      dispatch(() => {
        type: LOGIN.SUCCESS, data;
      });
      dispatch(push('/'));
    } catch (e) {
      dispatch({ type: LOGIN.ERROR, data: e.response.data });
    }
  };
};

const initialState = {
  isLoggedIn: false
};

// Reducers
export default (state = initialState, { type, data }) => {
  switch (type) {
    case LOGIN.PENDING:
      return initialState;

    case LOGIN.SUCCESS: {
      return {
        isLoggedIn: true,
        ...data
      };
    }

    case LOGIN.ERROR: {
      return {
        isLoggedIn: false,
        ...data
      };
    }

    default:
      return state;
  }
};
