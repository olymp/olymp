import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import { ThemeProvider, ScreenLoader, Logo } from 'olymp-fela';
import { useSchema } from 'olymp-slate';
import { useAuth } from 'olymp-auth';
import { LightboxProvider } from 'olymp-cloudinary';
import getNavigation from 'olymp-pages/get-navigation';
import { asyncComponent } from 'react-async-component';
import { get } from 'lodash';
import NoAuth from './cms-noauth';
import { withRedux } from './redux';

const IfAuth = asyncComponent({
  name: 'cms',
  resolve: () => System.import('./cms-auth'),
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
  useAuth,
  withRedux,
  useSchema,
  withPropsOnChange(['theme'], ({ theme }) => ({
    theme: {
      logoWhite: () => <Logo clean />,
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

const Load = getNavigation(
  connect(({ auth, location }, { isNavigationLoading }) => ({
    isLoading:
      isNavigationLoading ||
      (auth.verifying &&
        typeof window !== 'undefined' &&
        !!Object.keys(location.query).find(key => key.indexOf('@') === 0)) ||
      (typeof window === 'undefined' &&
        !!Object.keys(location.query).find(key => key.indexOf('@') === 0)) ||
      false,
  }))(({ isLoading, ...rest }) => [
    <ScreenLoader key={0} show={isLoading} />,
    <Auth key={1} {...rest} />,
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
