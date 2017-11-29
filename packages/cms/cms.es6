import React from 'react';
import { compose, withPropsOnChange, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { ThemeProvider, ScreenLoader, Logo } from 'olymp-fela';
import { useSchema } from 'olymp-slate';
import { withAuth, getAuth } from 'olymp-auth0';
import { LightboxProvider } from 'olymp-cloudinary';
import getNavigation from 'olymp-pages/get-navigation';
import { asyncComponent } from 'react-async-component';
import { get } from 'lodash';
import NoAuth from './cms-noauth';
import { withRedux } from './redux';

const IfAuth = asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
        [],
        require => {
          resolve(require('./cms-auth'));
        },
        'cms',
      ),
    ),
});

const enhance = compose(
  // DragDropContext(HTML5Backend),
  withPropsOnChange(['auth'], ({ auth }) => ({
    auth: {
      attributes: `
        id
        name
        email
        isAdmin
        token
        _appIds
        ${get(auth, 'attributes', '')}
      `,
    },
  })),
  withAuth,
  withRedux,
  useSchema,
  withPropsOnChange(['theme'], ({ theme }) => ({
    theme: {
      logo: () => <Logo />,
      logoWhite: () => <Logo color="white" />,
      logoTitle: 'olymp cms',
      ...theme,
    },
  })),
);

const Auth = connect(({ auth }) => ({
  isAuthenticated: !!auth.user,
}))(
  ({ isAuthenticated, ...rest }) =>
    isAuthenticated ? <IfAuth {...rest} /> : <NoAuth {...rest} />,
);
Auth.displayName = 'CmsAuthSwitch';

const Callback = compose(getAuth)(() => null);
Callback.displayName = 'AuthCallback';

const Load = getNavigation(
  connect(({ auth, location }, { isNavigationLoading }) => ({
    pathname: location.pathname,
    isLoading:
      isNavigationLoading ||
      (auth.verifying &&
        typeof window !== 'undefined' &&
        !!Object.keys(location.query).find(key => key.indexOf('@') === 0)) ||
      (typeof window === 'undefined' &&
        !!Object.keys(location.query).find(key => key.indexOf('@') === 0)) ||
      false,
  }))(({ isLoading, pathname, ...rest }) => [
    <ScreenLoader key={0} show={isLoading} />,
    pathname === '/auth' && <Callback key={1} {...rest} />,
  ]),
);
Load.displayName = 'CmsLoadSwitch';

const component = Wrapped =>
  enhance(({ theme, ...rest }) => (
    <ThemeProvider theme={theme}>
      <LightboxProvider>
        <Load {...rest} Wrapped={Wrapped} />
      </LightboxProvider>
    </ThemeProvider>
  ));
component.displayName = 'Cms';
export default component;
