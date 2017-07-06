import React from 'react';
import { IFrame, ContentLoader, PageTransition } from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';
import { Helmet } from 'olymp';
import { Link } from 'olymp';
import { Menu, Icon, Button } from 'antd';
import { lowerFirst } from 'lodash';
import { Gateway } from 'react-gateway';

const getURL = () => {
  if (process.env.URL) {
    return process.env.URL;
  } else if (process.env.IS_WEB) {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return null;
};
const renderHelmet = (pathname, { name, description, tags } = {}) => {
  const meta = [];
  const link = [];
  meta.push({
    property: 'og:title',
    content: name,
  });
  meta.push({
    property: 'twitter:title',
    content: name,
  });
  meta.push({
    property: 'og:type',
    content: 'article',
  });
  if (description) {
    meta.push({
      name: 'description',
      content: description,
    });
    meta.push({
      property: 'og:description',
      content: description,
    });
    meta.push({
      property: 'twitter:description',
      content: description,
    });
  }
  if (tags) {
    meta.push({
      name: 'keywords',
      content: tags ? tags.join(',') : undefined,
    });
  }
  const url = getURL();
  if (url) {
    link.push({
      rel: 'amphtml',
      href: `${url + pathname}?amp`,
    });
    link.push({
      rel: 'canonical',
      href: url + pathname,
    });
    meta.push({
      property: 'og:url',
      content: url + pathname,
    });
  }

  return <Helmet title={name} meta={meta} link={link} />;
};
const renderGateway = ({ auth, pathname, collectionList, query } = {}, { binding, bindingId } = {}) => {
  if (!auth.user) return null;
  const deviceWidth = query['@deviceWidth'];
  const isEditPage = query['@page'] !== undefined;
  const hasBinding = binding && binding.type;
  return (
    <Gateway into="navigation">
      <Menu.SubMenu
        title={
          <Button type="primary" style={{ margin: '0 -15px' }}>
            <Icon type="plus" style={{ marginRight: 0 }} />
          </Button>
        }
      >
        {collectionList.map(collection =>
          (<Menu.Item key={`@${collection.name.toLowerCase()}`}>
            <Link
              to={{
                query: {
                  [`@${collection.name.toLowerCase()}`]: null,
                },
              }}
            >
              <Icon type="plus" style={{ marginRight: 0 }} /> {collection.name}
            </Link>
          </Menu.Item>)
        )}
      </Menu.SubMenu>
      {hasBinding && <Menu.Item key="save">
        <Link to={{ pathname, query: { [`@${lowerFirst(binding.type)}`]: bindingId } }}>
          <Button type="primary" style={{ margin: '0 -15px' }}>
            {binding.type} bearbeiten <Icon type="arrow-right" style={{ marginRight: 0 }} />
          </Button>
        </Link>
      </Menu.Item>}
      {!isEditPage && !hasBinding && <Menu.Item key="@page">
        <Link
          to={{
            query: { '@page': null, '@deviceWidth': deviceWidth },
          }}
        >
          <Button type="primary" style={{ margin: '0 -15px' }}>
            Seite bearbeiten <Icon type="arrow-right" style={{ marginRight: 0 }} />
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
                {renderHelmet(pathname, {
                  name: '404',
                  description: 'Seite wurde nicht gefunden',
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
              {renderHelmet(pathname, match)}
              {renderGateway(props, match)}
              {children}
            </Wrapped>
          </IFrame>)}
      />
    </ContentLoader>
  );
};

export const PageRoute = (props) => {
  const { Wrapped, flatNavigation, pathname, loading, ...rest } = props;
  const match = flatNavigation.find(({ slug }) => pathname === slug);
  const { id, binding, pageId, aliasId, bindingId } = match || {};
  return (
    <Wrapped {...props} match={match}>
      {renderHelmet(pathname, match || {})}
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
