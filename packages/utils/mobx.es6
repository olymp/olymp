import React, { Component, Children } from 'react';
import { object, func } from 'prop-types';
import { get } from 'lodash';
import hoistNonReactStatic from 'hoist-non-react-statics';

export { observer } from 'mobx-react';

export const connect = (
  map,
  { onConstruct, onMount, onUpdate, onUnmount } = {},
) => (WrappedComponent) => {
  class ConnectMobx extends Component {
    static contextTypes = {
      mobx: object,
    };
    constructor(props, context) {
      super();
      if (onConstruct) {
        onConstruct({ ...this.getRest(props, context), ...props });
      }
    }
    getRest = (props = this.props, context = this.context) => {
      if (typeof map === 'string') {
        return { [map]: get(context.mobx, map) };
      } else if (Array.isArray(map)) {
        return map.reduce((store, key) => {
          store[key] = get(context.mobx, key);
          return store;
        }, {});
      }
      const result = map(context.mobx, props);
      return result || {};
    };
    componentDidMount() {
      if (onMount) {
        onMount({ ...this.getRest(), ...this.props });
      }
    }
    componentWillUpdate(newProps) {
      if (onUpdate) {
        onUpdate({ ...this.getRest(newProps), ...newProps }, { ...this.getRest(), ...this.props });
      }
    }
    componentWillUnmount() {
      if (onUnmount) {
        onUnmount({ ...this.getRest(), ...this.props });
      }
    }
    render() {
      return <WrappedComponent {...this.props} {...this.getRest()} />;
    }
  }
  return hoistNonReactStatic(ConnectMobx, WrappedComponent);
};
export const provide = (
  Store,
  { persist = true, name, inject = false } = {},
) => (WrappedComponent) => {
  class ProvideMobx extends Component {
    static contextTypes = {
      registerStore: func,
      unregisterStore: func,
    };
    constructor(props, context) {
      super(props, context);
      const { registerStore } = context;
      this.store = registerStore(Store, props, { name });
    }
    componentDidMount() {
      if (this.store.onMount) {
        this.store.onMount(this.props);
      }
    }
    componentWillUnmount() {
      const { unregisterStore } = this.context;
      if (this.store.onUnmount) {
        this.store.onUnmount(this.props);
      }
      if (persist === false) {
        unregisterStore(Store, this.props, { name });
      }
    }
    render() {
      const more = inject ? { [Store.displayName]: this.store } : {};
      return <WrappedComponent {...this.props} {...more} />;
    }
  }
  return hoistNonReactStatic(ProvideMobx, WrappedComponent);
};
export class Mobx extends Component {
  static childContextTypes = {
    mobx: object,
    registerStore: func,
    unregisterStore: func,
  };
  registerStore = (Store, props, { name } = {}) => {
    if (this.props.store[Store.displayName]) {
      return this.props.store[Store.displayName];
    }
    this.props.store[Store.displayName] = true;
    const store = new Store(this.props.store, props, { name });
    this.props.store[Store.displayName] = store;
    return store;
  };
  unregisterStore = (Store, props, { name } = {}) => {
    delete this.props.store[Store.displayName];
  };
  getChildContext() {
    return {
      mobx: this.props.store,
      registerStore: this.registerStore,
      unregisterStore: this.unregisterStore,
    };
  }
  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}
export const createSnapshot = context =>
  Object.keys(context).reduce((store, key) => {
    if (context[key].snapshot) {
      store[key] = context[key].snapshot();
    }
    return store;
  }, {});
