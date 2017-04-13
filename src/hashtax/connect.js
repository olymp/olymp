import React, { Component, PropTypes } from 'react';
import { interpolate } from './utils';
import Hashtax from './hashtax-provided';

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
      if (value && typeof value === 'string' && value.indexOf('{{') !== -1) {
        const text = interpolate(all, value);
        if (text) store[key] = <Hashtax value={text} />;
      } else if (value && typeof value === 'string' && value.indexOf('{') !== -1) {
        store[key] = interpolate(all, value);
      } else {
        store[key] = all[key];
      } return store;
    }, {});
    return <WrappedComponent {...hashtaxData} {...props} />;
  }
}
