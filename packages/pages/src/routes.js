import React from 'react';
import { IFrame, ContentLoader } from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';
import { Helmet } from 'olymp';

const renderHelmet = ({ name, description, tags }) => (
  <Helmet
    title={name}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: tags ? tags.join(',') : undefined,
      },
    ]}
  />
  );
export const EditablePageRoute = (props) => {
  const { Wrapped, flatNavigation, query, pathname, loading } = props;
  const match = flatNavigation.find(item => pathname === item.pathname);
  const { id, binding, pageId, aliasId, bindingId } = match || {};
  const deviceWidth = query['@deviceWidth'];

  if (!match) {
    return (
      <ContentLoader isLoading={loading}>
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
    <ContentLoader isLoading={loading}>
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
      {renderHelmet(match)}
      <ContentLoader isLoading={loading}>
        {match
          ? <Page.WithData
            {...props}
            id={pageId || aliasId || id}
            bindingId={bindingId}
            binding={binding}
          />
          : <Error404 />}
      </ContentLoader>
    </Wrapped>
  );
};
