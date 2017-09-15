import immutable from './immutable-helper';

export const MANIPULATE = 'APP_MANIPULATE';
export const LOADER_START = 'APP_LOADER_START';
export const LOADER_END = 'APP_LOADER_END';
export const INTERNET_CONNECTION = 'APP_INTERNET_CONNECTION';
export const SERVER_CONNECTION = 'APP_SERVER_CONNECTION';

const defaultState = {
  serverConnection: true,
  internetConnection: typeof window !== 'undefined' ? window.navigator.onLine !== false : true,
};
export const appReducer = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case MANIPULATE:
      return action.payload.reduce(
        (store, { method = 'set', path, value }) => immutable[method](store, path, value),
        state,
      );
    case LOADER_START:
      return immutable.set(state, 'loading', true);
    case LOADER_END:
      return immutable.set(state, 'loading', false);
    case INTERNET_CONNECTION:
      return immutable.set(state, 'internetConnection', action.payload);
    case SERVER_CONNECTION:
      return immutable.set(state, 'serverConnection', action.payload);
    default:
      return state;
  }
};

export const appMiddleware = ({ dispatch, getState }) => {
  if (typeof window !== 'undefined') {
    window.addEventListener('offline', (e) => {
      dispatch({ type: INTERNET_CONNECTION, payload: false });
    });
    window.addEventListener('online', (e) => {
      dispatch({ type: INTERNET_CONNECTION, payload: true });
    });
  }
  return nextDispatch => (action) => {
    if (action.type === MANIPULATE) {
      if (!Array.isArray(action.payload)) {
        action.payload = [action.payload];
      }
    }
    nextDispatch(action);
  };
};

export const createManipulation = dispatch => payload =>
  dispatch({
    type: MANIPULATE,
    payload,
  });

export const createLoaderStart = dispatch => payload =>
  dispatch({
    type: LOADER_START,
    payload,
  });

export const createLoaderEnd = dispatch => payload =>
  dispatch({
    type: LOADER_END,
    payload,
  });

export const createServerConnection = dispatch => payload =>
  dispatch({ type: SERVER_CONNECTION, payload });
