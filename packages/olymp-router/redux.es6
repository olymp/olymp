import { get } from 'lodash';
import { connect } from 'react-redux';
import { urlToLocation } from './utils';

export const LOCATION_REPLACE = 'LOCATION_UPDATE';
export const LOCATION_PUSH = 'LOCATION_PUSH';
export const LOCATION_PATCH = 'LOCATION_PATCH';
export const LOCATION_CORRECT = 'LOCATION_CORRECT';
export const LOCATION_MISS = 'LOCATION_MISS';
export const LOCATION_BLOCK = 'LOCATION_BLOCK';
export const LOCATION_UNBLOCK = 'LOCATION_UNBLOCK';

export const LOCATION_CHANGE = 'LOCATION_CHANGE';

export default history => {
  const defaultState = urlToLocation(location);
  const reducer = (state = defaultState, action) => {
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
  const middleware = ({ getState, dispatch }) => {
    const updateHistory = (raw, patch = true, method, cb) => {
      const currentLocation = getState().location;
      const newLocation = !patch
        ? urlToLocation(
            typeof raw === 'string' ? raw : { ...currentLocation, ...raw }
          )
        : urlToLocation({
            ...currentLocation,
            ...raw,
            query: {
              ...get(currentLocation, 'query', {}),
              ...get(raw, 'query', {}),
            },
          });
      const oldKey = history.location.key;
      if (
        currentLocation.url &&
        newLocation.url &&
        newLocation.url === currentLocation.url
      ) {
        return;
      }

      history[method]({ ...newLocation, redux: true });
      if (!oldKey || oldKey !== history.location.key) {
        newLocation.key = history.location.key;
        cb(newLocation);
      }
    };
    let blockQueue = [];
    let unblock = null;
    return nextDispatch => action => {
      if (action.type === LOCATION_BLOCK) {
        blockQueue = blockQueue.filter(x => x.id !== action.payload.id);
        if (unblock) {
          unblock();
        }
        blockQueue.push(action.payload);
        unblock = history.block(blockQueue[blockQueue.length - 1].message);
      } else if (action.type === LOCATION_UNBLOCK) {
        blockQueue = blockQueue.filter(x => x.id !== action.payload.id);
        if (unblock) {
          unblock();
          unblock = null;
        }
        if (blockQueue.length > 0) {
          unblock = history.block(blockQueue[blockQueue.length - 1].message);
        }
      } else if (action.type === LOCATION_REPLACE) {
        updateHistory(action.payload, false, 'replace', payload =>
          dispatch({ ...action, type: LOCATION_CHANGE, payload })
        );
      } else if (action.type === LOCATION_PUSH) {
        const state = getState();
        updateHistory(action.payload, false, 'push', payload =>
          dispatch({ ...action, type: LOCATION_CHANGE, payload })
        );
      } else if (action.type === LOCATION_PATCH) {
        updateHistory(action.payload, true, 'push', payload =>
          dispatch({ ...action, type: LOCATION_CHANGE, payload })
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
        if (
          action.type === LOCATION_CHANGE &&
          action.payload.pathname !== getState().location.pathname
        ) {
          scroll();
        }
        return nextDispatch(action);
      }
    };
  };
  return { reducer, middleware };
};
const scroll = () => {
  if (typeof window !== 'undefined') {
    try {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    } catch (err) {}
  }
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

export const createBlock = dispatch => (id, message) =>
  dispatch({ type: LOCATION_BLOCK, payload: { id, message } });

export const createUnblock = dispatch => id =>
  dispatch({ type: LOCATION_UNBLOCK, payload: { id } });

export const withRouting = connect(null, dispatch => ({
  pushPathname: createPushPathname(dispatch),
  updateQuery: createUpdateQuery(dispatch),
  replaceQuery: createReplaceQuery(dispatch),
  pushLocation: createPush(dispatch),
  replaceLocation: createReplace(dispatch),
}));
