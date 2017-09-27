import React from 'react';
import { renderHelmet } from 'olymp-utils';
import { compose, withPropsOnChange } from 'recompose';
import Actions from 'olymp-ui/actions';
import { Icon } from 'antd';
import { Link, MatchSwitch, MatchPaths, Match } from 'olymp-router';
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
  return (
    <MatchSwitch>
      {flatNavigation.map(item => (
        <MatchPaths
          exact
          match={[decodeURI(unescape(item.pathname)), `/page_id/${item.id}`]}
          key={item.id}
        >
          <Wrapped navigation={publicNavigation}>
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
            {renderHelmet(item, pathname)}
            <Page.WithData
              id={item.pageId || item.aliasId || item.id}
              bindingId={item.bindingId}
              binding={item.binding}
            />
          </Wrapped>
        </MatchPaths>
      ))}
      <Match>
        <Wrapped navigation={publicNavigation}>
          {renderHelmet({}, pathname)}
          <Error404 />
        </Wrapped>
      </Match>
    </MatchSwitch>
  );
});
PageRoute.displayName = 'PageRoute';
export default PageRoute;
