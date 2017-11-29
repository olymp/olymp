import React from 'react';
import { ContentLoader } from 'olymp-fela';
import renderHelmet from 'olymp-utils/helmet';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Error404, EditablePage } from './views';

const enhance = compose(
  connect(({ auth, location }) => ({
    isAuthenticated: !!auth.user,
    pathname: location.pathname,
  })),
);

export default enhance(props => {
  const { Wrapped, flatNavigation, pathname, loading } = props;
  const match =
    pathname.indexOf('/page_id/') === 0
      ? flatNavigation.find(
          item =>
            pathname.substr('/page_id/'.length) === (item.pageId || item.id),
        )
      : flatNavigation.find(
          item =>
            pathname === item.pathname || decodeURI(item.pathname) === pathname,
        );
  const { id, binding, pageId, bindingId } = match || {};

  if (!match && pathname !== '__new' && pathname !== '/__new') {
    return (
      <ContentLoader height={600} isLoading={loading}>
        <EditablePage
          {...props}
          render={() => (
            <Wrapped {...props}>
              {renderHelmet({
                name: '404',
                description: 'Seite wurde nicht gefunden',
                pathname,
              })}
              <Error404 />
            </Wrapped>
          )}
        />
      </ContentLoader>
    );
  }

  return (
    <ContentLoader height={600} isLoading={loading}>
      <EditablePage
        {...props}
        id={pageId || id}
        bindingId={bindingId}
        binding={binding}
        render={children => (
          <Wrapped {...props} match={match}>
            {renderHelmet(match, pathname)}
            {children}
          </Wrapped>
        )}
      />
    </ContentLoader>
  );
});
