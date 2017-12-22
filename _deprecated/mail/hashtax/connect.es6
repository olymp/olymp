import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interpolate } from './utils';
import Hashtax from './hashtax-provided';
import { get } from 'lodash';

// connect: Decorator to get props from context and interpolate props
export default WrappedComponent =>
  class DataConnector extends Component {
    static contextTypes = {
      hashtaxData: PropTypes.object,
    };
    static propTypes = WrappedComponent ? WrappedComponent.propTypes : {};
    render() {
      const hashtaxData = this.context.hashtaxData || {};
      const all = { ...hashtaxData, ...this.props };
      const props = Object.keys(this.props).reduce((store, key) => {
        const value = this.props[key];
        if (value && typeof value === 'string' && value.indexOf('{{') !== -1) {
          // interpolate hashtax text
          const text = interpolate(value, all);
          if (text) store[key] = <Hashtax value={text} />;
        } else if (
          value &&
          typeof value === 'string' &&
          value.indexOf('{:') !== -1
        ) {
          // interpolate react element
          let k;
          interpolate(value, v => (k = v));
          store[key] = get(all, k);
        } else if (
          value &&
          typeof value === 'string' &&
          value.indexOf('{') !== -1
        ) {
          // interpolate string
          store[key] = interpolate(value, all);
        } else {
          store[key] = all[key];
        }
        return store;
      }, {});
      return <WrappedComponent {...hashtaxData} {...props} />;
    }
  };
