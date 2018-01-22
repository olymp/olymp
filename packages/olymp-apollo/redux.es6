import { withDynamicRedux } from 'olymp-redux';
import { debounce } from 'lodash';
import immutable from 'olymp-redux/immutable';

export const MANIPULATE = 'APP_MANIPULATE';
export const LOADER_START = 'APP_LOADER_START';
export const LOADER_END = 'APP_LOADER_END';
export const INTERNET_CONNECTION = 'APP_INTERNET_CONNECTION';
export const SERVER_CONNECTION = 'APP_SERVER_CONNECTION';

export default ({ initial = false } = {}) => {
  const defaultState = {
    version: undefined,
    serverConnection: true,
    initial,
    internetConnection:
      typeof window !== 'undefined' ? window.navigator.onLine !== false : true,
  };
  const reducer = (state = defaultState, action) => {
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
        return immutable(state)
          .set('loading', false)
          .set('initial', false)
          .value();
      case INTERNET_CONNECTION:
        return immutable.set(state, 'internetConnection', action.payload);
      case SERVER_CONNECTION:
        return immutable.set(state, 'serverConnection', action.payload);
      default:
        return state;
    }
  };

  const middleware = ({ dispatch }) => {
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

  return {
    reducer,
    middleware,
  };
};

export const createManipulation = dispatch => payload =>
  dispatch({
    type: MANIPULATE,
    payload,
  });

export const createServerConnection = dispatch => payload =>
  dispatch({ type: SERVER_CONNECTION, payload });

let pendings = {};
let loader = null;
const updateLoader = debounce(
  (dispatch, key) => {
    const length = Object.keys(pendings).length;
    if (length && !loader) {
      loader = true;
      dispatch({
        type: LOADER_START,
        payload: null,
      });
    } else if (!length && loader) {
      loader = false;
      dispatch({
        type: LOADER_END,
        payload: null,
      });
    }
  },
  1000,
  { leading: true, trailing: true }
);

export const startLoading = dispatch => (key = '') => {
  pendings = { ...pendings, [key]: true };
  return updateLoader(dispatch, key);
};

export const stopLoading = dispatch => (key = '') => {
  delete pendings[key];
  return updateLoader(dispatch, key);
};
