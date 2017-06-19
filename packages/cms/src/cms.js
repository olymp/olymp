import React, { Component } from 'react';
import {
  auth as withAuth,
  withRouter,
  withLangProvider,
  SimpleSwitch,
  SimpleRoute,
  withCollections,
} from 'olymp';
import { withLocale } from 'olymp-locale/de';
import { ThemeProvider } from 'olymp-fela';
import { AuthModals } from 'olymp-auth';
import { GatewayDest } from 'react-gateway';
import { EditablePageRoute, PageRoute, withNavigation } from 'olymp-pages';
import { CloudinaryRoute, LightboxProvider, Lightbox } from 'olymp-cloudinary';
import { CollectionOldRoute } from 'olymp-collection-old';
import { NavigationVertical } from './navigation';
import { SettingsRoute } from './settings';
import { TemplateRoute, withTemplates } from './templates';
import * as LANG from './lang/de';
import { createComponent } from 'olymp-fela';

export const Container = createComponent(
  ({ deviceWidth }) => ({
    display: 'flex',
    height: '100%',
    '> :last-child': {
      flex: 1,
      height: '100%',
      overflowY: 'auto',
    },
  }),
  'div',
  ({ deviceWidth, ...p }) => Object.keys(p)
);

export default ({ auth, theme, modules }) => (Wrapped) => {
  const filterPublic = pages =>
    pages
      .filter(page => page.state === 'PUBLISHED')
      .map(({ children, ...rest }) => ({
        ...rest,
        children: filterPublic(children),
      }));

  // Container for authed users
  const IfAuth = (props) => {
    const { query, templates, collections, collectionList, location } = props;
    const collection = collectionList.filter(
      ({ name }) => query[`@${name.toLowerCase()}`] !== undefined
    )[0];

    return (
      <ThemeProvider theme={theme}>
        <LightboxProvider>
          <Container>
            <Lightbox />
            <GatewayDest name="modal" />
            <AuthModals />
            <NavigationVertical
              collectionList={collectionList}
              deviceWidth={query['@deviceWidth']}
              {...location}
              location={location}
            />
            <SimpleSwitch>
              {/* <SimpleRoute match={query['@profile'] !== undefined} render={() => <AuthRoutes.SplitView.Profile prefix="@" />} />*/}
              {/* <SimpleRoute match={query[`@users`] !== undefined} render={() => <AuthRoutes.SplitView.Users prefix="@" />} />*/}
              <SimpleRoute
                match={query['@template'] !== undefined}
                render={() => <TemplateRoute {...props} />}
              />
              <SimpleRoute
                match={!!collection}
                render={() =>
                  (<CollectionOldRoute
                    {...props}
                    typeName={collection && collection.name}
                    Wrapped={Wrapped}
                  />)}
              />
              <SimpleRoute
                match={query['@page'] !== undefined}
                render={() =>
                  <EditablePageRoute {...props} Wrapped={Wrapped} />}
              />
              <SimpleRoute
                match={query['@media'] !== undefined}
                render={() => <CloudinaryRoute {...props} />}
              />
              {/* <SimpleRoute match={query[`@stats`] !== undefined} render={() => <AnalyticsRoute {...props} />} />*/}
              <SimpleRoute
                match={query['@settings'] !== undefined}
                render={() => <SettingsRoute {...props} />}
              />
              <SimpleRoute
                render={() =>
                  (<PageRoute
                    {...props}
                    navigation={filterPublic(props.navigation)}
                    Wrapped={Wrapped}
                  />)}
              />
            </SimpleSwitch>
          </Container>
        </LightboxProvider>
      </ThemeProvider>
    );
  };

  // Container for non-authed users
  const NoAuth = (props) => {
    const { templates, navigation } = props;

    return (
      <ThemeProvider theme={theme}>
        <LightboxProvider>
          <div>
            <Lightbox />
            <AuthModals />
            <GatewayDest name="modal" />
            <PageRoute
              {...props}
              navigation={filterPublic(navigation)}
              Wrapped={Wrapped}
            />
          </div>
        </LightboxProvider>
      </ThemeProvider>
    );
  };

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
      /* const routes = flatNavigation.filter(x => x.slug).map(({ id, slug, binding, pageId, bindingId }) => (
        <DataRoute key={id} id={pageId || id} bindingId={bindingId} binding={binding} match={pathname === slug} component={PageSidebar} location={location} navigation={navigation} flatNavigation={flatNavigation} />
      ));*/

      if (!auth.user) {
        return <NoAuth {...this.props} />;
      }
      return <IfAuth {...this.props} />;
    }
  }
  return CMS;
};
