import types from 'redux-types';
import Valid from './validation';

export const fetchTypes = ['PENDING', 'SUCCESS', 'ERROR'];

export const crudTypes = ['CREATE', 'EDIT', 'DELETE'];

export const getActionTypes = (action = 'redux', type) => {
  return types(`@${action}`, Valid.isArray(type) ? type : fetchTypes);
};

export const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};

// export const addTodo = makeActionCreator(ADD_TODO, 'text')

// export function loadPosts(userId) {
//   return {
//     // Types of actions to emit before and after
//     types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
//     // Check the cache (optional):
//     shouldCallAPI: state => !state.posts[userId],
//     // Perform the fetching:
//     callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
//     // Arguments to inject in begin/end actions
//     payload: { userId }
//   }
// }

export function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;

    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    const [requestType, successType, failureType] = types;

    dispatch(
      Object.assign({}, payload, {
        type: requestType
      })
    );

    return callAPI().then(
      response =>
        dispatch(
          Object.assign({}, payload, {
            response,
            type: successType
          })
        ),
      error =>
        dispatch(
          Object.assign({}, payload, {
            error,
            type: failureType
          })
        )
    );
  };
}

// export const todos = createReducer([], {
//   [ActionTypes.ADD_TODO](state, action) {
//     let text = action.text.trim()
//     return [...state, text]
//   }
// })

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
