import React from 'react';
import { ContentLoader } from 'olymp-fela';
import { renderHelmet } from 'olymp-utils';
import { compose, withPropsOnChange } from 'recompose';
import Actions from 'olymp-ui/actions';
import { Icon } from 'antd';
import { Link } from 'olymp-router';
import { connect } from 'react-redux';
import { Error404, Page } from './views';

const filterPublic = pages =>
  pages.filter(page => page.state === 'PUBLISHED').map(({ children, ...rest }) => ({
    ...rest,
    children: filterPublic(children),
  }));

const enhance = compose(
  /* withPropsOnChange(['navigation'], ({ navigation }) => ({
    navigation: filterPublic(navigation),
  })), */
  connect(({ auth, location }) => ({
    isAuthenticated: !!auth.user,
    pathname: location.pathname,
  })),
);

export default enhance((props) => {
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
      </ContentLoader>
    </Wrapped>
  );
});
