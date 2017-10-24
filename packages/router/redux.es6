import { get } from 'lodash';
import { urlToLocation } from './utils';

export const LOCATION_REPLACE = 'LOCATION_UPDATE';
export const LOCATION_PUSH = 'LOCATION_PUSH';
export const LOCATION_PATCH = 'LOCATION_PATCH';
export const LOCATION_CORRECT = 'LOCATION_CORRECT';
export const LOCATION_MISS = 'LOCATION_MISS';

export const LOCATION_CHANGE = 'LOCATION_CHANGE';

export const routerReducer = history => {
  const defaultState = urlToLocation(history.location);
  return (state = defaultState, action) => {
    if (!action || !action.type) {
      return state;
    }
    switch (action.type) {
      case LOCATION_CHANGE:
        return {
          ...state,
          ...action.payload,
        };
      case LOCATION_MISS:
        return { ...state, isMiss: true };
      default:
        return state;
    }
  };
};

export const routerMiddleware = history => ({ getState, dispatch }) => {
  const updateHistory = (raw, patch = true, method, cb) => {
    const currentLocation = getState().location;
    const newLocation = !patch
      ? urlToLocation({ ...currentLocation, ...raw })
      : urlToLocation({
          ...currentLocation,
          ...raw,
          query: {
            ...get(currentLocation, 'query', {}),
            ...get(raw, 'query', {}),
          },
        });
    const oldKey = history.location.key;
    history[method](newLocation);
    if (oldKey !== history.location.key) {
      newLocation.key = history.location.key;
      cb(newLocation);
    }
  };
  return nextDispatch => action => {
    if (action.type === LOCATION_REPLACE) {
      updateHistory(action.payload, false, 'replace', payload =>
        dispatch({ ...action, type: LOCATION_CHANGE, payload }),
      );
    } else if (action.type === LOCATION_PUSH) {
      updateHistory(action.payload, false, 'push', payload =>
        dispatch({ ...action, type: LOCATION_CHANGE, payload }),
      );
    } else if (action.type === LOCATION_PATCH) {
      updateHistory(action.payload, true, 'push', payload =>
        dispatch({ ...action, type: LOCATION_CHANGE, payload }),
      );
    } else if (action.type === LOCATION_CORRECT) {
      dispatch({
        ...action,
        type: LOCATION_CHANGE,
        payload: urlToLocation(action.payload),
      });
    } else {
      if (action.type === LOCATION_CHANGE && process.env.IS_ELECTRON) {
        localStorage.setItem('location', JSON.stringify(action.payload));
      }
      return nextDispatch(action);
    }
  };
};

export const createPushPathname = dispatch => pathname =>
  dispatch({ type: LOCATION_PATCH, payload: { pathname } });

export const createUpdateQuery = dispatch => query =>
  dispatch({ type: LOCATION_PATCH, payload: { query } });

export const createReplaceQuery = dispatch => query =>
  dispatch({ type: LOCATION_PUSH, payload: { query } });

export const createPush = dispatch => payload =>
  dispatch({ type: LOCATION_PUSH, payload });

export const createMiss = dispatch => payload =>
  dispatch({ type: LOCATION_MISS, payload });

export const createReplace = dispatch => payload =>
  dispatch({ type: LOCATION_REPLACE, payload });
