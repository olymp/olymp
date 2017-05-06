import React, { Component, PropTypes } from 'react';
import { auth as withAuth, withRouter, styled, withLangProvider, SimpleSwitch, SimpleRoute } from 'olymp';
import { EditablePageRoute, PageRoute, withNavigation } from './pages';
import { CollectionRoute } from './collection';
import { CloudinaryRoute } from './cloudinary';
import { TemplateRoute, withTemplates } from './templates';
import { withLocale } from 'olymp/locale-de';
import { HashtaxProvider } from 'olymp/hashtax';
import { ThemeProvider } from 'react-fela';
import { NavigationVertical } from './navigation';
import { AuthRoutes } from 'olymp/auth';
import { GatewayDest } from 'react-gateway';
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

export default ({ auth, theme, locale, hashtax, modules }) => Wrapped => {
  // Container for authed users
  const IfAuth = (props) => {
    const { query } = props;
    const collection = Object.keys(modules).filter(key => query[`@${key}`] !== undefined).map(key => ({ key, ...modules[key] }))[0];
    return (
      <ThemeProvider theme={theme}>
        <HashtaxProvider {...hashtax} components={{ ...hashtax.components, ...props.templates }}>
          <Container>
            <GatewayDest name="modal" />
            <AuthRoutes />
            <NavigationVertical collections={props.collections} deviceWidth={query[`@deviceWidth`]} {...props.location} location={props.location} />
            <SimpleSwitch>
              <SimpleRoute match={query[`@template`] !== undefined} render={() => <TemplateRoute {...props} />} />
              <SimpleRoute match={!!collection} render={() => <CollectionRoute {...props} modules={modules} collection={collection} Wrapped={Wrapped}  />} />
              <SimpleRoute match={query[`@page`] !== undefined} render={() => <EditablePageRoute {...props} Wrapped={Wrapped}  />} />
              <SimpleRoute match={query[`@media`] !== undefined} render={() => <CloudinaryRoute {...props} />} />
              <SimpleRoute render={() => <PageRoute {...props} Wrapped={Wrapped} />} />
            </SimpleSwitch>
          </Container>
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
          <div>
            <AuthRoutes />
            <GatewayDest name="modal" />
            <PageRoute {...props} Wrapped={Wrapped} />
          </div>
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
}
