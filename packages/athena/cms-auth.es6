import React, { Component } from 'react';
import { AltSwitch, AltRoute } from 'olymp-router';
import { AuthModals, AuthUsers, AuthUser } from 'olymp-auth';
import { withUA } from 'olymp-utils';
import { EditablePageRoute, PageRoute } from 'olymp-pages';
import { CloudinaryRoute, Lightbox } from 'olymp-cloudinary';
import { CollectionRoute, CollectionModal } from 'olymp-collection';
import { Analytics } from 'olymp-google';
import { createComponent, getAntStyle, TopLoader } from 'olymp-fela';
import { Hotjar } from 'olymp-ui';
import { GatewayDest } from 'react-gateway';
import { connect } from 'react-redux';
import NavigationVertical from './navigation-vertical';
import { SettingsRoute } from './settings';
import { TemplateRoute } from './templates';

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
  loading: app.loading
}))(TopLoader);
@withUA
export default class CMSAuth extends Component {
  state = { deviceWidth: undefined };

  render() {
    const {
      query,
      collectionList,
      location,
      navigation,
      router,
      pathname,
      ua,
      _isLoading,
      theme,
      wrapper: Wrapped,
    } = this.props;
    const { deviceWidth } = this.state;
    const collection = collectionList.filter(
      ({ name }) => query[`@${name.toLowerCase()}`] !== undefined
    )[0];
    const collectionName = collection && collection.name;
    const collectionId =
      (collectionName && query && query[`@${collectionName.toLowerCase()}`]) ||
      'new';

    return (
      <Container theme={theme}>
        <Load />
        <Lightbox />
        <GatewayDest name="modal" />
        <Hotjar id={process.env.HOTJAR} />
        <AuthModals />
        {!!collection &&
          query.modal === null &&
          <CollectionModal
            {...this.props}
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
        <NavigationVertical
          collectionList={collectionList}
          setDeviceWidth={deviceWidth => this.setState({ deviceWidth })}
          {...location}
          location={location}
        />
        <SwitchContainer>
          <AltSwitch>
            <AltRoute
              match={query['@template'] !== undefined}
              render={() => <TemplateRoute {...this.props} />}
            />
            <AltRoute
              match={!!collection && query.modal === undefined}
              render={() =>
                (<CollectionRoute
                  {...this.props}
                  id={collectionId}
                  typeName={collectionName}
                  Wrapped={Wrapped}
                />)}
            />
            <AltRoute
              match={query['@page'] !== undefined}
              render={() =>
                (<EditablePageRoute
                  {...this.props}
                  deviceWidth={deviceWidth}
                  Wrapped={Wrapped}
                />)}
            />
            <AltRoute
              match={query['@media'] !== undefined}
              render={() => <CloudinaryRoute {...this.props} />}
            />
            <AltRoute
              match={query['@settings'] !== undefined}
              render={() => <SettingsRoute {...this.props} />}
            />
            <Analytics
              match={query['@analytics'] !== undefined}
              render={() => <AuthUsers {...this.props} />}
            />
            <AltRoute
              match={query['@users'] !== undefined}
              render={() => <AuthUsers {...this.props} />}
            />
            <AltRoute
              match={query['@user'] !== undefined}
              render={() => <AuthUser {...this.props} />}
            />
            <AltRoute
              render={rest =>
                (<PageRoute
                  {...rest}
                  {...this.props}
                  key={location.key}
                  navigation={navigation}
                  Wrapped={Wrapped}
                />)}
            />
          </AltSwitch>
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
  }
}
