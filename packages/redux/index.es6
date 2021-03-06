import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { set } from 'lodash';

export { default as immutable } from './immutable';

const createDynamicRedux = () => {
  const middlewares = new Map();
  let stores;
  let combine;

  const combineReducersRecurse = reducers => {
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

  return {
    inject: (module = {}) => {
      const { name, reducer, middleware } = module;
      if (reducer) {
        set(stores.injectedReducers, name, reducer);
        stores.replaceReducer(combineReducersRecurse(stores.injectedReducers));
      }
      if (middleware) {
        middlewares.set(name, middleware);
      }
    },
    injectMiddleware: (name, middleware) => {
      middlewares.set(name, middleware);
    },
    injectReducer: (name, reducer, force = false) => {
      set(stores.injectedReducers, name, reducer);
      stores.replaceReducer(combineReducersRecurse(stores.injectedReducers));
    },
    dynamicMiddleware: store => next => action => {
      const middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch,
      };
      const chain = [...middlewares.values()].map(middleware =>
        middleware(middlewareAPI)
      );
      return compose(...chain)(next)(action);
    },
    createDynamicStore: (initialReducers, ...args) => {
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
    },
  };
};
export default createDynamicRedux;

export class DynamicReduxProvider extends Component {
  injectReducer = (name, reducer, force = false) => {
    const { injectReducer } = this.props.dynamicRedux;
    injectReducer(name, reducer, force);
  };

  injectMiddleware = (name, middleware) => {
    const { injectMiddleware } = this.props.dynamicRedux;
    injectMiddleware(name, middleware);
  };

  static childContextTypes = {
    dynamicRedux: PropTypes.object,
  };

  getChildContext() {
    return {
      dynamicRedux: this,
    };
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

export const withDynamicRedux = ({
  name,
  reducer,
  middleware,
  init,
}) => WrappedComponent => {
  class WithDynamicRedux extends Component {
    static contextTypes = {
      dynamicRedux: PropTypes.object,
      store: PropTypes.object,
    };
    constructor(props, context) {
      super(props);
      const { injectReducer, injectMiddleware } = context.dynamicRedux;
      if (context.store && init) {
        init(context.store);
      }
      if (reducer) {
        injectReducer(name, reducer);
      }
      if (middleware) {
        injectMiddleware(name, middleware);
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithDynamicRedux;
};

export const plugin = () => {
  const dynamicRedux = createDynamicRedux();
  const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
  const store = createDynamicStore(
    { __check__: x => true },
    {}, // initialData
    composeWithDevTools(applyMiddleware(dynamicMiddleware))
  );
  return {
    name: 'olymp-redux',
    context: { store, dynamicRedux },
    decorate: App => props => (
      <DynamicReduxProvider dynamicRedux={dynamicRedux}>
        <Provider store={store}>
          <App {...props} />
        </Provider>
      </DynamicReduxProvider>
    ),
  };
};
