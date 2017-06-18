import React, { Component } from 'react';
import { withRouter } from 'olymp';

export default WrappedComponent => {
  @withRouter
  class AuthRoutes extends Component {
    get = type => {
      const { query, prefix } = this.props;

      return prefix ? query[`${prefix}${type}`] : query[type];
    };

    set = (type, value) => {
      const { query, prefix } = this.props;

      const r = { ...query };

      if (prefix) {
        r[`${prefix}${type}`] = value;
      } else {
        r[type] = value;
      }

      return r;
    };

    render() {
      const { prefix, ...rest } = this.props;

      return <WrappedComponent get={this.get} set={this.set} {...rest} />;
    }
  }

  return AuthRoutes;
};
