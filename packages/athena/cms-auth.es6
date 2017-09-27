import React, { Component } from 'react';
import { Switch, Route } from 'olymp-router';
import { AuthModals, AuthUsers, AuthUser } from 'olymp-auth';
import { withUA } from 'olymp-utils';
import EditableRoute from 'olymp-pages/editable';
import PageRoute from 'olymp-pages/route';
import { CloudinaryRoute, Lightbox } from 'olymp-cloudinary';
import { CollectionRoute, CollectionModal, withCollections } from 'olymp-collection';
import { createComponent, getAntStyle, TopLoader } from 'olymp-fela';
import { Hotjar } from 'olymp-ui';
import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import { asyncComponent } from 'react-async-component';
import NavigationVertical from './navigation-vertical';
import { SettingsRoute } from './settings';
import { TemplateRoute } from './templates';

const Analytics = asyncComponent({
  resolve: () => System.import('olymp-google/analytics'),
});

const Container = createComponent(
  ({ theme }) => ({
    ...getAntStyle({ theme }),
    hasFlex: {
      display: 'flex',
      flexDirection: 'row',
    },
    height: '100%',
    backgroundColor: '#Cf5f5f5',
  }),
  'div',
  []
);

const SwitchContainer = createComponent(
  () => ({
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 0%',
      height: '100%',
      overflowY: 'auto',
    },
  }),
  'div',
  p => Object.keys(p)
);

const Footer = createComponent(
  ({ theme }) => ({
    padding: theme.space2,
    backgroundColor: theme.dark,
    color: theme.light,
    textAlign: 'center',
  }),
  'div',
  p => Object.keys(p)
);

const Load = connect(({ app }) => ({
  loading: app.loading,
}))(TopLoader);

const enhance = compose(
  withUA,
  withCollections,
  connect(({ location }) => ({
    query: location.query,
  })),
  withState('deviceWidth', 'setDeviceWidth', undefined)
);
const component = enhance((props) => {
  const { query, collectionList, ua, deviceWidth, setDeviceWidth } = props;
  const collection = collectionList.filter(
    ({ name }) => query[`@${name.toLowerCase()}`] !== undefined
  )[0];
  const collectionName = collection && collection.name;
  const collectionId =
    (collectionName && query && query[`@${collectionName.toLowerCase()}`]) ||
    'new';

  return (
    <Container>
      <Load />
      <Lightbox />
      <Hotjar id={process.env.HOTJAR} />
      <AuthModals />
      {!!collection &&
        query.modal === null &&
        <CollectionModal
          {...props}
          open={!!collection && query.modal === null}
          id={collectionId}
          typeName={collectionName}
          onClose={() =>
            router.push({
              pathname,
              query: {
                ...query,
                [`@${collectionName.toLowerCase()}`]: undefined,
                modal: undefined,
              },
            })}
        />}
      <NavigationVertical collectionList={collectionList} setDeviceWidth={setDeviceWidth} />
      <SwitchContainer>
        <Switch>
          <Route
            match={query['@template'] !== undefined}
            render={() => <TemplateRoute {...props} />}
          />
          <Route
            match={!!collection && query.modal === undefined}
            render={() =>
              (<CollectionRoute
                {...props}
                id={collectionId}
                typeName={collectionName}
              />)}
          />
          <Route
            match={query['@page'] !== undefined}
            render={() =>
              (<EditableRoute
                {...props}
                deviceWidth={deviceWidth}
              />)}
          />
          <Route
            match={query['@media'] !== undefined}
            render={() => <CloudinaryRoute {...props} />}
          />
          <Route
            match={query['@settings'] !== undefined}
            render={() => <SettingsRoute {...props} />}
          />
          <Route
            match={query['@analytics'] !== undefined}
            render={() => <Analytics {...props} />}
          />
          <Route
            match={query['@users'] !== undefined}
            render={() => <AuthUsers {...props} />}
          />
          <Route
            match={query['@user'] !== undefined}
            render={() => <AuthUser {...props} />}
          />
          <Route
            render={rest =>
              (<PageRoute
                {...rest}
                {...props}
                key={location.key}
              />)}
          />
        </Switch>
      </SwitchContainer>
      {ua.getBrowser().name === 'IE' &&
        <Footer>
          <p>
            Wir empfehlen für die Verwendung von Olymp (und darüber hinaus)
            die Verwendung des Browsers{' '}
            <a href="https://www.google.de/chrome" rel="noopener noreferrer">
              Chrome
            </a>.
          </p>
        </Footer>}
    </Container>
  );
});

component.displayName = 'CmsAuth';
export default component;
