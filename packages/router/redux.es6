import { urlToLocation } from './utils';
export const routerReducer = history => {
  const defaultState = urlToLocation(history.location);
  return (state = defaultState, action) => {
    if (!action || !action.type) return state;
    switch (action.type) {
      case 'LOCATION':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
};
export const routerMiddleware = history => store => nextDispatch => action => {
  if (action.type !== 'LOCATION') {
    return nextDispatch(action);
  }

  action.payload = urlToLocation(action.payload);
  if (!action.compensate) {
    const oldKey = history.location.key;
    history.push(action.payload);
    if (oldKey === history.location.key) {
      return;
    }
    action.payload.key = history.location.key;
  }
  return nextDispatch(action);
};
