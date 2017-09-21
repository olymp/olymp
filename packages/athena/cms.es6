import React, { Component } from 'react';
import { withCollections } from 'olymp-collection';
import { withRouter } from 'olymp-router';
import withLocale from 'olymp-locale/de';
import { connect } from 'react-redux';
import { ThemeProvider, ScreenLoader } from 'olymp-fela';
import { auth as withAuth } from 'olymp-auth';
import { withNavigation } from 'olymp-pages';
import { LightboxProvider } from 'olymp-cloudinary';
import { DragDropContext } from 'react-dnd';
// import universal from 'react-universal-component';
import HTML5Backend from 'react-dnd-html5-backend';
import * as LANG from './lang/de';
import NoAuth from './cms-noauth';
import IfAuth from './cms-auth';

/* const IfAuth = universal(props => import('./cms-auth'), {
  minDelay: 1200,
  loading: props => 'Loading',
  error: props => 'Error',
});*/

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
  @connect(({ auth }, { isNavigationLoading }) => ({
    isAuthenticated: !!auth.user,
    isLoading: auth.verifying || isNavigationLoading,
  }))
  class CMS extends Component {
    render() {
      const { isAuthenticated, navigation, isLoading } = this.props;
      const nav = filterPublic(navigation);
      return (
        <ThemeProvider theme={theme}>
          <LightboxProvider>
            {isLoading ? (
              <ScreenLoader show />
            ) : !isAuthenticated ? (
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
