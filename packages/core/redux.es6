import immutable from './immutable-helper';

export const APP_ACTIONS = {
  MANIPULATE: 'APP_MANIPULATE',
};

const defaultState = {};
export const appReducer = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case APP_ACTIONS.MANIPULATE:
      return action.payload.reduce(
        (store, { method = 'set', path, value }) => immutable[method](store, path, value),
        state,
      );
    default:
      return state;
  }
};

export const appMiddleware = ({ dispatch, getState }) => nextDispatch => (action) => {
  if (action.type === APP_ACTIONS.MANIPULATE) {
    if (!Array.isArray(action.payload)) {
      action.payload = [action.payload];
    }
  }
  nextDispatch(action);
};

export const createManipulation = dispatch => payload =>
  dispatch({
    type: APP_ACTIONS.MANIPULATE,
    payload,
  });
