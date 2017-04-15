import React, { Component, PropTypes } from 'react';
import { Panel } from 'olymp/ui';
import { auth as withAuth, withRouter, withState, styled } from 'olymp';
import { withNavigation, PageSidebar, CollectionSidebar, DataRoute, PageGql, Error404 } from './pages';
import { withLocale } from 'olymp/locale-de';
import { createHashtaxProvider } from 'olymp/hashtax';
import { ThemeProvider } from 'react-fela';
import { NavigationVertical } from './navigation';
import { AuthRoutes } from 'olymp/auth';
import { GatewayDest } from 'react-gateway';
import FrameComponent from 'react-frame-component';

class FrameInner extends Component {
  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any
  }
  componentDidMount() {
    const parent = window;
    const { document } = this.context;
    console.log(parent, document);
    setTimeout(() => {
      var oHead = document.getElementsByTagName('head')[0];
      var arrStyleSheets = [
        ...parent.document.getElementsByTagName('style'),
        ...parent.document.getElementsByTagName('link')
      ];
      for (var i = 0; i < arrStyleSheets.length; i++)
        oHead.appendChild(arrStyleSheets[i].cloneNode(true));
    }, 0);
  }
  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}
const Frame = ({ children }) => (
  <FrameComponent>
    <FrameInner>
      {children}
    </FrameInner>
  </FrameComponent>
)

export const Container = styled(({ deviceWidth }) => ({
  display: 'flex',
  height: '100%',
  '> :last-child': {
    flex: 1,
  },
  '> *': {
    overflow: 'auto',
  },
}), 'div', ({ deviceWidth, ...p }) => p);

export default ({ auth, theme, locale, hashtax, modules }) => Wrapped => {
  const HashtaxProvider = createHashtaxProvider(hashtax);
  const cache = {};
  // Container for authed users
  const IfAuth = (props) => {
    const deviceWidth = props.query[`@deviceWidth`];
    const type = Object.keys(modules).find(key => props.query[`@${key}`] !== undefined);
    const collection = type && modules[type];
    const collectionPage = collection && props.flatNavigation.find(({ binding }) => binding && binding.indexOf(type) === 0);
    let inner = null;
    if (collection && collectionPage) { // Show preview for collection
      const itemId = props.query[`@${type}`];
      const match = collectionPage;
      const View = cache[type] = cache[type] || CollectionSidebar(type, collection);
      inner = [match].map(({ id, slug, binding, pageId, aliasId, bindingId }) => (
        <View {...props} deviceWidth={deviceWidth} key={itemId} id={itemId} pageId={pageId || id} render={children => (
          <Wrapped {...props} match={match}>
            {children}
          </Wrapped>
        )} />
      ))[0];
    } else if (props.query[`@page`] !== undefined) { // Edit page
      const match = props.flatNavigation.find(({ slug }) => props.pathname === slug);
      inner = match ? [match].map(({ id, slug, binding, pageId, aliasId, bindingId }) => (
        <DataRoute {...props} deviceWidth={deviceWidth} collection={collection} component={PageSidebar} id={pageId || aliasId || id} bindingId={bindingId} binding={binding} render={children => (
          <Wrapped {...props} match={match}>
            {children}
          </Wrapped>
        )} />
      ))[0] : ( // If no page, render only wrapper
        <DataRoute {...props} deviceWidth={deviceWidth} component={PageSidebar} render={match => (
          <Wrapped {...props}>
            <Error404 />
          </Wrapped>
        )} />
      );
    } else { // No edit
      const match = props.flatNavigation.find(({ slug }) => props.pathname === slug);
      // Render page
      const children = match ? [match].map(({ id, slug, binding, pageId, aliasId, bindingId }) => (
        <DataRoute {...props} component={PageGql} id={pageId || aliasId || id} bindingId={bindingId} binding={binding} />
      ))[0] : <Error404 />;
      // Wrap rendered page
      inner = (
        <Wrapped {...props} match={match}>
          {children}
        </Wrapped>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <HashtaxProvider>
          <Container display="flex" height="100%">
            <NavigationVertical collections={props.collections} deviceWidth={deviceWidth} {...props.location} location={props.location} />
            <AuthRoutes />
            <GatewayDest name="modal" />
            {collection && !collectionPage && <collection.DataList id={props.query[`@${type}`]} />}
            {inner}
          </Container>
        </HashtaxProvider>
      </ThemeProvider>
    );
  };

  // Container for non-authed users
  const NoAuth = (props) => {
    const match = props.flatNavigation.find(({ slug }) => props.pathname === slug);
    // Render page
    const children = match ? [match].map(({ id, slug, binding, pageId, aliasId, bindingId }) => (
      <DataRoute {...props} component={PageGql} id={pageId || aliasId || id} bindingId={bindingId} binding={binding} />
    ))[0] : <Error404 />;
    // Wrap rendered page
    const inner = (
      <Wrapped {...props} match={match}>
        {children}
      </Wrapped>
    );
    return (
      <ThemeProvider theme={theme}>
        <HashtaxProvider>
          <div>
            <AuthRoutes />
            <GatewayDest name="modal" />
            {inner}
          </div>
        </HashtaxProvider>
      </ThemeProvider>
    );
  };

  @withRouter
  @withLocale
  @withAuth(auth)
  @withNavigation
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
