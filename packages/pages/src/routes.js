import React from 'react';
import {
  IFrame,
  ContentLoader,
  PageTransition,
  createComponent,
} from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';
import { Link, renderHelmet } from 'olymp';
import { Menu, Icon, Button as AntButton } from 'antd';
import { lowerFirst, get } from 'lodash';
import { Gateway } from 'react-gateway';

const Button = createComponent(
  ({ theme }) => ({
    borderRadius: theme.borderRadius,
    opacity: 0.85,
    margin: '0 -15px',
    onHover: {
      opacity: 1,
      backgroundColor: `${theme.color} !important`,
      color: `${theme.light} !important`,
    },
  }),
  p => <AntButton {...p} />,
  p => Object.keys(p)
);
const renderGateway = (
  { auth, pathname, collectionList, query } = {},
  { binding, bindingId } = {}
) => {
  if (!auth.user) {
    return null;
  }
  const deviceWidth = query['@deviceWidth'];
  const isEditPage = query['@page'] !== undefined;
  const hasBinding = binding && binding.type;
  return (
    <Gateway into="quick">
      <Menu.SubMenu
        title={
          <Button type="primary">
            <Icon type="plus" style={{ marginRight: 0 }} />
          </Button>
        }
      >
        <Menu.Item key="page-plus">
          <Link
            to={{
              pathname,
              query: { ...query, '@page': 'new' },
            }}
          >
            <Icon type="plus" style={{ marginRight: 0 }} /> Seite
          </Link>
        </Menu.Item>
        {collectionList.map(collection =>
          (<Menu.Item key={`@${collection.name.toLowerCase()}`}>
            <Link
              to={{
                query: {
                  [`@${collection.name.toLowerCase()}`]: null,
                },
              }}
            >
              <Icon type="plus" style={{ marginRight: 0 }} /> {get(collection, 'decorators.label.value', collection.name)}
            </Link>
          </Menu.Item>)
        )}
      </Menu.SubMenu>
      {hasBinding &&
        <Menu.Item key="save">
          <Link
            to={{
              pathname,
              query: { [`@${lowerFirst(binding.type)}`]: bindingId },
            }}
          >
            <Button type="primary">
              {binding.type} bearbeiten{' '}
              <Icon type="arrow-right" style={{ marginRight: 0 }} />
            </Button>
          </Link>
        </Menu.Item>}
      {!isEditPage &&
        !hasBinding &&
        <Menu.Item key="@page">
          <Link
            to={{
              query: { '@page': null, '@deviceWidth': deviceWidth },
            }}
          >
            <Button type="primary">
              Seite bearbeiten{' '}
              <Icon type="arrow-right" style={{ marginRight: 0 }} />
            </Button>
          </Link>
        </Menu.Item>}
    </Gateway>
  );
};
export const EditablePageRoute = (props) => {
  const { Wrapped, flatNavigation, query, pathname, loading } = props;
  const match = flatNavigation.find(item => pathname === item.pathname);
  const { id, binding, pageId, aliasId, bindingId } = match || {};
  const deviceWidth = query['@deviceWidth'];

  if (!match) {
    return (
      <ContentLoader height={600} isLoading={loading}>
        <EditablePage
          {...props}
          deviceWidth={deviceWidth}
          render={match =>
            (<IFrame disabled={!deviceWidth}>
              <Wrapped {...props}>
                {renderHelmet({
                  name: '404',
                  description: 'Seite wurde nicht gefunden',
                  pathname,
                })}
                <Error404 />
              </Wrapped>
            </IFrame>)}
        />
      </ContentLoader>
    );
  }

  return (
    <ContentLoader height={600} isLoading={loading}>
      <EditablePage
        {...props}
        deviceWidth={deviceWidth}
        id={pageId || aliasId || id}
        bindingId={bindingId}
        binding={binding}
        render={children =>
          (<IFrame disabled={!deviceWidth}>
            <Wrapped {...props} match={match}>
              {renderHelmet(match, pathname)}
              {renderGateway(props, match)}
              {children}
            </Wrapped>
          </IFrame>)}
      />
    </ContentLoader>
  );
};

export const PageRoute = (props) => {
  const { Wrapped, flatNavigation, pathname, loading } = props;
  const match = flatNavigation.find(item => pathname === item.pathname);
  const { id, binding, pageId, aliasId, bindingId } = match || {};
  return (
    <Wrapped {...props} match={match}>
      {renderHelmet(match || {}, pathname)}
      {renderGateway(props, match)}
      <ContentLoader height={600} isLoading={loading}>
        <PageTransition>
          {match
            ? <Page.WithData
              {...props}
              key={id}
              id={pageId || aliasId || id}
              bindingId={bindingId}
              binding={binding}
            />
            : <Error404 />}
        </PageTransition>
      </ContentLoader>
    </Wrapped>
  );
};
