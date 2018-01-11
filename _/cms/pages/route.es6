import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import Error404 from './404';
import Page from './reader';

const filterPublic = pages =>
  pages
    .filter(page => page.state === 'PUBLISHED')
    .map(({ children, ...rest }) => ({
      ...rest,
      children: filterPublic(children),
    }));

const enhance = compose(
  connect(({ location }) => ({
    pathname: location.pathname,
  })),
  withPropsOnChange(['navigation'], ({ navigation }) => ({
    publicNavigation: filterPublic(navigation),
  })),
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

const PageRoute = enhance(props => {
  const { Wrapped, publicNavigation, pathname, item } = props;
  return (
    <Wrapped navigation={publicNavigation}>
      {item && (
        <Page.WithData
          pathname={pathname}
          key={item.pageId || item.aliasId || item.id}
          id={item.pageId || item.aliasId || item.id}
          bindingId={item.bindingId}
          binding={item.binding}
        />
      )}
      {!item && <Error404 />}
    </Wrapped>
  );
});
PageRoute.displayName = 'PageRoute';
export default PageRoute;
