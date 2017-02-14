import React, { Component } from 'react';
import { withItems } from 'olymp';

export default (WrappedComponent) => {
  @withItems({ name: 'settings' })
  class WithSettingsComponent extends Component {
    render() {
      const { items, ...rest } = this.props;

      return (
        <WrappedComponent {...rest} settings={items && items.length ? items[0] : {}} />
      );
    }
  }
  return WithSettingsComponent;
};
