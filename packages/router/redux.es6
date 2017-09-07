import { get } from 'lodash';
import { urlToLocation } from './utils';

export const LOCATION_ACTIONS = {
  LOCATION_REPLACE: 'LOCATION_UPDATE',
  LOCATION_PUSH: 'LOCATION_PUSH',
  LOCATION_PATCH: 'LOCATION_PATCH',
  LOCATION_CORRECT: 'LOCATION_CORRECT',
};
export const routerReducer = (history) => {
  const defaultState = urlToLocation(history.location);
  return (state = defaultState, action) => {
    if (!action || !action.type || action.type.indexOf('LOCATION_') === -1) {
      return state;
    }
    return {
      ...state,
      ...action.payload,
    };
  };
};

export const routerMiddleware = history => ({ getState }) => {
  const updateHistory = (raw, patch = true, method, cb) => {
    const currentLocation = getState().location;
    const newLocation = !patch
      ? urlToLocation({ ...currentLocation, ...raw })
      : urlToLocation({
        ...currentLocation,
        ...raw,
        query: { ...get(currentLocation, 'query', {}), ...get(raw, 'query', {}) },
      });
    const oldKey = history.location.key;
    history[method](newLocation);
    if (oldKey !== history.location.key) {
      newLocation.key = history.location.key;
      cb(newLocation);
    }
  };
  return nextDispatch => (action) => {
    if (action.type === LOCATION_ACTIONS.LOCATION_REPLACE) {
      return updateHistory(action.payload, false, 'replace', payload =>
        nextDispatch({ ...action, payload }),
      );
    }
    if (action.type === LOCATION_ACTIONS.LOCATION_PUSH) {
      return updateHistory(action.payload, false, 'push', payload =>
        nextDispatch({ ...action, payload }),
      );
    }
    if (action.type === LOCATION_ACTIONS.LOCATION_PATCH) {
      return updateHistory(action.payload, true, 'push', payload =>
        nextDispatch({ ...action, payload }),
      );
    }
    return nextDispatch(action);
  };
};

export const createPushPathname = dispatch => pathname =>
  dispatch({ type: LOCATION_ACTIONS.LOCATION_PATCH, payload: { pathname } });

export const createUpdateQuery = dispatch => query =>
  dispatch({ type: LOCATION_ACTIONS.LOCATION_PATCH, payload: { query } });

export const createReplaceQuery = dispatch => query =>
  dispatch({ type: LOCATION_ACTIONS.LOCATION_PUSH, payload: { query } });

export const createPush = dispatch => payload =>
  dispatch({ type: LOCATION_ACTIONS.LOCATION_PUSH, payload });

export const createReplace = dispatch => payload =>
  dispatch({ type: LOCATION_ACTIONS.LOCATION_REPLACE, payload });
