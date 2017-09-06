export const APP_ACTIONS = {};

const defaultState = {};
export const appReducer = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case 'LOCATION':
      return state;
    default:
      return state;
  }
};

export const appMiddleware = ({ dispatch }) => nextDispatch => action => nextDispatch(action);
