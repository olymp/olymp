import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import withLocale from 'olymp-locale/de';
import { connect } from 'react-redux';
import { ThemeProvider, ScreenLoader } from 'olymp-fela';
import { useSchema } from 'olymp-slate';
import { useAuth } from 'olymp-auth';
import { LightboxProvider } from 'olymp-cloudinary';
// import { DragDropContext } from 'react-dnd';
import { asyncComponent } from 'react-async-component';
// import HTML5Backend from 'react-dnd-html5-backend';
import { withNavigation } from 'olymp-pages/with-data';
import { get } from 'lodash';
import * as LANG from './lang/de';
import NoAuth from './cms-noauth';
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
      logoWhite: '/logo-white.svg',
      logoTitle: 'olymp cms',
      ...theme,
    },
  })),
  withLocale(LANG),
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
