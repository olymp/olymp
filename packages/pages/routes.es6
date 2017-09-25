import React from 'react';
import { IFrame, ContentLoader, PageTransition } from 'olymp-fela';
import { renderHelmet } from 'olymp-utils';
import Actions from 'olymp-ui/actions';
import { Icon } from 'antd';
import { Link } from 'olymp-router';
import { Error404, Page, EditablePage } from './views';
import { connect } from 'react-redux';

export const EditablePageRoute = (props) => {
  const { Wrapped, flatNavigation, pathname, loading, deviceWidth } = props;
  const match =
    pathname.indexOf('/page_id/') === 0
      ? flatNavigation.find(
        item => pathname.substr('/page_id/'.length) === (item.pageId || item.id),
      )
      : flatNavigation.find(
        item => pathname === item.pathname || decodeURI(unescape(item.pathname)) === pathname,
      );
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
        id={pageId || id}
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

export const PageRoute = connect(({ auth }) => ({
  isAuthenticated: !!auth.user,
}))((props) => {
  const { Wrapped, flatNavigation, pathname, loading, isAuthenticated } = props;
  const match =
    pathname.indexOf('/page_id') === 0
      ? flatNavigation.find(item => pathname.substr('/page_id'.length) === item.id)
      : flatNavigation.find(
        item => pathname === item.pathname || decodeURI(unescape(item.pathname)) === pathname,
      );
  const { id, binding, pageId, aliasId, bindingId } = match || {};
  return (
    <Wrapped {...props} match={match}>
      {renderHelmet(match || {}, pathname)}
      {isAuthenticated && (
        <Actions>
          <Link
            className="ant-btn ant-btn-primary ant-btn-circle ant-btn-lg ant-btn-icon-only"
            updateQuery={{ '@page': 'tree' }}
          >
            <Icon type="edit" />
          </Link>
        </Actions>
      )}
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
});
