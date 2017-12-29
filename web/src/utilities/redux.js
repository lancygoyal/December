import types from 'redux-types';
import _ from 'lodash';

export const restTypes = ['PENDING', 'SUCCESS', 'ERROR'];

export const crudTypes = ['CREATE', 'EDIT', 'DELETE'];

export const getActionTypes = (action = 'redux', type) => {
  return types(`@${action.toUpperCase()}`, _.isArray(type) ? type : restTypes);
};

export const getActionCreator = type => {
  return payload => ({
    type,
    payload
  });
};

export const getActionCreators = types => {
  let creators = {};
  Object.keys(types).forEach(type => {
    creators = { [type.toLowerCase()]: getActionCreator(types[type]), ...creators };
  });
  return creators;
};

export const getReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;
  };
};

export const restMiddleware = ({ dispatch, getState }) => {
  return next => async action => {
    const defaultFn = () => true;
    const { types, callAPI, shouldCallAPI = defaultFn, onLoading, onSuccess, onError } = action;

    if (!types) return next(action);

    const typeKeys = Object.keys(types);

    if (
      !Array.isArray(typeKeys) ||
      typeKeys.length !== 3 ||
      !typeKeys.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (!shouldCallAPI(getState())) return;

    dispatch({ type: types.PENDING });
    if (typeof onLoading === 'function') onLoading(dispatch, getState());

    try {
      let { data } = await callAPI();
      dispatch({ type: types.SUCCESS, payload: data });
      if (typeof onSuccess === 'function') onSuccess(dispatch, getState(), data);
    } catch (e) {
      dispatch({ type: types.ERROR, payload: e.response.data });
      if (typeof onError === 'function') onError(dispatch, getState(), e.response.data);
    }
  };
};
