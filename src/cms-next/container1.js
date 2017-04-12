import React, { Component, Children } from 'react';
import { Panel } from 'olymp/ui';
import { withAuth, withRouter } from 'olymp';
import { NavigationVertical } from './navigation';
import { AuthRoutes } from 'olymp/auth';
import { GatewayDest } from 'react-gateway';

@withAuth
@withRouter
export default class Container1 extends Component {
  state = { text: '' };
  render() {
    const { id, form, router, pathname, item, save, auth, query, children, collections } = this.props;
    const { text } = this.state;

    if (!auth.user) return Children.only(children);
    return (
      <Panel display="flex" height="100%">
        <NavigationVertical collections={collections} />
        <AuthRoutes />
        <GatewayDest name="modal" />
        <GatewayDest name="sidebar" />
        {children}
      </Panel>
    );
  }
}
