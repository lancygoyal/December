// Actions

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN = 'LOGIN';

//Action creators For Reducers

export const login_Success = () => ({ type: LOGIN_SUCCESS });
export const login_Failed = () => ({ type: LOGIN_FAILED });
export const login = data => ({ type: LOGIN, data: data });

// Thunk Action Creators For Api

/********* login ***********/

export const attemptLogin = (params, cb) => {
  return dispatch => {
    // RestClient.post('users/login', params)
    //     .then((result) => {
    //         if (result.success) {
    //         	dispatch(login_Success());
    //             dispatch(login(result.user));
    //             let res = {
    //                 status: true,
    //                 message: result.successText,
    //                 type: "Login successfully...!!"
    //             }
    //             cb(res);
    //         } else {
    //         	dispatch(login_Failed());
    //             let res = {
    //                 status: false,
    //                 message: result.errorText,
    //                 type: "Login error...!!"
    //             }
    //             cb(res);
    //         }
    //     })
    //     .catch((error) => {
    //     });
  };
};

//Reducers

const initialState = {
  loggedIn: false,
  remember: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state.loggedIn = true;
      return state;

    case LOGIN_FAILED:
      state.loggedIn = false;
      return state;

    case LOGIN:
      let obj = action.data;
      return { ...state, ...obj };

    default:
      return state;
  }
}
