import React from 'react';
import { compose } from 'recompose';
import Portal from 'olymp-fela/portal';
import { createComponent } from 'react-fela';
import { Switch, Match, matchPaths } from 'olymp-router';
import { connect } from 'react-redux';
import Page from 'olymp-pages/views/page';

const Invisible = createComponent(
  () => ({
    position: 'absolute',
    bottom: -10000,
    left: -10000,
    width: 0,
    height: 0,
    overflow: 'hidden',
  }),
  'div',
);

const enhance = compose(
  connect(({ cms }) => ({
    prefetch: cms.prefetch,
  })),
);

const PagePrefetchRoute = enhance((props) => {
  const { flatNavigation, prefetch } = props;
  console.log(prefetch);
  if (!prefetch) {
    return null;
  }
  return (
    <Portal>
      <Invisible>
        <Switch>
          {flatNavigation.map(item => (
            <Match
              match={matchPaths(prefetch.pathname, true, [
                decodeURI(unescape(item.pathname)),
                `/page_id/${item.id}`,
              ])}
              key={item.id}
            >
              <Page.WithData
                id={item.pageId || item.aliasId || item.id}
                bindingId={item.bindingId}
                binding={item.binding}
              />
            </Match>
          ))}
        </Switch>
      </Invisible>
    </Portal>
  );
});
PagePrefetchRoute.displayName = 'PagePrefetchRoute';
export default PagePrefetchRoute;
