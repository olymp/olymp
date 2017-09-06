import React from 'react';
import { IFrame, ContentLoader, PageTransition } from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';
import { renderHelmet } from 'olymp-utils';
import { Link } from 'olymp-router';
import { Menu, Icon } from 'antd';
import { lowerFirst, get } from 'lodash';
import { Gateway } from 'react-gateway';

const renderGateway = (
  { pathname, collectionList, query } = {},
  { binding, bindingId } = {}
) => {
  const isEditPage = query['@page'] !== undefined;
  const hasBinding = binding && binding.type;
  return (
    <Gateway into="quick">
      <Menu.SubMenu title={<Icon type="plus" />}>
        <Menu.Item key="page-plus">
          <Link
            to={{
              pathname,
              query: { ...query, '@page': 'new' },
            }}
          >
            Seite
          </Link>
        </Menu.Item>
        {collectionList.map(collection =>
          (<Menu.Item key={`@${collection.name.toLowerCase()}`}>
            <Link
              to={{
                query: {
                  ...query,
                  [`@${collection.name.toLowerCase()}`]: null,
                  modal: null,
                },
              }}
            >
              {get(collection, 'decorators.label.value', collection.name)}
            </Link>
          </Menu.Item>)
        )}
      </Menu.SubMenu>
      {hasBinding &&
        <Menu.Item key="save">
          <Link
            to={{
              pathname,
              query: {
                [`@${lowerFirst(binding.type)}`]: bindingId,
                modal: null,
              },
            }}
          >
            <Icon type="edit" />
          </Link>
        </Menu.Item>}
      {!isEditPage &&
        !hasBinding &&
        <Menu.Item key="@page">
          <Link
            to={{
              query: { '@page': null },
            }}
          >
            <Icon type="edit" />
          </Link>
        </Menu.Item>}
    </Gateway>
  );
};

export const EditablePageRoute = (props) => {
  const {
    Wrapped,
    flatNavigation,
    query,
    pathname,
    loading,
    deviceWidth,
  } = props;
  const match = flatNavigation.find(item => pathname === item.pathname);
  const { id, binding, pageId, aliasId, bindingId } = match || {};

  if (!match) {
    return (
      <ContentLoader height={600} isLoading={loading}>
        <EditablePage
          {...props}
          maxWidth={deviceWidth}
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
        maxWidth={deviceWidth}
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
        <PageTransition innerKey={id}>
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
