import React, { Component } from 'react';
import { auth as withAuth, withRouter, styled, withLangProvider, SimpleSwitch, SimpleRoute } from 'olymp';
import { withLocale } from 'olymp/locale-de';
import { HashtaxProvider } from 'olymp/hashtax';
import { ThemeProvider } from 'react-fela';
import { NavigationVertical } from './navigation';
import { AuthModals } from 'olymp/auth';
import { GatewayDest } from 'react-gateway';
import { EditablePageRoute, PageRoute, withNavigation } from './pages';
import { CollectionRoute } from './collection';
import { CloudinaryRoute, LightboxProvider, Lightbox } from './cloudinary';
// import { AnalyticsRoute } from './analytics';
import { SettingsRoute } from './settings';
import { TemplateRoute, withTemplates } from './templates';
import * as LANG from './lang/de';

export const Container = styled(({ deviceWidth }) => ({
  display: 'flex',
  height: '100%',
  '> :last-child': {
    flex: 1,
  },
  '> *': {
    overflowY: 'auto',
  },
}), 'div', ({ deviceWidth, ...p }) => p);

export default ({ auth, theme, hashtax, modules }) => (Wrapped) => {
  // Container for authed users
  const IfAuth = (props) => {
    const { query, templates, collections, location } = props;
    const collection = Object.keys(modules).filter(key => query[`@${key}`] !== undefined).map(key => ({ key, ...modules[key] }))[0];

    return (
      <ThemeProvider theme={theme}>
        <HashtaxProvider {...hashtax} components={{ ...hashtax.components, ...templates }}>
          <LightboxProvider>
            <Container>
              <Lightbox />
              <GatewayDest name="modal" />
              <AuthModals />
              <NavigationVertical collections={collections} deviceWidth={query[`@deviceWidth`]} {...location} location={location} />
              <SimpleSwitch>
                {/*<SimpleRoute match={query['@profile'] !== undefined} render={() => <AuthRoutes.SplitView.Profile prefix="@" />} />*/}
                {/*<SimpleRoute match={query[`@users`] !== undefined} render={() => <AuthRoutes.SplitView.Users prefix="@" />} />*/}
                <SimpleRoute match={query[`@template`] !== undefined} render={() => <TemplateRoute {...props} />} />
                <SimpleRoute match={!!collection} render={() => <CollectionRoute {...props} modules={modules} collection={collection} Wrapped={Wrapped} />} />
                <SimpleRoute match={query[`@page`] !== undefined} render={() => <EditablePageRoute {...props} Wrapped={Wrapped} />} />
                <SimpleRoute match={query[`@media`] !== undefined} render={() => <CloudinaryRoute {...props} />} />
                {/*<SimpleRoute match={query[`@stats`] !== undefined} render={() => <AnalyticsRoute {...props} />} />*/}
                <SimpleRoute match={query[`@settings`] !== undefined} render={() => <SettingsRoute {...props} />} />
                <SimpleRoute render={() => <PageRoute {...props} Wrapped={Wrapped} />} />
              </SimpleSwitch>
            </Container>
          </LightboxProvider>
        </HashtaxProvider>
      </ThemeProvider>
    );
  };

  // Container for non-authed users
  const NoAuth = (props) => {
    const { templates } = props;
    return (
      <ThemeProvider theme={theme}>
        <HashtaxProvider {...hashtax} components={{ ...hashtax.components, ...templates }}>
          <LightboxProvider>
            <div>
              <Lightbox />
              <AuthModals />
              <GatewayDest name="modal" />
              <PageRoute {...props} Wrapped={Wrapped} />
            </div>
          </LightboxProvider>
        </HashtaxProvider>
      </ThemeProvider>
    );
  };

  @withRouter
  @withLocale
  @withAuth(auth)
  @withNavigation
  @withLangProvider(LANG)
  @withTemplates
  class CMS extends Component {
    render() {
      const { auth } = this.props;
      /*const routes = flatNavigation.filter(x => x.slug).map(({ id, slug, binding, pageId, bindingId }) => (
        <DataRoute key={id} id={pageId || id} bindingId={bindingId} binding={binding} match={pathname === slug} component={PageSidebar} location={location} navigation={navigation} flatNavigation={flatNavigation} />
      ));*/
      if (!auth.user) {
        return <NoAuth {...this.props} />;
      } return <IfAuth {...this.props} />;
    }
  } return CMS;
};

