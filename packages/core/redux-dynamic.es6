import { createStore, combineReducers, compose } from 'redux';
import { set } from 'lodash';

let middlewares;
let stores;
let combine;

export const dynamicMiddleware = () => {
  middlewares = new Map();
  return store => next => (action) => {
    const middlewareAPI = {
      getState: store.getState,
      dispatch: store.dispatch,
    };
    const chain = [...middlewares.values()].map(middleware => middleware(middlewareAPI));
    return compose(...chain)(next)(action);
  };
};

export const injectMiddleware = (name, middleware) => {
  middlewares.set(name, middleware);
};

const combineReducersRecurse = (reducers) => {
  // If this is a leaf or already combined.
  if (typeof reducers === 'function') {
    return reducers;
  }

  // If this is an object of functions, combine reducers.
  if (typeof reducers === 'object') {
    const combinedReducers = {};
    for (const key of Object.keys(reducers)) {
      combinedReducers[key] = combineReducersRecurse(reducers[key]);
    }
    return combine(combinedReducers);
  }

  // If we get here we have an invalid item in the reducer path.
  throw new Error({
    message: 'Invalid item in reducer tree',
    item: reducers,
  });
};

export const createDynamicStore = (initialReducers, ...args) => {
  combine = combineReducers;
  // If last item is an object, it is overrides.
  if (typeof args[args.length - 1] === 'object') {
    const overrides = args.pop();
    // Allow overriding the combineReducers function such as with redux-immutable.
    if (
      overrides.hasOwnProperty('combineReducers') &&
      typeof overrides.combineReducers === 'function'
    ) {
      combine = overrides.combineReducers;
    }
  }

  stores = createStore(combineReducersRecurse(initialReducers), ...args);

  stores.injectedReducers = initialReducers;

  return stores;
};

export const injectReducer = (key, reducer, force = false) => {
  // If already set, do nothing.
  /* if (has(stores.injectedReducers, key) && force === false) {
    return;
  }*/

  set(stores.injectedReducers, key, reducer);
  stores.replaceReducer(combineReducersRecurse(stores.injectedReducers));
};
