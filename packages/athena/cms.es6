import React, { Component } from 'react';
import { withCollections } from 'olymp-collection';
import { withRouter } from 'olymp-router';
import withLocale from 'olymp-locale/de';
import { connect } from 'react-redux';
import { ThemeProvider } from 'olymp-fela';
import { auth as withAuth } from 'olymp-auth';
import { withNavigation } from 'olymp-pages';
import { LightboxProvider } from 'olymp-cloudinary';
import { DragDropContext } from 'react-dnd';
import Loadable from 'react-loadable';
import HTML5Backend from 'react-dnd-html5-backend';
import * as LANG from './lang/de';
import NoAuth from './cms-noauth';
import Loading from './loading';

const IfAuth = Loadable({
  loader: () => import('./cms-auth'),
  loading: Loading,
});

const filterPublic = pages =>
  pages.filter(page => page.state === 'PUBLISHED').map(({ children, ...rest }) => ({
    ...rest,
    children: filterPublic(children),
  }));

export default ({ auth, theme }) => (Wrapped) => {
  // Container for authed users
  @withRouter
  @withLocale(LANG)
  @withAuth(auth)
  @withNavigation
  @withCollections
  @DragDropContext(HTML5Backend)
  @connect(({ auth }) => ({
    isAuthenticated: !!auth.user,
  }))
  class CMS extends Component {
    render() {
      const { isAuthenticated, navigation } = this.props;
      const nav = filterPublic(navigation);

      return (
        <ThemeProvider theme={theme}>
          <LightboxProvider>
            {!isAuthenticated ? (
              <NoAuth {...this.props} navigation={nav} wrapper={Wrapped} />
            ) : (
              <IfAuth {...this.props} navigation={nav} wrapper={Wrapped} />
            )}
          </LightboxProvider>
        </ThemeProvider>
      );
    }
  }
  return CMS;
};
