import React, { Component } from 'react';
import { withCollections } from 'olymp-collection';
import { withLangProvider } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { withLocale } from 'olymp-locale/de';
import { ThemeProvider } from 'olymp-fela';
import { auth as withAuth } from 'olymp-auth';
import { withNavigation } from 'olymp-pages';
import { LightboxProvider } from 'olymp-cloudinary';
import { asyncComponent } from 'react-async-component';
import { withTemplates } from './templates';
import * as LANG from './lang/de';
import NoAuth from './cms-noauth';

const IfAuth = asyncComponent({ resolve: () => System.import('./cms-auth') });

const filterPublic = pages =>
  pages
    .filter(page => page.state === 'PUBLISHED')
    .map(({ children, ...rest }) => ({
      ...rest,
      children: filterPublic(children),
    }));

export default ({ auth, theme }) => Wrapped => {
  // Container for authed users
  @withRouter
  @withLocale
  @withAuth(auth)
  @withNavigation
  @withLangProvider(LANG)
  @withTemplates
  @withCollections
  class CMS extends Component {
    render() {
      const { auth, navigation } = this.props;
      const nav = filterPublic(navigation);

      return (
        <ThemeProvider theme={theme}>
          <LightboxProvider>
            {!auth.user
              ? <NoAuth {...this.props} navigation={nav} wrapper={Wrapped} />
              : <IfAuth {...this.props} navigation={nav} wrapper={Wrapped} />}
          </LightboxProvider>
        </ThemeProvider>
      );
    }
  }
  return CMS;
};
