import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import Actions from 'olymp-ui/actions';
import { Icon } from 'antd';
import { Link } from 'olymp-router';
import { connect } from 'react-redux';
import Error404 from './views/404';
import Page from './views/page';

const filterPublic = pages =>
  pages.filter(page => page.state === 'PUBLISHED').map(({ children, ...rest }) => ({
    ...rest,
    children: filterPublic(children),
  }));

const enhance = compose(
  connect(({ auth, location }) => ({
    isAuthenticated: !!auth.user,
    pathname: location.pathname,
  })),
  withPropsOnChange(['navigation'], ({ navigation }) => ({
    publicNavigation: filterPublic(navigation),
  })),
  withPropsOnChange(['flatNavigation', 'pathname'], ({ flatNavigation, pathname }) => {
    let item;
    for (let x = 0; x < flatNavigation.length; x++) {
      const page = flatNavigation[x];
      if (decodeURI(unescape(page.pathname)) === pathname || `/page_id/${page.id}` === pathname) {
        item = page;
        break;
      }
    }
    return {
      item,
    };
  }),
);

const PageRoute = enhance((props) => {
  const { Wrapped, publicNavigation, pathname, isAuthenticated, item } = props;
  console.log(item);
  return (
    <Wrapped navigation={publicNavigation}>
      {isAuthenticated && (
        <Actions position="left">
          <Link
            className="ant-btn ant-btn-circle ant-btn-lg ant-btn-icon-only"
            updateQuery={{ '@page': 'tree' }}
          >
            <Icon type="edit" />
          </Link>
        </Actions>
      )}
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
