import React from 'react';
import { IFrame, ContentLoader } from 'olymp-fela';
import { renderHelmet } from 'olymp-utils';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Error404, EditablePage } from './views';
import { withNavigation } from './with-data';

const enhance = compose(
  withNavigation,
  connect(({ auth, location }) => ({
    isAuthenticated: !!auth.user,
    pathname: location.pathname,
  })),
);

export default enhance((props) => {
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
});
