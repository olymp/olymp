import React from 'react';
import { IFrame, ContentLoader, PageTransition } from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';
import { Helmet } from 'olymp';

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
