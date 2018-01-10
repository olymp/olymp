import { debounce } from 'lodash';
import immutable from 'olymp-redux/immutable';

export const MANIPULATE = 'APP_MANIPULATE';
export const LOADER_START = 'APP_LOADER_START';
export const LOADER_END = 'APP_LOADER_END';
export const INTERNET_CONNECTION = 'APP_INTERNET_CONNECTION';
export const SERVER_CONNECTION = 'APP_SERVER_CONNECTION';

export const appReducer = (init = {}) => {
  const defaultState = {
    version: undefined,
    serverConnection: true,
    internetConnection:
      typeof window !== 'undefined' ? window.navigator.onLine !== false : true,
    ...init
  };
  return (state = defaultState, action) => {
    if (!action || !action.type) {
      return state;
    }
    switch (action.type) {
      case MANIPULATE:
        return action.payload.reduce(
          (store, { method = 'set', path, value }) =>
            immutable[method](store, path, value),
          state
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
};

export const apolloMiddleware = client => ({ dispatch }) => {
  if (typeof window !== 'undefined') {
    window.addEventListener('offline', () => {
      dispatch({ type: INTERNET_CONNECTION, payload: false });
    });
    window.addEventListener('online', () => {
      dispatch({ type: INTERNET_CONNECTION, payload: true });
    });
  }
  return nextDispatch => action => {
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
    payload
  });

export const createLoaderStart = dispatch => payload =>
  dispatch({
    type: LOADER_START,
    payload
  });

export const createLoaderEnd = dispatch => payload =>
  dispatch({
    type: LOADER_END,
    payload
  });

export const createServerConnection = dispatch => payload =>
  dispatch({ type: SERVER_CONNECTION, payload });

let pendings = [];
let loader = null;
const updateLoader = debounce(
  dispatch => {
    const length = pendings.length;
    if (length && !loader) {
      loader = true;
      createLoaderStart(dispatch)();
    } else if (!length && loader) {
      loader = false;
      createLoaderEnd(dispatch)();
    }
  },
  300,
  { leading: true, trailing: true }
);

export const startLoading = dispatch => {
  pendings = [...pendings, 1];
  updateLoader(dispatch);
};

export const stopLoading = dispatch => {
  const [first, ...remaining] = pendings;
  pendings = remaining;
  updateLoader(dispatch);
};
