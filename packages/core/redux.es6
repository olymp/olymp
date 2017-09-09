import immutable from './immutable-helper';

export const MANIPULATE = 'APP_MANIPULATE';
export const LOADER_START = 'APP_LOADER_START';
export const LOADER_END = 'APP_LOADER_END';

const defaultState = {};
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
    default:
      return state;
  }
};

export const appMiddleware = ({ dispatch, getState }) => nextDispatch => (action) => {
  if (action.type === MANIPULATE) {
    if (!Array.isArray(action.payload)) {
      action.payload = [action.payload];
    }
  }
  nextDispatch(action);
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
