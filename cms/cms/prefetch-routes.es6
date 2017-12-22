import React from 'react';
import PropTypes from 'prop-types';
import { compose, withPropsOnChange, withContext } from 'recompose';
import Portal from 'olymp-fela/portal';
import { createComponent } from 'react-fela';
import { connect } from 'react-redux';
import Page from 'olymp-pages/reader';

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
    pathname: cms.prefetch && cms.prefetch.pathname,
  })),
  withContext(
    {
      prefetch: PropTypes.bool,
    },
    () => ({
      prefetch: true,
    }),
  ),
  withPropsOnChange(
    ['flatNavigation', 'pathname'],
    ({ flatNavigation, pathname }) => {
      let item;
      if (pathname) {
        for (let x = 0; x < flatNavigation.length; x++) {
          const page = flatNavigation[x];
          if (
            decodeURI(unescape(page.pathname)) === pathname ||
            `/${page.id}` === pathname
          ) {
            item = page;
            break;
          }
        }
      }
      return {
        item,
      };
    },
  ),
);

const PagePrefetchRoute = enhance(props => {
  const { item } = props;
  if (!item) {
    return null;
  }
  return (
    <Portal>
      <Invisible>
        <Page.WithData
          key={item.pageId || item.aliasId || item.id}
          id={item.pageId || item.aliasId || item.id}
          bindingId={item.bindingId}
          binding={item.binding}
          prefetch
        />
      </Invisible>
    </Portal>
  );
});
PagePrefetchRoute.displayName = 'PagePrefetchRoute';
export default PagePrefetchRoute;
