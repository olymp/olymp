import React from 'react';
import renderHelmet from 'olymp-utils/helmet';
import { ContentLoader } from 'olymp-fela';
import { compose, withPropsOnChange, withState } from 'recompose';
import { connect } from 'react-redux';
import Writer from './writer';
import Error404 from './404';
import Navigation from './navigation';

const enhance = compose(
  connect(({ location }) => ({
    pathname: location.pathname,
  })),
  withState('formOpen', 'setFormOpen', false),
  withPropsOnChange(
    ['flatNavigation', 'pathname'],
    ({ flatNavigation, pathname }) => {
      let item;
      for (let x = 0; x < flatNavigation.length; x++) {
        const page = flatNavigation[x];
        if (
          decodeURI(page.pathname) === pathname ||
          `/${page.id}` === pathname
        ) {
          item = page;
          break;
        }
      }
      return {
        item,
      };
    },
  ),
);

export default enhance(props => {
  const { Wrapped, pathname, loading, item } = props;
  const { id, binding, pageId, bindingId } = item || {};

  const notFound = !item && pathname !== '__new' && pathname !== '/__new';

  return (
    <Navigation {...props} left={72}>
      <Wrapped {...props} match={item}>
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
              match={item}
              key={pageId || id}
              id={pageId || id}
              bindingId={bindingId}
              binding={binding}
            >
              {renderHelmet(item, pathname)}
            </Writer>
          </ContentLoader>
        )}
      </Wrapped>
    </Navigation>
  );
});
