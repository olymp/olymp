import React from 'react';
import { Switch, Match, createUpdateQuery } from 'olymp-router';
import { AuthModals } from 'olymp-auth';
import { AuthUsers, AuthUser } from 'olymp-auth/admin';
import withUA from 'olymp-utils/user-agent';
import EditableRoute from 'olymp-pages/editable';
import withLocale from 'olymp-locale/de';
import { Route as CloudinaryRoute, Lightbox } from 'olymp-cloudinary';
import { CollectionRoute, withCollections } from 'olymp-collection';
import { createComponent, getAntStyle, TopLoader, Modal } from 'olymp-fela';
import { Hotjar } from 'olymp-ui';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Analytics from 'olymp-google/analytics';
import Navigation from './navigation';
import { SettingsRoute } from './settings';
import PrefetchRoutes from './prefetch-routes';
import * as LANG from './lang/de';

const Container = createComponent(
  ({ theme }) => ({
    ...getAntStyle({ theme }),
    backgroundColor: '#Cf5f5f5',
    height: '100%',
    '> div': {
      marginLeft: 64,
      position: 'relative',
      height: '100%',
    },
  }),
  'div',
  [],
);

const SwitchContainer = createComponent(() => ({ height: '100%' }), 'div', p =>
  Object.keys(p),
);

const Footer = createComponent(
  ({ theme }) => ({
    padding: theme.space2,
    backgroundColor: theme.dark,
    color: theme.light,
    textAlign: 'center',
  }),
  'div',
  p => Object.keys(p),
);

const Load = connect(({ app }) => ({
  loading: app.loading,
}))(TopLoader);

const enhance = compose(
  withLocale(LANG),
  withUA,
  withCollections,
  connect(
    ({ location }) => ({
      query: location.query,
      pathname: location.pathname,
    }),
    dispatch => ({
      updateQuery: createUpdateQuery(dispatch),
    }),
  ),
);
const component = enhance(props => {
  const {
    query,
    collectionList,
    collectionTree,
    ua,
    flatNavigation,
    updateQuery,
    pathname,
  } = props;
  const collection = collectionList.filter(
    ({ name }) => query[`@${name.toLowerCase()}`] !== undefined,
  )[0];
  const collectionName = collection && collection.name;
  const collectionId =
    collectionName && query && query[`@${collectionName.toLowerCase()}`];

  return (
    <Container>
      <PrefetchRoutes flatNavigation={flatNavigation} />
      <Load />
      <Lightbox />
      <Hotjar id={process.env.HOTJAR} />
      <AuthModals />
      <Modal
        open={!!collection && query.modal === null}
        onClose={() =>
          updateQuery({
            [`@${collectionName.toLowerCase()}`]: undefined,
            modal: undefined,
          })}
      >
        <CollectionRoute
          {...props}
          id={collectionId}
          typeName={collectionName}
        />
      </Modal>
      <Navigation
        collectionList={collectionList}
        collectionTree={collectionTree}
      />
      <Switch>
        <Match
          match={!!collection && query.modal !== null}
          render={() => (
            <CollectionRoute
              {...props}
              id={collectionId}
              typeName={collectionName}
            />
          )}
        />
        <Match
          match={query['@media'] !== undefined}
          render={() => <CloudinaryRoute {...props} />}
        />
        <Match
          match={query['@settings'] !== undefined}
          render={() => <SettingsRoute {...props} />}
        />
        <Match
          match={query['@analytics'] !== undefined}
          render={() => <Analytics {...props} />}
        />
        <Match
          match={query['@users'] !== undefined}
          render={() => <AuthUsers {...props} />}
        />
        <Match
          match={query['@user'] !== undefined}
          render={() => <AuthUser {...props} />}
        />
        <Match
          match={query['@page'] !== undefined}
          render={() => <EditableRoute {...props} />}
        />
        <Match
          render={rest => <EditableRoute {...rest} {...props} key={pathname} />}
        />
      </Switch>
      {ua.getBrowser().name === 'IE' && (
        <Footer>
          <p>
            Wir empfehlen für die Verwendung von Olymp (und darüber hinaus) die
            Verwendung des Browsers{' '}
            <a href="https://www.google.de/chrome" rel="noopener noreferrer">
              Chrome
            </a>.
          </p>
        </Footer>
      )}
    </Container>
  );
});

component.displayName = 'CmsAuth';
export default component;
