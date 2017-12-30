import eventEmitter from './event';

export const restTypes = ['READY', 'LOADING', 'SUCCESS', 'ERROR'];

export const getActionType = (action = 'redux', type = 'default') => ({
  [type.toUpperCase()]: `@${action}/${type}`.toUpperCase()
});

export const getActionTypes = (action, types = restTypes) => {
  return types.reduce(
    (result, type) => ({
      ...getActionType(action, type),
      ...result
    }),
    {}
  );
};

export const getActionCreator = type => {
  return payload => ({
    type,
    payload
  });
};

export const getActionCreators = types => {
  return Object.keys(types).reduce(
    (result, type) => ({
      [type.toLowerCase()]: getActionCreator(types[type]),
      ...result
    }),
    {}
  );
};

export const getReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;
  };
};

export const restMiddleware = store => {
  return next => async action => {
    const defaultFn = () => true;
    const { types, callAPI, shouldCallAPI = defaultFn, handleAction = defaultFn } = action;

    if (!types) return next(action);

    const typeKeys = Object.keys(types);

    if (
      !Array.isArray(typeKeys) ||
      typeKeys.length <= 3 ||
      !typeKeys.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    store.dispatch({ type: types.READY });
    handleAction({ type: types.READY, store });
    eventEmitter.emit(types.READY);

    if (!shouldCallAPI(store.getState())) return;

    store.dispatch({ type: types.LOADING });
    handleAction({ type: types.LOADING, store });
    eventEmitter.emit(types.LOADING);

    try {
      let { data } = await callAPI();
      store.dispatch({ type: types.SUCCESS, payload: data });
      handleAction({ type: types.SUCCESS, payload: data, store });
      eventEmitter.emit(types.SUCCESS, data);
    } catch (e) {
      store.dispatch({ type: types.ERROR, payload: e.response.data });
      handleAction({ type: types.ERROR, payload: e.response.data, store });
      eventEmitter.emit(types.ERROR, e.response.data);
    }
  };
};

export const on = (eventName, listener) => {
  eventEmitter.on(eventName, listener);
  return () => {
    eventEmitter.removeListener(eventName, listener);
  };
};
