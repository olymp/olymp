import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux-dynamic-reducer';
import { compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { set } from 'lodash';

export { default as immutable } from './immutable';

const createDynamicRedux = () => {
  const middlewares = new Map();
  let store;

  return {
    injectMiddleware: (name, middleware) => {
      if (name !== 'location') {
        return;
      }
      middlewares.set(name, middleware);
    },
    injectReducer: (name, reducer) => {
      if (name !== 'location') {
        return;
      }
      store.attachReducers({ [name]: reducer });
    },
    dynamicMiddleware: ({ getState, dispatch }) => next => action => {
      const middlewareAPI = {
        getState,
        dispatch: act => dispatch(act),
      };
      const chain = [...middlewares.values()].map(middleware =>
        middleware(middlewareAPI)
      );
      return compose(...chain)(next)(action);
    },
    createDynamicStore: (...args) => {
      store = createStore(...args);
      return store;
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
    x => ({
      auth: {},
    }),
    {}, // initialData
    composeWithDevTools(applyMiddleware(dynamicMiddleware))
  );
  return {
    decorate: App => props => (
      <Provider store={store}>
        <DynamicReduxProvider dynamicRedux={dynamicRedux}>
          <App {...props} />
        </DynamicReduxProvider>
      </Provider>
    ),
  };
};
