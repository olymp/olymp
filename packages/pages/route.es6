import React from 'react';
import { renderHelmet } from 'olymp-utils';
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
  withPropsOnChange(['navigation'], ({ navigation }) => ({
    publicNavigation: filterPublic(navigation),
  })),
  connect(({ auth, location }) => ({
    isAuthenticated: !!auth.user,
    pathname: location.pathname,
  })),
);

const PageRoute = enhance((props) => {
  const { Wrapped, flatNavigation, publicNavigation, pathname, isAuthenticated } = props;
  const match =
    pathname.indexOf('/page_id') === 0
      ? flatNavigation.find(item => pathname.substr('/page_id'.length) === item.id)
      : flatNavigation.find(
        item => pathname === item.pathname || decodeURI(unescape(item.pathname)) === pathname,
      );
  const { id, binding, pageId, aliasId, bindingId } = match || {};
  return (
    <Wrapped {...props} navigation={publicNavigation} match={match}>
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
    </Wrapped>
  );
});
PageRoute.displayName = 'PageRoute';
export default PageRoute;
