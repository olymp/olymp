import React from 'react';
import { SimpleSwitch, SimpleRoute } from 'olymp';
import { AuthModals, AuthUsers, AuthUser } from 'olymp-auth';
import { GatewayDest } from 'react-gateway';
import { EditablePageRoute, PageRoute } from 'olymp-pages';
import { CloudinaryRoute, Lightbox } from 'olymp-cloudinary';
import { CollectionRoute } from 'olymp-collection';
import NavigationVertical from './navigation';
import { SettingsRoute } from './settings';
import { TemplateRoute } from './templates';
import { createComponent, getAntStyle } from 'olymp-fela';

const Container = createComponent(
  ({ theme }) => ({
    ...getAntStyle({ theme }),
    display: 'flex',
    height: '100%',
    backgroundColor: '#f5f5f5',
    '> :last-child': {
      flex: 1,
      height: '100%',
      overflowY: 'auto',
    },
  }),
  'div',
  ({ deviceWidth, ...p }) => Object.keys(p)
);

export default (props) => {
  const {
    query,
    templates,
    collections,
    collectionList,
    location,
    theme,
    navigation,
    wrapper: Wrapped,
  } = props;
  const collection = collectionList.filter(
    ({ name }) => query[`@${name.toLowerCase()}`] !== undefined
  )[0];

  return (
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
        <SimpleRoute
          match={query['@template'] !== undefined}
          render={() => <TemplateRoute {...props} />}
        />
        <SimpleRoute
          match={!!collection}
          render={() =>
            (<CollectionRoute
              {...props}
              typeName={collection && collection.name}
              Wrapped={Wrapped}
            />)}
        />
        <SimpleRoute
          match={query['@page'] !== undefined}
          render={() => <EditablePageRoute {...props} Wrapped={Wrapped} />}
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
          match={query['@users'] !== undefined}
          render={() => <AuthUsers {...props} />}
        />
        <SimpleRoute
          match={query['@user'] !== undefined}
          render={() => <AuthUser {...props} />}
        />
        <SimpleRoute
          render={rest =>
            (<PageRoute
              {...rest}
              {...props}
              key={location.key}
              navigation={navigation}
              Wrapped={Wrapped}
            />)}
        />
      </SimpleSwitch>
    </Container>
  );
};
