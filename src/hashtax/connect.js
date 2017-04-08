import React, { Component, PropTypes } from 'react';
import { interpolate } from './utils';

// connect: Decorator to get props from context and interpolate props
export default WrappedComponent => class DataConnector extends Component {
  static contextTypes = {
    hashtaxData: PropTypes.object,
  }
  render() {
    const hashtaxData = this.context.hashtaxData || {};
    const all = { ...hashtaxData, ...this.props };
    const props = Object.keys(this.props).reduce((store, key) => {
      const value = this.props[key];
      if (value && typeof value === 'string' && value.indexOf('{') !== -1) {
        store[key] = interpolate(all, value);
      } else {
        store[key] = this.props[key];
      }
      return store;
    }, {});
    return <WrappedComponent {...hashtaxData} {...props} />;
  }
}
