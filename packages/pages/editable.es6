import React from 'react';
import renderHelmet from 'olymp-utils/helmet';
import { ContentLoader } from 'olymp-fela';
import Writer from './writer';
import Error404 from './404';
import Navigation from './navigation';

export default props => {
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

  const notFound = !match && pathname !== '__new' && pathname !== '/__new';

  return (
    <Navigation {...props} left={72}>
      <Wrapped {...props} match={match}>
        {notFound ? (
          <ContentLoader height={600} isLoading={loading}>
            <Error404
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
        ) : (
          <ContentLoader height={600} isLoading={loading}>
            <Writer
              {...props}
              match={match}
              key={pageId || id}
              id={pageId || id}
              bindingId={bindingId}
              binding={binding}
            >
              {renderHelmet(match, pathname)}
            </Writer>
          </ContentLoader>
        )}
      </Wrapped>
    </Navigation>
  );
};
