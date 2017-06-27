import React from 'react';
import { IFrame, ContentLoader, PageTransition } from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';
import { Helmet } from 'olymp';

const renderHelmet = ({ name, description, tags }) => {
  const meta = [];
  if (description) {
    meta.push({
      name: 'description',
      content: description,
    });
  }
  if (tags) {
    meta.push({
      name: 'keywords',
      content: tags ? tags.join(',') : undefined,
    });
  }
  return <Helmet title={name} meta={meta} />;
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
              {renderHelmet(match)}
              {children}
            </Wrapped>
          </IFrame>)}
      />
    </ContentLoader>
  );
};

export const PageRoute = (props) => {
  const { Wrapped, flatNavigation, pathname, loading } = props;
  const match = flatNavigation.find(({ slug }) => pathname === slug);
  const { id, binding, pageId, aliasId, bindingId } = match || {};

  return (
    <Wrapped {...props} match={match}>
      {renderHelmet(match || {})}
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
