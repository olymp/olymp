import React from 'react';
import { AltSwitch, AltRoute } from 'olymp-router';
import { AuthModals, AuthUsers, AuthUser } from 'olymp-auth';
import { withUA } from 'olymp-utils';
import { EditablePageRoute, PageRoute } from 'olymp-pages';
import { CloudinaryRoute, Lightbox } from 'olymp-cloudinary';
import { CollectionRoute } from 'olymp-collection';
import { AnalyticsRoutes } from 'olymp-google';
import { createComponent, getAntStyle } from 'olymp-fela';
import { Hotjar } from 'olymp-ui';
import { GatewayDest } from 'react-gateway';
import NavigationVertical from './navigation';
import { SettingsRoute } from './settings';
import { TemplateRoute } from './templates';

const Container = createComponent(
  ({ theme }) => ({
    ...getAntStyle({ theme }),
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
    },
    height: '100vh',
    backgroundColor: '#f5f5f5',
  }),
  'div',
  ({ deviceWidth, ...p }) => Object.keys(p)
);

const SwitchContainer = createComponent(
  ({ theme }) => ({
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

const Warning = createComponent(
  ({ theme }) => ({
    color: theme.colorDanger,
  }),
  'p',
  p => Object.keys(p)
);

export default withUA(props => {
  const {
    query,
    collectionList,
    location,
    navigation,
    wrapper: Wrapped,
  } = props;
  const collection = collectionList.filter(
    ({ name }) => query[`@${name.toLowerCase()}`] !== undefined
  )[0];

  return (
    <Hotjar id={process.env.HOTJAR}>
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
        <SwitchContainer>
          <AltSwitch>
            <AltRoute
              match={query['@template'] !== undefined}
              render={() => <TemplateRoute {...props} />}
            />
            <AltRoute
              match={!!collection}
              render={() =>
                <CollectionRoute
                  {...props}
                  typeName={collection && collection.name}
                  Wrapped={Wrapped}
                />}
            />
            <AltRoute
              match={query['@page'] !== undefined}
              render={() => <EditablePageRoute {...props} Wrapped={Wrapped} />}
            />
            <AltRoute
              match={query['@media'] !== undefined}
              render={() => <CloudinaryRoute {...props} />}
            />
            {/* <AltRoute match={query[`@stats`] !== undefined} render={() => <AnalyticsRoute {...props} />} />*/}
            <AltRoute
              match={query['@settings'] !== undefined}
              render={() => <SettingsRoute {...props} />}
            />
            <AnalyticsRoutes
              match={query['@analytics'] !== undefined}
              render={() => <AuthUsers {...props} />}
            />
            <AltRoute
              match={query['@users'] !== undefined}
              render={() => <AuthUsers {...props} />}
            />
            <AltRoute
              match={query['@user'] !== undefined}
              render={() => <AuthUser {...props} />}
            />
            <AltRoute
              render={rest =>
                <PageRoute
                  {...rest}
                  {...props}
                  key={location.key}
                  navigation={navigation}
                  Wrapped={Wrapped}
                />}
            />
          </AltSwitch>
        </SwitchContainer>
        {props.ua.getBrowser().name !== 'Chrome' &&
          <Footer>
            <p>
              Wir empfehlen für die Verwendung von Olymp (und darüber hinaus)
              die Verwendung des Browsers{' '}
              <a href="https://www.google.de/chrome" rel="noopener noreferrer">
                Chrome
              </a>.
            </p>
            {props.ua.getBrowser().name === 'IE' &&
              <Warning>
                Der Internet Explorer ist ausdrücklich nicht unterstützt!
              </Warning>}
          </Footer>}
      </Container>
    </Hotjar>
  );
});
