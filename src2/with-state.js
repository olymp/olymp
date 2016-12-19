import React, { Component } from 'react';
import capitalize from 'lodash/capitalize';

export default (propertyName, defaultValue) => WrappedComponent => class WithStateComponent extends Component {
  state = {
    [propertyName]: defaultValue,
  };
  render() {
    const more = {
      [propertyName]: this.state[propertyName],
      [`set${capitalize(propertyName)}`]: v => this.setState({ [propertyName]: v }),
    };
    return <WrappedComponent {...this.props} {...more} />;
  }
};
