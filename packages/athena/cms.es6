import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import { ThemeProvider, ScreenLoader } from 'olymp-fela';
import { useSchema } from 'olymp-slate';
import { useAuth } from 'olymp-auth';
import { LightboxProvider } from 'olymp-cloudinary';
import { asyncComponent } from 'react-async-component';
import { withNavigation } from 'olymp-pages/with-data';
import { get } from 'lodash';
import NoAuth from './cms-noauth';
import Logo from './logo';
import { withRedux } from './redux';

// import IfAuth from './cms-auth';
const IfAuth = asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
        [],
        (require) => {
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
  useAuth,
  withRedux,
  useSchema,
  withPropsOnChange(['theme'], ({ theme }) => ({
    theme: {
      logoWhite: () => <Logo />,
      logoTitle: 'olymp cms',
      ...theme,
    },
  })),
);

const Auth = connect(({ auth }) => ({
  isAuthenticated: !!auth.user,
}))(
  ({ isAuthenticated, ...rest }) => (isAuthenticated ? <IfAuth {...rest} /> : <NoAuth {...rest} />),
);
Auth.displayName = 'CmsAuthSwitch';

const Load = withNavigation(
  connect(({ auth }, { isNavigationLoading }) => ({
    isLoading: isNavigationLoading,
  }))(({ isLoading, ...rest }) => (isLoading ? <ScreenLoader /> : <Auth {...rest} />)),
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
