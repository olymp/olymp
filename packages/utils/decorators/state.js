import React, { Component } from 'react';
import capitalize from 'lodash/upperFirst';

export default (propertyName, defaultValue) => (WrappedComponent) => {
  const properties = typeof propertyName !== 'object'
    ? { [propertyName]: defaultValue }
    : propertyName;
  class WithStateComponent extends Component {
    state = properties;
    render() {
      const more = Object.keys(properties).reduce((state, key) => {
        state[key] = this.state[key];
        state[`set${capitalize(key)}`] = v => this.setState({ [key]: v });
        return state;
      }, {});
      return <WrappedComponent {...this.props} {...more} />;
    }
  }
  return WithStateComponent;
};
