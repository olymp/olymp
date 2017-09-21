import React from 'react';
import { IFrame, ContentLoader, PageTransition } from 'olymp-fela';
import { renderHelmet } from 'olymp-utils';
import Actions from 'olymp-ui/actions';
import { Icon } from 'antd';
import { Link } from 'olymp-router';
import { Error404, Page, EditablePage } from './views';

export const EditablePageRoute = (props) => {
  const { Wrapped, flatNavigation, pathname, loading, deviceWidth } = props;
  const match = flatNavigation.find(item => pathname === item.pathname);
  const { id, binding, pageId, aliasId, bindingId } = match || {};

  if (!match && pathname !== '/__new') {
    return (
      <ContentLoader height={600} isLoading={loading}>
        <EditablePage
          {...props}
          maxWidth={deviceWidth}
          render={match => (
            <IFrame disabled={!deviceWidth}>
              <Wrapped {...props}>
                {renderHelmet({
                  name: '404',
                  description: 'Seite wurde nicht gefunden',
                  pathname,
                })}
                <Error404 />
              </Wrapped>
            </IFrame>
          )}
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
        render={children => (
          <IFrame disabled={!deviceWidth}>
            <Wrapped {...props} match={match}>
              {renderHelmet(match, pathname)}
              {children}
            </Wrapped>
          </IFrame>
        )}
      />
    </ContentLoader>
  );
};

export const PageRoute = (props) => {
  const { Wrapped, flatNavigation, pathname, loading } = props;
  const match = flatNavigation.find(
    item => pathname === item.pathname || decodeURI(unescape(item.pathname)) === pathname,
  );
  const { id, binding, pageId, aliasId, bindingId } = match || {};
  return (
    <Wrapped {...props} match={match}>
      {renderHelmet(match || {}, pathname)}
      <Actions>
        <Link className="ant-btn ant-btn-primary ant-btn-circle ant-btn-lg ant-btn-icon-only" updateQuery={{ '@page': 'tree' }}>
          <Icon type="edit" />
        </Link>
      </Actions>
      <ContentLoader height={600} isLoading={loading}>
        <PageTransition innerKey={id}>
          {match ? (
            <Page.WithData
              {...props}
              key={id}
              id={pageId || aliasId || id}
              bindingId={bindingId}
              binding={binding}
            />
          ) : (
            <Error404 />
          )}
        </PageTransition>
      </ContentLoader>
    </Wrapped>
  );
};
