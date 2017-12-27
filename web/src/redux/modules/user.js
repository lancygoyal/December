import RestClient from '../../utilities/RestClient';

// Actions
const LOGIN = 'LOGIN';

//Action creators For Reducers
export const login = (e) => {
  e.preventDefault();
  return { type: LOGIN, payload: RestClient.post('user/login', {email:e.target.email.value,password:e.target.password.value}) }
}

//Reducers
const initialState = {
  loggedIn: false,
  data: {}
};

export default (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case LOGIN:
      return { loggedIn: false };
    default:
      return state;
  }
};
